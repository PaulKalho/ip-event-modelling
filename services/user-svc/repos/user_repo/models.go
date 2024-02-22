// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.25.0

package user_repo

import (
	"github.com/google/uuid"
)

type Invitation struct {
	ID             uuid.UUID
	Email          string
	OrganizationID uuid.UUID
	State          int32
}

type Membership struct {
	ID             uuid.UUID
	UserID         uuid.UUID
	OrganizationID uuid.UUID
	IsAdmin        *bool
}

type Organization struct {
	ID              uuid.UUID
	LongName        string
	ShortName       string
	ContactEmail    string
	AvatarUrl       *string
	IsPersonal      *bool
	CreatedByUserID uuid.UUID
}

type SchemaMigration struct {
	Version int64
	Dirty   bool
}

type User struct {
	ID        uuid.UUID
	Email     string
	Nickname  string
	Name      string
	AvatarUrl *string
}
