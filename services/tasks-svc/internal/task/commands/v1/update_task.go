package v1

import (
	"context"
	pb "gen/services/tasks_svc/v1"
	"hwes"

	"github.com/google/uuid"
	"google.golang.org/protobuf/types/known/timestamppb"

	"tasks-svc/internal/task/aggregate"
)

type UpdateTaskCommandHandler func(
	ctx context.Context,
	taskID uuid.UUID,
	name *string,
	description *string,
	status *pb.TaskStatus,
	public *bool,
	dueAt *timestamppb.Timestamp,
) error

func NewUpdateTaskCommandHandler(as hwes.AggregateStore) UpdateTaskCommandHandler {
	return func(
		ctx context.Context,
		taskID uuid.UUID,
		name *string,
		description *string,
		status *pb.TaskStatus,
		public *bool,
		dueAt *timestamppb.Timestamp,
	) error {
		a, err := aggregate.LoadTaskAggregate(ctx, as, taskID)
		if err != nil {
			return err
		}

		if name != nil {
			if err := a.UpdateName(ctx, *name); err != nil {
				return err
			}
		}

		if description != nil {
			if err := a.UpdateDescription(ctx, *description); err != nil {
				return err
			}
		}

		if status != nil {
			if err := a.UpdateStatus(ctx, *status); err != nil {
				return err
			}
		}

		if public != nil && a.Task.Public != *public {
			if err := a.UpdateTaskPublic(ctx, *public); err != nil {
				return err
			}
		}

		if dueAt != nil {
			if err := a.UpdateDueAt(ctx, dueAt.AsTime()); err != nil {
				return err
			}
		}

		return as.Save(ctx, a)
	}
}
