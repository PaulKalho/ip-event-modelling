package v1

import (
	"context"
	"github.com/google/uuid"
	"hwdb"
	"hwes"
	"tasks-svc/internal/patient/models"
	th "tasks-svc/internal/task/handlers"
	"tasks-svc/repos/patient_repo"
)

type GetPatientDetailsByIDQueryHandler func(ctx context.Context, patientID uuid.UUID) (*models.PatientDetails, error)

func NewGetPatientWithDetailsByIDQueryHandler(as hwes.AggregateStore) GetPatientDetailsByIDQueryHandler {
	return func(ctx context.Context, patientID uuid.UUID) (*models.PatientDetails, error) {
		patientRepo := patient_repo.New(hwdb.GetDB())
		taskHandlers := th.NewTaskHandlers(as)

		patientRes, err := hwdb.Optional(patientRepo.GetPatientWithBedAndRoom)(ctx, patientID)
		if patientRes == nil {
			return nil, nil
		}
		if err := hwdb.Error(ctx, err); err != nil {
			return nil, err
		}

		var bed *models.Bed
		var room *models.Room

		tasks, err := taskHandlers.Queries.V1.GetTasksByPatient(ctx, patientID)
		if err != nil {
			return nil, err
		}

		if patientRes.BedID.Valid {
			bed = &models.Bed{
				ID:   patientRes.BedID.UUID,
				Name: *patientRes.BedName,
			}
		}

		if patientRes.RoomID.Valid {
			room = &models.Room{
				ID:     patientRes.RoomID.UUID,
				Name:   *patientRes.RoomName,
				WardID: patientRes.WardID.UUID,
			}
		}

		return &models.PatientDetails{
			Patient: models.Patient{
				ID:                      patientRes.ID,
				HumanReadableIdentifier: patientRes.HumanReadableIdentifier,
				Notes:                   patientRes.Notes,
				BedID:                   patientRes.BedID,
				IsDischarged:            patientRes.IsDischarged,
				CreatedAt:               patientRes.CreatedAt.Time,
				UpdatedAt:               patientRes.UpdatedAt.Time,
			},
			Tasks: tasks,
			Bed:   bed,
			Room:  room,
		}, nil
	}
}