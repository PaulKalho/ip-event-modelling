// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0
// source: patient_repo.sql

package patient_repo

import (
	"context"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
)

const createPatient = `-- name: CreatePatient :exec
INSERT INTO patients
	(id, human_readable_identifier, notes, created_at, updated_at)
VALUES ($1, $2, $3, $4, $5)
`

type CreatePatientParams struct {
	ID                      uuid.UUID
	HumanReadableIdentifier string
	Notes                   string
	CreatedAt               pgtype.Timestamp
	UpdatedAt               pgtype.Timestamp
}

func (q *Queries) CreatePatient(ctx context.Context, arg CreatePatientParams) error {
	_, err := q.db.Exec(ctx, createPatient,
		arg.ID,
		arg.HumanReadableIdentifier,
		arg.Notes,
		arg.CreatedAt,
		arg.UpdatedAt,
	)
	return err
}

const updatePatient = `-- name: UpdatePatient :exec
UPDATE patients
SET human_readable_identifier = coalesce($2, human_readable_identifier),
    notes = coalesce($3, notes),
    updated_at = coalesce($4, updated_at),
    is_discharged = coalesce($5, is_discharged)
WHERE id = $1
`

type UpdatePatientParams struct {
	ID                     uuid.UUID
	HumanReadableIdentfier *string
	Notes                  *string
	UpdatedAt              pgtype.Timestamp
	IsDischarged           *int32
}

func (q *Queries) UpdatePatient(ctx context.Context, arg UpdatePatientParams) error {
	_, err := q.db.Exec(ctx, updatePatient,
		arg.ID,
		arg.HumanReadableIdentfier,
		arg.Notes,
		arg.UpdatedAt,
		arg.IsDischarged,
	)
	return err
}

const updatePatientBedId = `-- name: UpdatePatientBedId :exec
UPDATE patients
SET bed_id = $1,
    updated_at = $2
WHERE id = $3
`

type UpdatePatientBedIdParams struct {
	BedID     uuid.NullUUID
	UpdatedAt pgtype.Timestamp
	ID        uuid.UUID
}

func (q *Queries) UpdatePatientBedId(ctx context.Context, arg UpdatePatientBedIdParams) error {
	_, err := q.db.Exec(ctx, updatePatientBedId, arg.BedID, arg.UpdatedAt, arg.ID)
	return err
}
