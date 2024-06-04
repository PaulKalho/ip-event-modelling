package main

import (
	"common"
	"context"
	pb "gen/proto/services/property_svc/v1"
	"hwdb"
	"hwes/eventstoredb"
	propertySet "property-svc/internal/property-set/api"
	propertyValue "property-svc/internal/property-value/api"
	"property-svc/internal/property-value/projections/property_value_postgres_projection"
	propertyViews "property-svc/internal/property-view/api"
	"property-svc/internal/property-view/projections/task_views_postgres"
	property "property-svc/internal/property/api"
	"property-svc/internal/property/projections/property_postgres_projection"

	daprd "github.com/dapr/go-sdk/service/grpc"
	"github.com/rs/zerolog/log"
	psh "property-svc/internal/property-set/handlers"
	pvh "property-svc/internal/property-value/handlers"
	pvih "property-svc/internal/property-view/handlers"
	ph "property-svc/internal/property/handlers"
)

const ServiceName = "property-svc"

// Version is set at compile time
var Version string

func main() {
	ctx, cancel := context.WithCancel(context.Background())
	common.Setup(ServiceName, Version, common.WithAuth())

	closeDBPool := hwdb.SetupDatabaseFromEnv(ctx)
	defer closeDBPool()

	eventStore := eventstoredb.SetupEventStoreByEnv()
	aggregateStore := eventstoredb.NewAggregateStore(eventStore)

	propertyHandlers := ph.NewPropertyHandlers(aggregateStore)
	propertySetHandlers := psh.NewPropertySetHandlers(aggregateStore)
	propertyViewHandlers := pvih.NewPropertyViewHandlers(aggregateStore)
	propertyValueHandlers := pvh.NewPropertyValueHandlers(aggregateStore)

	go func() {
		propertyPostgresProjection := property_postgres_projection.NewProjection(eventStore, ServiceName)
		if err := propertyPostgresProjection.Subscribe(ctx); err != nil {
			log.Err(err).Msg("error during property-postgres projection subscription")
			cancel()
		}
	}()

	go func() {
		propertyValuePostgresProjection := property_value_postgres_projection.NewProjection(eventStore, ServiceName)
		if err := propertyValuePostgresProjection.Subscribe(ctx); err != nil {
			log.Err(err).Msg("error during propertyValue-postgres projection subscription")
			cancel()
		}
	}()

	go func() {
		taskViewsPostgresProjection := task_views_postgres.NewProjection(eventStore, ServiceName)
		if err := taskViewsPostgresProjection.Subscribe(ctx); err != nil {
			log.Err(err).Msg("error during taskViewsPostgresProjection subscription")
			cancel()
		}
	}()

	common.StartNewGRPCServer(context.Background(), common.ResolveAddrFromEnv(), func(server *daprd.Server) {
		grpcServer := server.GrpcServer()

		pb.RegisterPropertyServiceServer(grpcServer, property.NewPropertyService(aggregateStore, propertyHandlers))
		pb.RegisterPropertySetServiceServer(grpcServer, propertySet.NewPropertySetService(aggregateStore, propertySetHandlers))
		pb.RegisterPropertyValueServiceServer(grpcServer, propertyValue.NewPropertyValueService(aggregateStore, propertyValueHandlers))
		pb.RegisterPropertyViewsServiceServer(grpcServer, propertyViews.NewPropertyViewService(aggregateStore, propertyViewHandlers))
	})

	cancel()
}
