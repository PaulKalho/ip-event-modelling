//
//  Generated code. Do not modify.
//  source: services/tasks_svc/v1/room_svc.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:convert' as $convert;
import 'dart:core' as $core;
import 'dart:typed_data' as $typed_data;

@$core.Deprecated('Use createRoomRequestDescriptor instead')
const CreateRoomRequest$json = {
  '1': 'CreateRoomRequest',
  '2': [
    {'1': 'name', '3': 1, '4': 1, '5': 9, '10': 'name'},
    {'1': 'ward_id', '3': 2, '4': 1, '5': 9, '10': 'wardId'},
  ],
};

/// Descriptor for `CreateRoomRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createRoomRequestDescriptor = $convert.base64Decode(
    'ChFDcmVhdGVSb29tUmVxdWVzdBISCgRuYW1lGAEgASgJUgRuYW1lEhcKB3dhcmRfaWQYAiABKA'
    'lSBndhcmRJZA==');

@$core.Deprecated('Use createRoomResponseDescriptor instead')
const CreateRoomResponse$json = {
  '1': 'CreateRoomResponse',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
  ],
};

/// Descriptor for `CreateRoomResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createRoomResponseDescriptor = $convert.base64Decode(
    'ChJDcmVhdGVSb29tUmVzcG9uc2USDgoCaWQYASABKAlSAmlk');

@$core.Deprecated('Use getRoomRequestDescriptor instead')
const GetRoomRequest$json = {
  '1': 'GetRoomRequest',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
  ],
};

/// Descriptor for `GetRoomRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getRoomRequestDescriptor = $convert.base64Decode(
    'Cg5HZXRSb29tUmVxdWVzdBIOCgJpZBgBIAEoCVICaWQ=');

@$core.Deprecated('Use getRoomResponseDescriptor instead')
const GetRoomResponse$json = {
  '1': 'GetRoomResponse',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
    {'1': 'beds', '3': 3, '4': 3, '5': 11, '6': '.services.tasks_svc.v1.GetRoomResponse.Bed', '10': 'beds'},
    {'1': 'ward_id', '3': 5, '4': 1, '5': 9, '10': 'wardId'},
  ],
  '3': [GetRoomResponse_Bed$json],
};

@$core.Deprecated('Use getRoomResponseDescriptor instead')
const GetRoomResponse_Bed$json = {
  '1': 'Bed',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
  ],
};

/// Descriptor for `GetRoomResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getRoomResponseDescriptor = $convert.base64Decode(
    'Cg9HZXRSb29tUmVzcG9uc2USDgoCaWQYASABKAlSAmlkEhIKBG5hbWUYAiABKAlSBG5hbWUSPg'
    'oEYmVkcxgDIAMoCzIqLnNlcnZpY2VzLnRhc2tzX3N2Yy52MS5HZXRSb29tUmVzcG9uc2UuQmVk'
    'UgRiZWRzEhcKB3dhcmRfaWQYBSABKAlSBndhcmRJZBopCgNCZWQSDgoCaWQYASABKAlSAmlkEh'
    'IKBG5hbWUYAiABKAlSBG5hbWU=');

@$core.Deprecated('Use getRoomsRequestDescriptor instead')
const GetRoomsRequest$json = {
  '1': 'GetRoomsRequest',
  '2': [
    {'1': 'ward_id', '3': 1, '4': 1, '5': 9, '9': 0, '10': 'wardId', '17': true},
  ],
  '8': [
    {'1': '_ward_id'},
  ],
};

/// Descriptor for `GetRoomsRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getRoomsRequestDescriptor = $convert.base64Decode(
    'Cg9HZXRSb29tc1JlcXVlc3QSHAoHd2FyZF9pZBgBIAEoCUgAUgZ3YXJkSWSIAQFCCgoIX3dhcm'
    'RfaWQ=');

@$core.Deprecated('Use getRoomsResponseDescriptor instead')
const GetRoomsResponse$json = {
  '1': 'GetRoomsResponse',
  '2': [
    {'1': 'rooms', '3': 1, '4': 3, '5': 11, '6': '.services.tasks_svc.v1.GetRoomsResponse.Room', '10': 'rooms'},
  ],
  '3': [GetRoomsResponse_Room$json],
};

@$core.Deprecated('Use getRoomsResponseDescriptor instead')
const GetRoomsResponse_Room$json = {
  '1': 'Room',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
    {'1': 'beds', '3': 3, '4': 3, '5': 11, '6': '.services.tasks_svc.v1.GetRoomsResponse.Room.Bed', '10': 'beds'},
    {'1': 'ward_id', '3': 5, '4': 1, '5': 9, '10': 'wardId'},
  ],
  '3': [GetRoomsResponse_Room_Bed$json],
};

@$core.Deprecated('Use getRoomsResponseDescriptor instead')
const GetRoomsResponse_Room_Bed$json = {
  '1': 'Bed',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
  ],
};

/// Descriptor for `GetRoomsResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getRoomsResponseDescriptor = $convert.base64Decode(
    'ChBHZXRSb29tc1Jlc3BvbnNlEkIKBXJvb21zGAEgAygLMiwuc2VydmljZXMudGFza3Nfc3ZjLn'
    'YxLkdldFJvb21zUmVzcG9uc2UuUm9vbVIFcm9vbXMatAEKBFJvb20SDgoCaWQYASABKAlSAmlk'
    'EhIKBG5hbWUYAiABKAlSBG5hbWUSRAoEYmVkcxgDIAMoCzIwLnNlcnZpY2VzLnRhc2tzX3N2Yy'
    '52MS5HZXRSb29tc1Jlc3BvbnNlLlJvb20uQmVkUgRiZWRzEhcKB3dhcmRfaWQYBSABKAlSBndh'
    'cmRJZBopCgNCZWQSDgoCaWQYASABKAlSAmlkEhIKBG5hbWUYAiABKAlSBG5hbWU=');

@$core.Deprecated('Use updateRoomRequestDescriptor instead')
const UpdateRoomRequest$json = {
  '1': 'UpdateRoomRequest',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    {'1': 'name', '3': 2, '4': 1, '5': 9, '9': 0, '10': 'name', '17': true},
  ],
  '8': [
    {'1': '_name'},
  ],
};

/// Descriptor for `UpdateRoomRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List updateRoomRequestDescriptor = $convert.base64Decode(
    'ChFVcGRhdGVSb29tUmVxdWVzdBIOCgJpZBgBIAEoCVICaWQSFwoEbmFtZRgCIAEoCUgAUgRuYW'
    '1liAEBQgcKBV9uYW1l');

@$core.Deprecated('Use updateRoomResponseDescriptor instead')
const UpdateRoomResponse$json = {
  '1': 'UpdateRoomResponse',
};

/// Descriptor for `UpdateRoomResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List updateRoomResponseDescriptor = $convert.base64Decode(
    'ChJVcGRhdGVSb29tUmVzcG9uc2U=');

@$core.Deprecated('Use deleteRoomRequestDescriptor instead')
const DeleteRoomRequest$json = {
  '1': 'DeleteRoomRequest',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
  ],
};

/// Descriptor for `DeleteRoomRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List deleteRoomRequestDescriptor = $convert.base64Decode(
    'ChFEZWxldGVSb29tUmVxdWVzdBIOCgJpZBgBIAEoCVICaWQ=');

@$core.Deprecated('Use deleteRoomResponseDescriptor instead')
const DeleteRoomResponse$json = {
  '1': 'DeleteRoomResponse',
};

/// Descriptor for `DeleteRoomResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List deleteRoomResponseDescriptor = $convert.base64Decode(
    'ChJEZWxldGVSb29tUmVzcG9uc2U=');

@$core.Deprecated('Use getRoomOverviewsByWardRequestDescriptor instead')
const GetRoomOverviewsByWardRequest$json = {
  '1': 'GetRoomOverviewsByWardRequest',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
  ],
};

/// Descriptor for `GetRoomOverviewsByWardRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getRoomOverviewsByWardRequestDescriptor = $convert.base64Decode(
    'Ch1HZXRSb29tT3ZlcnZpZXdzQnlXYXJkUmVxdWVzdBIOCgJpZBgBIAEoCVICaWQ=');

@$core.Deprecated('Use getRoomOverviewsByWardResponseDescriptor instead')
const GetRoomOverviewsByWardResponse$json = {
  '1': 'GetRoomOverviewsByWardResponse',
  '2': [
    {'1': 'rooms', '3': 1, '4': 3, '5': 11, '6': '.services.tasks_svc.v1.GetRoomOverviewsByWardResponse.Room', '10': 'rooms'},
  ],
  '3': [GetRoomOverviewsByWardResponse_Room$json],
};

@$core.Deprecated('Use getRoomOverviewsByWardResponseDescriptor instead')
const GetRoomOverviewsByWardResponse_Room$json = {
  '1': 'Room',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
    {'1': 'beds', '3': 3, '4': 3, '5': 11, '6': '.services.tasks_svc.v1.GetRoomOverviewsByWardResponse.Room.Bed', '10': 'beds'},
  ],
  '3': [GetRoomOverviewsByWardResponse_Room_Bed$json],
};

@$core.Deprecated('Use getRoomOverviewsByWardResponseDescriptor instead')
const GetRoomOverviewsByWardResponse_Room_Bed$json = {
  '1': 'Bed',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    {'1': 'name', '3': 3, '4': 1, '5': 9, '10': 'name'},
    {'1': 'patient', '3': 2, '4': 1, '5': 11, '6': '.services.tasks_svc.v1.GetRoomOverviewsByWardResponse.Room.Bed.Patient', '9': 0, '10': 'patient', '17': true},
  ],
  '3': [GetRoomOverviewsByWardResponse_Room_Bed_Patient$json],
  '8': [
    {'1': '_patient'},
  ],
};

@$core.Deprecated('Use getRoomOverviewsByWardResponseDescriptor instead')
const GetRoomOverviewsByWardResponse_Room_Bed_Patient$json = {
  '1': 'Patient',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    {'1': 'human_readable_identifier', '3': 2, '4': 1, '5': 9, '10': 'humanReadableIdentifier'},
    {'1': 'tasks_unscheduled', '3': 3, '4': 1, '5': 13, '10': 'tasksUnscheduled'},
    {'1': 'tasks_in_progress', '3': 4, '4': 1, '5': 13, '10': 'tasksInProgress'},
    {'1': 'tasks_done', '3': 5, '4': 1, '5': 13, '10': 'tasksDone'},
  ],
};

/// Descriptor for `GetRoomOverviewsByWardResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getRoomOverviewsByWardResponseDescriptor = $convert.base64Decode(
    'Ch5HZXRSb29tT3ZlcnZpZXdzQnlXYXJkUmVzcG9uc2USUAoFcm9vbXMYASADKAsyOi5zZXJ2aW'
    'Nlcy50YXNrc19zdmMudjEuR2V0Um9vbU92ZXJ2aWV3c0J5V2FyZFJlc3BvbnNlLlJvb21SBXJv'
    'b21zGu0DCgRSb29tEg4KAmlkGAEgASgJUgJpZBISCgRuYW1lGAIgASgJUgRuYW1lElIKBGJlZH'
    'MYAyADKAsyPi5zZXJ2aWNlcy50YXNrc19zdmMudjEuR2V0Um9vbU92ZXJ2aWV3c0J5V2FyZFJl'
    'c3BvbnNlLlJvb20uQmVkUgRiZWRzGuwCCgNCZWQSDgoCaWQYASABKAlSAmlkEhIKBG5hbWUYAy'
    'ABKAlSBG5hbWUSZQoHcGF0aWVudBgCIAEoCzJGLnNlcnZpY2VzLnRhc2tzX3N2Yy52MS5HZXRS'
    'b29tT3ZlcnZpZXdzQnlXYXJkUmVzcG9uc2UuUm9vbS5CZWQuUGF0aWVudEgAUgdwYXRpZW50iA'
    'EBGs0BCgdQYXRpZW50Eg4KAmlkGAEgASgJUgJpZBI6ChlodW1hbl9yZWFkYWJsZV9pZGVudGlm'
    'aWVyGAIgASgJUhdodW1hblJlYWRhYmxlSWRlbnRpZmllchIrChF0YXNrc191bnNjaGVkdWxlZB'
    'gDIAEoDVIQdGFza3NVbnNjaGVkdWxlZBIqChF0YXNrc19pbl9wcm9ncmVzcxgEIAEoDVIPdGFz'
    'a3NJblByb2dyZXNzEh0KCnRhc2tzX2RvbmUYBSABKA1SCXRhc2tzRG9uZUIKCghfcGF0aWVudA'
    '==');
