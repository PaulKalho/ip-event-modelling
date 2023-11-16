# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/services/task_svc/v1/task_template_svc.proto
# Protobuf Python Version: 4.25.1
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n2proto/services/task_svc/v1/task_template_svc.proto\x12\x1aproto.services.task_svc.v1\"\x8a\x02\n\x19\x43reateTaskTemplateRequest\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12%\n\x0b\x64\x65scription\x18\x02 \x01(\tH\x00R\x0b\x64\x65scription\x88\x01\x01\x12\x1c\n\x07ward_id\x18\x04 \x01(\tH\x01R\x06wardId\x88\x01\x01\x12Y\n\x08subtasks\x18\x05 \x03(\x0b\x32=.proto.services.task_svc.v1.CreateTaskTemplateRequest.SubTaskR\x08subtasks\x1a\x1d\n\x07SubTask\x12\x12\n\x04name\x18\x01 \x01(\tR\x04nameB\x0e\n\x0c_descriptionB\n\n\x08_ward_id\",\n\x1a\x43reateTaskTemplateResponse\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\"\x1c\n\x1aGetAllTaskTemplatesRequest\"\xeb\x03\n\x1bGetAllTaskTemplatesResponse\x12\x62\n\ttemplates\x18\x01 \x03(\x0b\x32\x44.proto.services.task_svc.v1.GetAllTaskTemplatesResponse.TaskTemplateR\ttemplates\x1a\xe7\x02\n\x0cTaskTemplate\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x12\n\x04name\x18\x02 \x01(\tR\x04name\x12 \n\x0b\x64\x65scription\x18\x03 \x01(\tR\x0b\x64\x65scription\x12\x1b\n\tis_public\x18\x04 \x01(\x08R\x08isPublic\x12\"\n\ncreated_by\x18\x06 \x01(\tH\x00R\tcreatedBy\x88\x01\x01\x12h\n\x08subtasks\x18\x07 \x03(\x0b\x32L.proto.services.task_svc.v1.GetAllTaskTemplatesResponse.TaskTemplate.SubTaskR\x08subtasks\x1aW\n\x07SubTask\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12(\n\x10task_template_id\x18\x02 \x01(\tR\x0etaskTemplateId\x12\x12\n\x04name\x18\x03 \x01(\tR\x04nameB\r\n\x0b_created_by\"+\n\x19\x44\x65leteTaskTemplateRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\"\x1c\n\x1a\x44\x65leteTaskTemplateResponse\"2\n DeleteTaskTemplateSubTaskRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\"#\n!DeleteTaskTemplateSubTaskResponse\"\x84\x01\n\x19UpdateTaskTemplateRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x17\n\x04name\x18\x02 \x01(\tH\x00R\x04name\x88\x01\x01\x12%\n\x0b\x64\x65scription\x18\x03 \x01(\tH\x01R\x0b\x64\x65scription\x88\x01\x01\x42\x07\n\x05_nameB\x0e\n\x0c_description\"\x1c\n\x1aUpdateTaskTemplateResponse\"c\n UpdateTaskTemplateSubTaskRequest\x12\x1d\n\nsubtask_id\x18\x01 \x01(\tR\tsubtaskId\x12\x17\n\x04name\x18\x02 \x01(\tH\x00R\x04name\x88\x01\x01\x42\x07\n\x05_name\"#\n!UpdateTaskTemplateSubTaskResponse\"`\n CreateTaskTemplateSubTaskRequest\x12(\n\x10task_template_id\x18\x01 \x01(\tR\x0etaskTemplateId\x12\x12\n\x04name\x18\x02 \x01(\tR\x04name\"3\n!CreateTaskTemplateSubTaskResponse\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\"D\n#GetAllTaskTemplatesByCreatorRequest\x12\x1d\n\ncreated_by\x18\x01 \x01(\tR\tcreatedBy\"\xd3\x03\n$GetAllTaskTemplatesByCreatorResponse\x12k\n\ttemplates\x18\x01 \x03(\x0b\x32M.proto.services.task_svc.v1.GetAllTaskTemplatesByCreatorResponse.TaskTemplateR\ttemplates\x1a\xbd\x02\n\x0cTaskTemplate\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x12\n\x04name\x18\x02 \x01(\tR\x04name\x12 \n\x0b\x64\x65scription\x18\x03 \x01(\tR\x0b\x64\x65scription\x12\x1b\n\tis_public\x18\x04 \x01(\x08R\x08isPublic\x12q\n\x08subtasks\x18\x07 \x03(\x0b\x32U.proto.services.task_svc.v1.GetAllTaskTemplatesByCreatorResponse.TaskTemplate.SubTaskR\x08subtasks\x1aW\n\x07SubTask\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12(\n\x10task_template_id\x18\x02 \x01(\tR\x0etaskTemplateId\x12\x12\n\x04name\x18\x03 \x01(\tR\x04name\";\n GetAllTaskTemplatesByWardRequest\x12\x17\n\x07ward_id\x18\x01 \x01(\tR\x06wardId\"\xfd\x03\n!GetAllTaskTemplatesByWardResponse\x12h\n\ttemplates\x18\x01 \x03(\x0b\x32J.proto.services.task_svc.v1.GetAllTaskTemplatesByWardResponse.TaskTemplateR\ttemplates\x1a\xed\x02\n\x0cTaskTemplate\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x12\n\x04name\x18\x02 \x01(\tR\x04name\x12 \n\x0b\x64\x65scription\x18\x03 \x01(\tR\x0b\x64\x65scription\x12\x1b\n\tis_public\x18\x04 \x01(\x08R\x08isPublic\x12\"\n\ncreated_by\x18\x06 \x01(\tH\x00R\tcreatedBy\x88\x01\x01\x12n\n\x08subtasks\x18\x07 \x03(\x0b\x32R.proto.services.task_svc.v1.GetAllTaskTemplatesByWardResponse.TaskTemplate.SubTaskR\x08subtasks\x1aW\n\x07SubTask\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12(\n\x10task_template_id\x18\x02 \x01(\tR\x0etaskTemplateId\x12\x12\n\x04name\x18\x03 \x01(\tR\x04nameB\r\n\x0b_created_by2\xd2\n\n\x13TaskTemplateService\x12\x85\x01\n\x12\x43reateTaskTemplate\x12\x35.proto.services.task_svc.v1.CreateTaskTemplateRequest\x1a\x36.proto.services.task_svc.v1.CreateTaskTemplateResponse\"\x00\x12\x88\x01\n\x13GetAllTaskTemplates\x12\x36.proto.services.task_svc.v1.GetAllTaskTemplatesRequest\x1a\x37.proto.services.task_svc.v1.GetAllTaskTemplatesResponse\"\x00\x12\x85\x01\n\x12\x44\x65leteTaskTemplate\x12\x35.proto.services.task_svc.v1.DeleteTaskTemplateRequest\x1a\x36.proto.services.task_svc.v1.DeleteTaskTemplateResponse\"\x00\x12\x9a\x01\n\x19\x44\x65leteTaskTemplateSubTask\x12<.proto.services.task_svc.v1.DeleteTaskTemplateSubTaskRequest\x1a=.proto.services.task_svc.v1.DeleteTaskTemplateSubTaskResponse\"\x00\x12\x85\x01\n\x12UpdateTaskTemplate\x12\x35.proto.services.task_svc.v1.UpdateTaskTemplateRequest\x1a\x36.proto.services.task_svc.v1.UpdateTaskTemplateResponse\"\x00\x12\x9a\x01\n\x19UpdateTaskTemplateSubTask\x12<.proto.services.task_svc.v1.UpdateTaskTemplateSubTaskRequest\x1a=.proto.services.task_svc.v1.UpdateTaskTemplateSubTaskResponse\"\x00\x12\x9a\x01\n\x19\x43reateTaskTemplateSubTask\x12<.proto.services.task_svc.v1.CreateTaskTemplateSubTaskRequest\x1a=.proto.services.task_svc.v1.CreateTaskTemplateSubTaskResponse\"\x00\x12\xa3\x01\n\x1cGetAllTaskTemplatesByCreator\x12?.proto.services.task_svc.v1.GetAllTaskTemplatesByCreatorRequest\x1a@.proto.services.task_svc.v1.GetAllTaskTemplatesByCreatorResponse\"\x00\x12\x9a\x01\n\x19GetAllTaskTemplatesByWard\x12<.proto.services.task_svc.v1.GetAllTaskTemplatesByWardRequest\x1a=.proto.services.task_svc.v1.GetAllTaskTemplatesByWardResponse\"\x00\x42\xda\x01\n\x1e\x63om.proto.services.task_svc.v1B\x14TaskTemplateSvcProtoP\x01Z\x1bgen/proto/services/task-svc\xa2\x02\x03PST\xaa\x02\x19Proto.Services.TaskSvc.V1\xca\x02\x19Proto\\Services\\TaskSvc\\V1\xe2\x02%Proto\\Services\\TaskSvc\\V1\\GPBMetadata\xea\x02\x1cProto::Services::TaskSvc::V1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'proto.services.task_svc.v1.task_template_svc_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  _globals['DESCRIPTOR']._options = None
  _globals['DESCRIPTOR']._serialized_options = b'\n\036com.proto.services.task_svc.v1B\024TaskTemplateSvcProtoP\001Z\033gen/proto/services/task-svc\242\002\003PST\252\002\031Proto.Services.TaskSvc.V1\312\002\031Proto\\Services\\TaskSvc\\V1\342\002%Proto\\Services\\TaskSvc\\V1\\GPBMetadata\352\002\034Proto::Services::TaskSvc::V1'
  _globals['_CREATETASKTEMPLATEREQUEST']._serialized_start=83
  _globals['_CREATETASKTEMPLATEREQUEST']._serialized_end=349
  _globals['_CREATETASKTEMPLATEREQUEST_SUBTASK']._serialized_start=292
  _globals['_CREATETASKTEMPLATEREQUEST_SUBTASK']._serialized_end=321
  _globals['_CREATETASKTEMPLATERESPONSE']._serialized_start=351
  _globals['_CREATETASKTEMPLATERESPONSE']._serialized_end=395
  _globals['_GETALLTASKTEMPLATESREQUEST']._serialized_start=397
  _globals['_GETALLTASKTEMPLATESREQUEST']._serialized_end=425
  _globals['_GETALLTASKTEMPLATESRESPONSE']._serialized_start=428
  _globals['_GETALLTASKTEMPLATESRESPONSE']._serialized_end=919
  _globals['_GETALLTASKTEMPLATESRESPONSE_TASKTEMPLATE']._serialized_start=560
  _globals['_GETALLTASKTEMPLATESRESPONSE_TASKTEMPLATE']._serialized_end=919
  _globals['_GETALLTASKTEMPLATESRESPONSE_TASKTEMPLATE_SUBTASK']._serialized_start=817
  _globals['_GETALLTASKTEMPLATESRESPONSE_TASKTEMPLATE_SUBTASK']._serialized_end=904
  _globals['_DELETETASKTEMPLATEREQUEST']._serialized_start=921
  _globals['_DELETETASKTEMPLATEREQUEST']._serialized_end=964
  _globals['_DELETETASKTEMPLATERESPONSE']._serialized_start=966
  _globals['_DELETETASKTEMPLATERESPONSE']._serialized_end=994
  _globals['_DELETETASKTEMPLATESUBTASKREQUEST']._serialized_start=996
  _globals['_DELETETASKTEMPLATESUBTASKREQUEST']._serialized_end=1046
  _globals['_DELETETASKTEMPLATESUBTASKRESPONSE']._serialized_start=1048
  _globals['_DELETETASKTEMPLATESUBTASKRESPONSE']._serialized_end=1083
  _globals['_UPDATETASKTEMPLATEREQUEST']._serialized_start=1086
  _globals['_UPDATETASKTEMPLATEREQUEST']._serialized_end=1218
  _globals['_UPDATETASKTEMPLATERESPONSE']._serialized_start=1220
  _globals['_UPDATETASKTEMPLATERESPONSE']._serialized_end=1248
  _globals['_UPDATETASKTEMPLATESUBTASKREQUEST']._serialized_start=1250
  _globals['_UPDATETASKTEMPLATESUBTASKREQUEST']._serialized_end=1349
  _globals['_UPDATETASKTEMPLATESUBTASKRESPONSE']._serialized_start=1351
  _globals['_UPDATETASKTEMPLATESUBTASKRESPONSE']._serialized_end=1386
  _globals['_CREATETASKTEMPLATESUBTASKREQUEST']._serialized_start=1388
  _globals['_CREATETASKTEMPLATESUBTASKREQUEST']._serialized_end=1484
  _globals['_CREATETASKTEMPLATESUBTASKRESPONSE']._serialized_start=1486
  _globals['_CREATETASKTEMPLATESUBTASKRESPONSE']._serialized_end=1537
  _globals['_GETALLTASKTEMPLATESBYCREATORREQUEST']._serialized_start=1539
  _globals['_GETALLTASKTEMPLATESBYCREATORREQUEST']._serialized_end=1607
  _globals['_GETALLTASKTEMPLATESBYCREATORRESPONSE']._serialized_start=1610
  _globals['_GETALLTASKTEMPLATESBYCREATORRESPONSE']._serialized_end=2077
  _globals['_GETALLTASKTEMPLATESBYCREATORRESPONSE_TASKTEMPLATE']._serialized_start=1760
  _globals['_GETALLTASKTEMPLATESBYCREATORRESPONSE_TASKTEMPLATE']._serialized_end=2077
  _globals['_GETALLTASKTEMPLATESBYCREATORRESPONSE_TASKTEMPLATE_SUBTASK']._serialized_start=817
  _globals['_GETALLTASKTEMPLATESBYCREATORRESPONSE_TASKTEMPLATE_SUBTASK']._serialized_end=904
  _globals['_GETALLTASKTEMPLATESBYWARDREQUEST']._serialized_start=2079
  _globals['_GETALLTASKTEMPLATESBYWARDREQUEST']._serialized_end=2138
  _globals['_GETALLTASKTEMPLATESBYWARDRESPONSE']._serialized_start=2141
  _globals['_GETALLTASKTEMPLATESBYWARDRESPONSE']._serialized_end=2650
  _globals['_GETALLTASKTEMPLATESBYWARDRESPONSE_TASKTEMPLATE']._serialized_start=2285
  _globals['_GETALLTASKTEMPLATESBYWARDRESPONSE_TASKTEMPLATE']._serialized_end=2650
  _globals['_GETALLTASKTEMPLATESBYWARDRESPONSE_TASKTEMPLATE_SUBTASK']._serialized_start=817
  _globals['_GETALLTASKTEMPLATESBYWARDRESPONSE_TASKTEMPLATE_SUBTASK']._serialized_end=904
  _globals['_TASKTEMPLATESERVICE']._serialized_start=2653
  _globals['_TASKTEMPLATESERVICE']._serialized_end=4015
# @@protoc_insertion_point(module_scope)
