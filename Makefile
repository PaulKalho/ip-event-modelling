VERSION ?= $(shell git log --format="%h" -n 1)
DOCKERFILE_SERVICES = Dockerfile.service

# Go services are build using the Dockerfile.service dockerfile
GO_SERVICES = $(subst services/,,$(wildcard services/*))

# Docker images have their own Dockerfile in the root of the service directory
DOCKER_IMAGES = $(subst images/,,$(wildcard images/*))

ifeq ($(OS),Windows_NT)
    # Windows
    WORKING_DIRECTORY := $(shell cd)
else
    # Linux
    WORKING_DIRECTORY := $$(pwd)
endif

export WORKING_DIRECTORY

.PHONY: proto
proto:
	docker run --rm -v $(WORKING_DIRECTORY):/wd ghcr.io/helpwave/service-preproc:edge lint || true
	docker run --rm -v $(WORKING_DIRECTORY):/wd ghcr.io/helpwave/service-preproc:edge generate

.PHONY: proto_lint
proto_lint:
	docker run --rm -v $(WORKING_DIRECTORY):/wd ghcr.io/helpwave/service-preproc:edge lint

.PHONY: GO_SERVICES
$(GO_SERVICES): proto
	docker build -f ${DOCKERFILE_SERVICES} --build-arg=VERSION=${VERSION} --build-arg=SERVICE=$@ -t ghcr.io/helpwave/$@:edge .

.PHONY: DOCKER_SERVICES
$(DOCKER_IMAGES):
	cd images/$@ && docker build -t ghcr.io/helpwave/$@:edge .

.PHONY: all
all: GO_SERVICES

.PHONY: clean
clean:
	docker rmi $$(docker images --format '{{.Repository}}:{{.Tag}}' | grep "^helpwave/")
	yes | docker image prune

.PHONE: migrate-up
migrate-up:
	docker run --rm -v $(WORKING_DIRECTORY)/services/$(SERVICE)/migrations:/migrations --network host migrate/migrate -path=/migrations/ -database postgres://postgres:postgres@localhost:5432/$(SERVICE)?sslmode=disable up
