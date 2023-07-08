package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type BedRepository struct {
	db *gorm.DB
}

func NewRoomRepositoryWithDB(db *gorm.DB) *BedRepository {
	return &BedRepository{
		db: db,
	}
}

func (r *BedRepository) GetBedsByRoom(roomID uuid.UUID) ([]Bed, error) {
	var beds []Bed

	if err := r.db.Where("room_id = ?", roomID).Find(&beds).Error; err != nil {
		return nil, err
	}

	return beds, nil
}