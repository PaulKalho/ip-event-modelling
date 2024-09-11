// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0
// source: property_value_repo.sql

package property_value_repo

import (
	"context"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
)

const createBasicPropertyValue = `-- name: CreateBasicPropertyValue :exec
INSERT INTO property_values
	(id, property_id, subject_id, text_value, number_value, bool_value, date_value, date_time_value)
VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8
)
`

type CreateBasicPropertyValueParams struct {
	ID            uuid.UUID
	PropertyID    uuid.UUID
	SubjectID     uuid.UUID
	TextValue     *string
	NumberValue   *float64
	BoolValue     *bool
	DateValue     pgtype.Date
	DateTimeValue pgtype.Timestamp
}

func (q *Queries) CreateBasicPropertyValue(ctx context.Context, arg CreateBasicPropertyValueParams) error {
	_, err := q.db.Exec(ctx, createBasicPropertyValue,
		arg.ID,
		arg.PropertyID,
		arg.SubjectID,
		arg.TextValue,
		arg.NumberValue,
		arg.BoolValue,
		arg.DateValue,
		arg.DateTimeValue,
	)
	return err
}

const deletePropertyValue = `-- name: DeletePropertyValue :exec
DELETE FROM property_values WHERE id = $1
`

func (q *Queries) DeletePropertyValue(ctx context.Context, id uuid.UUID) error {
	_, err := q.db.Exec(ctx, deletePropertyValue, id)
	return err
}

const disconnectValueFromAllSelectOptions = `-- name: DisconnectValueFromAllSelectOptions :exec
DELETE FROM multi_select_values WHERE value_id = $1
`

func (q *Queries) DisconnectValueFromAllSelectOptions(ctx context.Context, valueID uuid.UUID) error {
	_, err := q.db.Exec(ctx, disconnectValueFromAllSelectOptions, valueID)
	return err
}

const getPropertyValueByID = `-- name: GetPropertyValueByID :one
SELECT id, property_id, subject_id, text_value, number_value, bool_value, date_value, date_time_value FROM property_values WHERE id = $1
`

func (q *Queries) GetPropertyValueByID(ctx context.Context, id uuid.UUID) (PropertyValue, error) {
	row := q.db.QueryRow(ctx, getPropertyValueByID, id)
	var i PropertyValue
	err := row.Scan(
		&i.ID,
		&i.PropertyID,
		&i.SubjectID,
		&i.TextValue,
		&i.NumberValue,
		&i.BoolValue,
		&i.DateValue,
		&i.DateTimeValue,
	)
	return i, err
}

const getPropertyValueBySubjectIDAndPropertyID = `-- name: GetPropertyValueBySubjectIDAndPropertyID :one
SELECT id
FROM property_values
WHERE (subject_id = $1 AND property_id = $2) OR id = $3
`

type GetPropertyValueBySubjectIDAndPropertyIDParams struct {
	SubjectID  uuid.UUID
	PropertyID uuid.UUID
	ID         uuid.UUID
}

func (q *Queries) GetPropertyValueBySubjectIDAndPropertyID(ctx context.Context, arg GetPropertyValueBySubjectIDAndPropertyIDParams) (uuid.UUID, error) {
	row := q.db.QueryRow(ctx, getPropertyValueBySubjectIDAndPropertyID, arg.SubjectID, arg.PropertyID, arg.ID)
	var id uuid.UUID
	err := row.Scan(&id)
	return id, err
}

const getPropertyValuesWithPropertyBySubjectID = `-- name: GetPropertyValuesWithPropertyBySubjectID :many
SELECT
	property_values.id as property_value_id,
	property_values.text_value,
	property_values.bool_value,
	property_values.number_value,
	property_values.date_time_value,
	property_values.date_value,
	properties.id as property_id,
	properties.name as property_name,
	properties.is_archived as property_is_archived,
	properties.field_type as field_type
FROM property_values
	JOIN properties ON property_values.property_id = properties.id
WHERE subject_id = $1
`

type GetPropertyValuesWithPropertyBySubjectIDRow struct {
	PropertyValueID    uuid.UUID
	TextValue          *string
	BoolValue          *bool
	NumberValue        *float64
	DateTimeValue      pgtype.Timestamp
	DateValue          pgtype.Date
	PropertyID         uuid.UUID
	PropertyName       string
	PropertyIsArchived bool
	FieldType          int32
}

func (q *Queries) GetPropertyValuesWithPropertyBySubjectID(ctx context.Context, subjectID uuid.UUID) ([]GetPropertyValuesWithPropertyBySubjectIDRow, error) {
	rows, err := q.db.Query(ctx, getPropertyValuesWithPropertyBySubjectID, subjectID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []GetPropertyValuesWithPropertyBySubjectIDRow{}
	for rows.Next() {
		var i GetPropertyValuesWithPropertyBySubjectIDRow
		if err := rows.Scan(
			&i.PropertyValueID,
			&i.TextValue,
			&i.BoolValue,
			&i.NumberValue,
			&i.DateTimeValue,
			&i.DateValue,
			&i.PropertyID,
			&i.PropertyName,
			&i.PropertyIsArchived,
			&i.FieldType,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getRelevantPropertyViews = `-- name: GetRelevantPropertyViews :many
SELECT
	properties.id, properties.subject_type, properties.field_type, properties.name, properties.description, properties.is_archived, properties.set_id, properties.select_data_id,
	values.id as value_id,
	values.text_value,
	values.bool_value,
	values.number_value,
	values.date_time_value,
	values.date_value,
	so.id as select_option_id,
	so.name as select_option_name,
	so.description as select_option_description
FROM properties
	LEFT JOIN property_values as values ON values.property_id = properties.id
	LEFT JOIN multi_select_values as msv ON msv.value_id = values.id
	LEFT JOIN select_options as so ON so.id = msv.select_option
WHERE
	properties.is_archived = false
	AND (
		values.subject_id = $1 -- implies existence of value
		OR properties.id = ANY($2 :: uuid[])
	)
`

type GetRelevantPropertyViewsParams struct {
	SubjectID     uuid.UUID
	AlwaysInclude []uuid.UUID
}

type GetRelevantPropertyViewsRow struct {
	Property                Property
	ValueID                 uuid.NullUUID
	TextValue               *string
	BoolValue               *bool
	NumberValue             *float64
	DateTimeValue           pgtype.Timestamp
	DateValue               pgtype.Date
	SelectOptionID          uuid.NullUUID
	SelectOptionName        *string
	SelectOptionDescription *string
}

func (q *Queries) GetRelevantPropertyViews(ctx context.Context, arg GetRelevantPropertyViewsParams) ([]GetRelevantPropertyViewsRow, error) {
	rows, err := q.db.Query(ctx, getRelevantPropertyViews, arg.SubjectID, arg.AlwaysInclude)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []GetRelevantPropertyViewsRow{}
	for rows.Next() {
		var i GetRelevantPropertyViewsRow
		if err := rows.Scan(
			&i.Property.ID,
			&i.Property.SubjectType,
			&i.Property.FieldType,
			&i.Property.Name,
			&i.Property.Description,
			&i.Property.IsArchived,
			&i.Property.SetID,
			&i.Property.SelectDataID,
			&i.ValueID,
			&i.TextValue,
			&i.BoolValue,
			&i.NumberValue,
			&i.DateTimeValue,
			&i.DateValue,
			&i.SelectOptionID,
			&i.SelectOptionName,
			&i.SelectOptionDescription,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const updatePropertyValueByID = `-- name: UpdatePropertyValueByID :exec
UPDATE property_values
SET text_value = $2,
	number_value = $3,
	bool_value = $4,
	date_value = $5,
	date_time_value = $6
WHERE id = $1
`

type UpdatePropertyValueByIDParams struct {
	ID            uuid.UUID
	TextValue     *string
	NumberValue   *float64
	BoolValue     *bool
	DateValue     pgtype.Date
	DateTimeValue pgtype.Timestamp
}

func (q *Queries) UpdatePropertyValueByID(ctx context.Context, arg UpdatePropertyValueByIDParams) error {
	_, err := q.db.Exec(ctx, updatePropertyValueByID,
		arg.ID,
		arg.TextValue,
		arg.NumberValue,
		arg.BoolValue,
		arg.DateValue,
		arg.DateTimeValue,
	)
	return err
}
