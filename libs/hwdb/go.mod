module hwdb

go 1.20

replace hwutil => ../hwutil

require (
	github.com/jackc/pgx/v5 v5.5.0
	github.com/rs/zerolog v1.31.0
	github.com/vgarvardt/pgx-google-uuid/v5 v5.0.0
	hwutil v0.0.0
)

require (
	github.com/google/uuid v1.4.0 // indirect
	github.com/jackc/pgpassfile v1.0.0 // indirect
	github.com/jackc/pgservicefile v0.0.0-20221227161230-091c0ba34f0a // indirect
	github.com/jackc/puddle/v2 v2.2.1 // indirect
	github.com/mattn/go-colorable v0.1.13 // indirect
	github.com/mattn/go-isatty v0.0.19 // indirect
	golang.org/x/crypto v0.9.0 // indirect
	golang.org/x/sync v0.1.0 // indirect
	golang.org/x/sys v0.12.0 // indirect
	golang.org/x/text v0.9.0 // indirect
)