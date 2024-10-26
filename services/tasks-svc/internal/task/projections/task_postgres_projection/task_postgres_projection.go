package task_postgres_projection

import (
	"context"
	"errors"
	"fmt"
	pb "gen/services/tasks_svc/v1"
	"hwdb"
	"hwes"
	"hwes/eventstoredb/projections/custom"
	"hwutil"

	"github.com/EventStore/EventStore-Client-Go/v4/esdb"
	"github.com/google/uuid"
	zlog "github.com/rs/zerolog/log"

	"tasks-svc/internal/task/aggregate"
	taskEventsV1 "tasks-svc/internal/task/events/v1"
	"tasks-svc/repos/task_repo"
)

type Projection struct {
	*custom.CustomProjection
	taskRepo *task_repo.Queries
}

func NewProjection(es *esdb.Client, serviceName string) *Projection {
	subscriptionGroupName := serviceName + "-task-postgres-projection"
	p := &Projection{
		CustomProjection: custom.NewCustomProjection(
			es,
			subscriptionGroupName,
			&[]string{aggregate.TaskAggregateType + "-"},
		),
		taskRepo: task_repo.New(hwdb.GetDB()),
	}
	p.initEventListeners()
	return p
}

func (p *Projection) initEventListeners() {
	p.RegisterEventListener(taskEventsV1.TaskCreated, p.onTaskCreated)
	p.RegisterEventListener(taskEventsV1.TaskStatusUpdated, p.onTaskStatusUpdated)
	p.RegisterEventListener(taskEventsV1.TaskNameUpdated, p.onTaskNameUpdated)
	p.RegisterEventListener(taskEventsV1.TaskDescriptionUpdated, p.onTaskDescriptionUpdated)
	p.RegisterEventListener(taskEventsV1.TaskDueAtUpdated, p.onTaskDueAtUpdated)
	p.RegisterEventListener(taskEventsV1.TaskPublished, p.onTaskPublished)
	p.RegisterEventListener(taskEventsV1.TaskUnpublished, p.onTaskUnpublished)
	p.RegisterEventListener(taskEventsV1.SubtaskCreated, p.onSubtaskCreated)
	p.RegisterEventListener(taskEventsV1.SubtaskNameUpdated, p.onSubtaskNameUpdated)
	p.RegisterEventListener(taskEventsV1.SubtaskCompleted, p.onSubtaskCompleted)
	p.RegisterEventListener(taskEventsV1.SubtaskUncompleted, p.onSubtaskUncompleted)
	p.RegisterEventListener(taskEventsV1.SubtaskDeleted, p.onSubtaskDeleted)
	p.RegisterEventListener(taskEventsV1.TaskDueAtRemoved, p.onTaskDueAtRemoved)
	p.RegisterEventListener(taskEventsV1.TaskDeleted, p.onTaskDeleted)
}

func (p *Projection) onTaskCreated(ctx context.Context, evt hwes.Event) (error, *esdb.NackAction) {
	log := zlog.Ctx(ctx)

	var payload taskEventsV1.TaskCreatedEvent
	if err := evt.GetJsonData(&payload); err != nil {
		log.Error().Err(err).Msg("unmarshal failed")
		return err, hwutil.PtrTo(esdb.NackActionPark)
	}

	taskID, err := uuid.Parse(payload.ID)
	if err != nil {
		return err, hwutil.PtrTo(esdb.NackActionPark)
	}

	value, found := pb.TaskStatus_value[payload.Status]
	if !found {
		return fmt.Errorf("invalid taskStatus: %s", payload.Status), hwutil.PtrTo(esdb.NackActionPark)
	}
	status := (pb.TaskStatus)(value)

	var committerID uuid.UUID
	if evt.CommitterUserID != nil {
		committerID = *evt.CommitterUserID
	} else {
		return errors.New("commiterId is not set"), hwutil.PtrTo(esdb.NackActionPark)
	}

	// Add to db
	err = p.taskRepo.CreateTask(ctx, task_repo.CreateTaskParams{
		ID:        taskID,
		Name:      payload.Name,
		Status:    int32(status),
		CreatedBy: committerID,
		CreatedAt: hwdb.TimeToTimestamp(payload.CreatedAt),
	})
	if err := hwdb.Error(ctx, err); err != nil {
		return err, hwutil.PtrTo(esdb.NackActionRetry)
	}

	return nil, nil
}

func (p *Projection) onTaskStatusUpdated(ctx context.Context, evt hwes.Event) (error, *esdb.NackAction) {
	log := zlog.Ctx(ctx)

	var payload taskEventsV1.TaskStatusUpdatedEvent
	if err := evt.GetJsonData(&payload); err != nil {
		log.Error().Err(err).Msg("unmarshal failed")
		return err, hwutil.PtrTo(esdb.NackActionPark)
	}

	value, found := pb.TaskStatus_value[payload.Status]
	if !found {
		return fmt.Errorf("invalid taskStatus: %s", payload.Status), hwutil.PtrTo(esdb.NackActionPark)
	}
	status := (pb.TaskStatus)(value)

	err := p.taskRepo.UpdateTask(ctx, task_repo.UpdateTaskParams{
		ID:     evt.AggregateID,
		Status: hwutil.PtrTo(int32(status)),
	})
	if err = hwdb.Error(ctx, err); err != nil {
		return err, hwutil.PtrTo(esdb.NackActionRetry)
	}

	return nil, nil
}

func (p *Projection) onTaskNameUpdated(ctx context.Context, evt hwes.Event) (error, *esdb.NackAction) {
	log := zlog.Ctx(ctx)

	var payload taskEventsV1.TaskNameUpdatedEvent
	if err := evt.GetJsonData(&payload); err != nil {
		log.Error().Err(err).Msg("unmarshal failed")
		return err, hwutil.PtrTo(esdb.NackActionPark)
	}

	err := p.taskRepo.UpdateTask(ctx, task_repo.UpdateTaskParams{
		ID:   evt.AggregateID,
		Name: &payload.Name,
	})
	if err = hwdb.Error(ctx, err); err != nil {
		return err, hwutil.PtrTo(esdb.NackActionRetry)
	}

	return nil, nil
}

func (p *Projection) onTaskDescriptionUpdated(ctx context.Context, evt hwes.Event) (error, *esdb.NackAction) {
	log := zlog.Ctx(ctx)

	var payload taskEventsV1.TaskDescriptionUpdatedEvent
	if err := evt.GetJsonData(&payload); err != nil {
		log.Error().Err(err).Msg("unmarshal failed")
		return err, hwutil.PtrTo(esdb.NackActionPark)
	}

	err := p.taskRepo.UpdateTask(ctx, task_repo.UpdateTaskParams{
		ID:          evt.AggregateID,
		Description: &payload.Description,
	})
	if err = hwdb.Error(ctx, err); err != nil {
		return err, hwutil.PtrTo(esdb.NackActionRetry)
	}

	return nil, nil
}

func (p *Projection) onTaskDueAtUpdated(ctx context.Context, evt hwes.Event) (error, *esdb.NackAction) {
	log := zlog.Ctx(ctx)

	var payload taskEventsV1.TaskDueAtUpdatedEvent
	if err := evt.GetJsonData(&payload); err != nil {
		log.Error().Err(err).Msg("unmarshal failed")
		return err, hwutil.PtrTo(esdb.NackActionPark)
	}

	err := p.taskRepo.UpdateTask(ctx, task_repo.UpdateTaskParams{
		ID:    evt.AggregateID,
		DueAt: hwdb.TimeToTimestamp(payload.DueAt),
	})
	if err = hwdb.Error(ctx, err); err != nil {
		return err, hwutil.PtrTo(esdb.NackActionRetry)
	}

	return nil, nil
}

func (p *Projection) onTaskPublished(ctx context.Context, evt hwes.Event) (error, *esdb.NackAction) {
	err := p.taskRepo.UpdateTask(ctx, task_repo.UpdateTaskParams{
		ID:     evt.AggregateID,
		Public: hwutil.PtrTo(true),
	})
	if err = hwdb.Error(ctx, err); err != nil {
		return err, hwutil.PtrTo(esdb.NackActionRetry)
	}

	return nil, nil
}

func (p *Projection) onTaskUnpublished(ctx context.Context, evt hwes.Event) (error, *esdb.NackAction) {
	err := p.taskRepo.UpdateTask(ctx, task_repo.UpdateTaskParams{
		ID:     evt.AggregateID,
		Public: hwutil.PtrTo(false),
	})
	if err := hwdb.Error(ctx, err); err != nil {
		return err, hwutil.PtrTo(esdb.NackActionRetry)
	}

	return nil, nil
}

func (p *Projection) onSubtaskCreated(ctx context.Context, evt hwes.Event) (error, *esdb.NackAction) {
	log := zlog.Ctx(ctx)

	var payload taskEventsV1.SubtaskCreatedEvent
	if err := evt.GetJsonData(&payload); err != nil {
		log.Error().Err(err).Msg("unmarshal failed")
		return err, hwutil.PtrTo(esdb.NackActionPark)
	}

	subtaskID, err := uuid.Parse(payload.SubtaskID)
	if err != nil {
		return err, hwutil.PtrTo(esdb.NackActionPark)
	}

	err = p.taskRepo.CreateSubtask(ctx, task_repo.CreateSubtaskParams{
		ID:     subtaskID,
		TaskID: evt.AggregateID,
		Name:   payload.Name,
		Done:   payload.Done,
	})
	if err := hwdb.Error(ctx, err); err != nil {
		return err, hwutil.PtrTo(esdb.NackActionRetry)
	}

	return nil, nil
}

func (p *Projection) onSubtaskNameUpdated(ctx context.Context, evt hwes.Event) (error, *esdb.NackAction) {
	log := zlog.Ctx(ctx)

	var payload taskEventsV1.SubtaskCreatedEvent
	if err := evt.GetJsonData(&payload); err != nil {
		log.Error().Err(err).Msg("unmarshal failed")
		return err, hwutil.PtrTo(esdb.NackActionPark)
	}

	subtaskID, err := uuid.Parse(payload.SubtaskID)
	if err != nil {
		return err, hwutil.PtrTo(esdb.NackActionPark)
	}

	err = p.taskRepo.UpdateSubtask(ctx, task_repo.UpdateSubtaskParams{
		ID:   subtaskID,
		Name: &payload.Name,
	})
	if err = hwdb.Error(ctx, err); err != nil {
		return err, hwutil.PtrTo(esdb.NackActionRetry)
	}

	return nil, nil
}

func (p *Projection) onSubtaskCompleted(ctx context.Context, evt hwes.Event) (error, *esdb.NackAction) {
	log := zlog.Ctx(ctx)

	var payload taskEventsV1.SubtaskCompletedEvent
	if err := evt.GetJsonData(&payload); err != nil {
		log.Error().Err(err).Msg("unmarshal failed")
		return err, hwutil.PtrTo(esdb.NackActionPark)
	}

	subtaskID, err := uuid.Parse(payload.SubtaskID)
	if err != nil {
		return err, hwutil.PtrTo(esdb.NackActionPark)
	}

	err = p.taskRepo.UpdateSubtask(ctx, task_repo.UpdateSubtaskParams{
		ID:   subtaskID,
		Done: hwutil.PtrTo(true),
	})
	if err := hwdb.Error(ctx, err); err != nil {
		return err, hwutil.PtrTo(esdb.NackActionRetry)
	}

	return nil, nil
}

func (p *Projection) onSubtaskUncompleted(ctx context.Context, evt hwes.Event) (error, *esdb.NackAction) {
	log := zlog.Ctx(ctx)

	var payload taskEventsV1.SubtaskUncompletedEvent
	if err := evt.GetJsonData(&payload); err != nil {
		log.Error().Err(err).Msg("unmarshal failed")
		return err, hwutil.PtrTo(esdb.NackActionPark)
	}

	subtaskID, err := uuid.Parse(payload.SubtaskID)
	if err != nil {
		return err, hwutil.PtrTo(esdb.NackActionPark)
	}

	err = p.taskRepo.UpdateSubtask(ctx, task_repo.UpdateSubtaskParams{
		ID:   subtaskID,
		Done: hwutil.PtrTo(false),
	})
	if err := hwdb.Error(ctx, err); err != nil {
		return err, hwutil.PtrTo(esdb.NackActionRetry)
	}

	return nil, nil
}

func (p *Projection) onSubtaskDeleted(ctx context.Context, evt hwes.Event) (error, *esdb.NackAction) {
	log := zlog.Ctx(ctx)

	var payload taskEventsV1.SubtaskDeletedEvent
	if err := evt.GetJsonData(&payload); err != nil {
		log.Error().Err(err).Msg("unmarshal failed")
		return err, hwutil.PtrTo(esdb.NackActionPark)
	}

	subtaskID, err := uuid.Parse(payload.SubtaskID)
	if err != nil {
		return err, hwutil.PtrTo(esdb.NackActionPark)
	}

	err = p.taskRepo.DeleteSubtask(ctx, subtaskID)
	if err := hwdb.Error(ctx, err); err != nil {
		return err, hwutil.PtrTo(esdb.NackActionRetry)
	}
	return nil, nil
}

func (p *Projection) onTaskDueAtRemoved(ctx context.Context, evt hwes.Event) (error, *esdb.NackAction) {
	err := p.taskRepo.RemoveTaskDueAt(ctx, evt.AggregateID)
	if err := hwdb.Error(ctx, err); err != nil {
		return err, hwutil.PtrTo(esdb.NackActionRetry)
	}
	return nil, nil
}

func (p *Projection) onTaskDeleted(ctx context.Context, evt hwes.Event) (error, *esdb.NackAction) {
	err := p.taskRepo.DeleteTask(ctx, evt.AggregateID)
	if err := hwdb.Error(ctx, err); err != nil {
		return err, hwutil.PtrTo(esdb.NackActionRetry)
	}
	return nil, nil
}
