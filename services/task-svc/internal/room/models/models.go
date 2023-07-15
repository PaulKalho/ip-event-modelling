package models

import (
	"github.com/google/uuid"
	"task-svc/internal/patient/models"
)

type Base struct {
	Name string `gorm:"column:name"`
}

type Room struct {
	Base
	ID             uuid.UUID `gorm:"column:id;default:uuid_generate_v4()"`
	OrganizationID uuid.UUID `gorm:"column:organization_id"`
	Beds           []Bed     `gorm:"foreignKey:RoomID"`
	WardID         uuid.UUID `gorm:"column:ward_id"`
}

type Bed struct {
	ID             uuid.UUID       `gorm:"column:id;default:uuid_generate_v4()"`
	RoomID         uuid.UUID       `gorm:"column:room_id"`
	Room           *Room           `gorm:"foreignKey:ID"`
	Patient        *models.Patient `gorm:"foreignKey:BedID"`
	OrganizationID uuid.UUID       `gorm:"column:organization_id"`
}
