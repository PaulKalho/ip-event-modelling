package models

import "github.com/google/uuid"

type Base struct {
	/* Empty for the later extension and use */
}

type Bed struct {
	Base
	ID             uuid.UUID `gorm:"column:id;default:uuid_generate_v4()"`
	OrganizationID uuid.UUID `gorm:"column:organization_id"`
	RoomID         uuid.UUID `gorm:"column:room_id"`
}
