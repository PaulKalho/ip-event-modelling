# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from services.tasks_svc.v1 import task_template_svc_pb2 as services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2


class TaskTemplateServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.CreateTaskTemplate = channel.unary_unary(
                '/services.tasks_svc.v1.TaskTemplateService/CreateTaskTemplate',
                request_serializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.CreateTaskTemplateRequest.SerializeToString,
                response_deserializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.CreateTaskTemplateResponse.FromString,
                _registered_method=True)
        self.DeleteTaskTemplate = channel.unary_unary(
                '/services.tasks_svc.v1.TaskTemplateService/DeleteTaskTemplate',
                request_serializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.DeleteTaskTemplateRequest.SerializeToString,
                response_deserializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.DeleteTaskTemplateResponse.FromString,
                _registered_method=True)
        self.DeleteTaskTemplateSubTask = channel.unary_unary(
                '/services.tasks_svc.v1.TaskTemplateService/DeleteTaskTemplateSubTask',
                request_serializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.DeleteTaskTemplateSubTaskRequest.SerializeToString,
                response_deserializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.DeleteTaskTemplateSubTaskResponse.FromString,
                _registered_method=True)
        self.UpdateTaskTemplate = channel.unary_unary(
                '/services.tasks_svc.v1.TaskTemplateService/UpdateTaskTemplate',
                request_serializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.UpdateTaskTemplateRequest.SerializeToString,
                response_deserializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.UpdateTaskTemplateResponse.FromString,
                _registered_method=True)
        self.UpdateTaskTemplateSubTask = channel.unary_unary(
                '/services.tasks_svc.v1.TaskTemplateService/UpdateTaskTemplateSubTask',
                request_serializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.UpdateTaskTemplateSubTaskRequest.SerializeToString,
                response_deserializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.UpdateTaskTemplateSubTaskResponse.FromString,
                _registered_method=True)
        self.CreateTaskTemplateSubTask = channel.unary_unary(
                '/services.tasks_svc.v1.TaskTemplateService/CreateTaskTemplateSubTask',
                request_serializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.CreateTaskTemplateSubTaskRequest.SerializeToString,
                response_deserializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.CreateTaskTemplateSubTaskResponse.FromString,
                _registered_method=True)
        self.GetAllTaskTemplates = channel.unary_unary(
                '/services.tasks_svc.v1.TaskTemplateService/GetAllTaskTemplates',
                request_serializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.GetAllTaskTemplatesRequest.SerializeToString,
                response_deserializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.GetAllTaskTemplatesResponse.FromString,
                _registered_method=True)


class TaskTemplateServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def CreateTaskTemplate(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteTaskTemplate(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteTaskTemplateSubTask(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateTaskTemplate(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateTaskTemplateSubTask(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateTaskTemplateSubTask(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetAllTaskTemplates(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_TaskTemplateServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'CreateTaskTemplate': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateTaskTemplate,
                    request_deserializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.CreateTaskTemplateRequest.FromString,
                    response_serializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.CreateTaskTemplateResponse.SerializeToString,
            ),
            'DeleteTaskTemplate': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteTaskTemplate,
                    request_deserializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.DeleteTaskTemplateRequest.FromString,
                    response_serializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.DeleteTaskTemplateResponse.SerializeToString,
            ),
            'DeleteTaskTemplateSubTask': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteTaskTemplateSubTask,
                    request_deserializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.DeleteTaskTemplateSubTaskRequest.FromString,
                    response_serializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.DeleteTaskTemplateSubTaskResponse.SerializeToString,
            ),
            'UpdateTaskTemplate': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateTaskTemplate,
                    request_deserializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.UpdateTaskTemplateRequest.FromString,
                    response_serializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.UpdateTaskTemplateResponse.SerializeToString,
            ),
            'UpdateTaskTemplateSubTask': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateTaskTemplateSubTask,
                    request_deserializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.UpdateTaskTemplateSubTaskRequest.FromString,
                    response_serializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.UpdateTaskTemplateSubTaskResponse.SerializeToString,
            ),
            'CreateTaskTemplateSubTask': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateTaskTemplateSubTask,
                    request_deserializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.CreateTaskTemplateSubTaskRequest.FromString,
                    response_serializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.CreateTaskTemplateSubTaskResponse.SerializeToString,
            ),
            'GetAllTaskTemplates': grpc.unary_unary_rpc_method_handler(
                    servicer.GetAllTaskTemplates,
                    request_deserializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.GetAllTaskTemplatesRequest.FromString,
                    response_serializer=services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.GetAllTaskTemplatesResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'services.tasks_svc.v1.TaskTemplateService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))
    server.add_registered_method_handlers('services.tasks_svc.v1.TaskTemplateService', rpc_method_handlers)


 # This class is part of an EXPERIMENTAL API.
class TaskTemplateService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def CreateTaskTemplate(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/services.tasks_svc.v1.TaskTemplateService/CreateTaskTemplate',
            services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.CreateTaskTemplateRequest.SerializeToString,
            services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.CreateTaskTemplateResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def DeleteTaskTemplate(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/services.tasks_svc.v1.TaskTemplateService/DeleteTaskTemplate',
            services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.DeleteTaskTemplateRequest.SerializeToString,
            services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.DeleteTaskTemplateResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def DeleteTaskTemplateSubTask(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/services.tasks_svc.v1.TaskTemplateService/DeleteTaskTemplateSubTask',
            services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.DeleteTaskTemplateSubTaskRequest.SerializeToString,
            services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.DeleteTaskTemplateSubTaskResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def UpdateTaskTemplate(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/services.tasks_svc.v1.TaskTemplateService/UpdateTaskTemplate',
            services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.UpdateTaskTemplateRequest.SerializeToString,
            services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.UpdateTaskTemplateResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def UpdateTaskTemplateSubTask(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/services.tasks_svc.v1.TaskTemplateService/UpdateTaskTemplateSubTask',
            services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.UpdateTaskTemplateSubTaskRequest.SerializeToString,
            services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.UpdateTaskTemplateSubTaskResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def CreateTaskTemplateSubTask(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/services.tasks_svc.v1.TaskTemplateService/CreateTaskTemplateSubTask',
            services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.CreateTaskTemplateSubTaskRequest.SerializeToString,
            services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.CreateTaskTemplateSubTaskResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def GetAllTaskTemplates(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/services.tasks_svc.v1.TaskTemplateService/GetAllTaskTemplates',
            services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.GetAllTaskTemplatesRequest.SerializeToString,
            services_dot_tasks__svc_dot_v1_dot_task__template__svc__pb2.GetAllTaskTemplatesResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)
