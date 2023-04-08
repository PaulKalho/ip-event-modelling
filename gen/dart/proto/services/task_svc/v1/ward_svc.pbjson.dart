///
//  Generated code. Do not modify.
//  source: proto/services/task_svc/v1/ward_svc.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,deprecated_member_use_from_same_package,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use createWardRequestDescriptor instead')
const CreateWardRequest$json = const {
  '1': 'CreateWardRequest',
  '2': const [
    const {'1': 'name', '3': 1, '4': 1, '5': 9, '10': 'name'},
  ],
};

/// Descriptor for `CreateWardRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createWardRequestDescriptor = $convert.base64Decode('ChFDcmVhdGVXYXJkUmVxdWVzdBISCgRuYW1lGAEgASgJUgRuYW1l');
@$core.Deprecated('Use createWardResponseDescriptor instead')
const CreateWardResponse$json = const {
  '1': 'CreateWardResponse',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
  ],
};

/// Descriptor for `CreateWardResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createWardResponseDescriptor = $convert.base64Decode('ChJDcmVhdGVXYXJkUmVzcG9uc2USDgoCaWQYASABKAlSAmlkEhIKBG5hbWUYAiABKAlSBG5hbWU=');
@$core.Deprecated('Use getWardRequestDescriptor instead')
const GetWardRequest$json = const {
  '1': 'GetWardRequest',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
  ],
};

/// Descriptor for `GetWardRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getWardRequestDescriptor = $convert.base64Decode('Cg5HZXRXYXJkUmVxdWVzdBIOCgJpZBgBIAEoCVICaWQ=');
@$core.Deprecated('Use getWardResponseDescriptor instead')
const GetWardResponse$json = const {
  '1': 'GetWardResponse',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
  ],
};

/// Descriptor for `GetWardResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getWardResponseDescriptor = $convert.base64Decode('Cg9HZXRXYXJkUmVzcG9uc2USDgoCaWQYASABKAlSAmlkEhIKBG5hbWUYAiABKAlSBG5hbWU=');
@$core.Deprecated('Use updateWardRequestDescriptor instead')
const UpdateWardRequest$json = const {
  '1': 'UpdateWardRequest',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '9': 0, '10': 'name', '17': true},
  ],
  '8': const [
    const {'1': '_name'},
  ],
};

/// Descriptor for `UpdateWardRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List updateWardRequestDescriptor = $convert.base64Decode('ChFVcGRhdGVXYXJkUmVxdWVzdBIOCgJpZBgBIAEoCVICaWQSFwoEbmFtZRgCIAEoCUgAUgRuYW1liAEBQgcKBV9uYW1l');
@$core.Deprecated('Use updateWardResponseDescriptor instead')
const UpdateWardResponse$json = const {
  '1': 'UpdateWardResponse',
};

/// Descriptor for `UpdateWardResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List updateWardResponseDescriptor = $convert.base64Decode('ChJVcGRhdGVXYXJkUmVzcG9uc2U=');
const $core.Map<$core.String, $core.dynamic> WardServiceBase$json = const {
  '1': 'WardService',
  '2': const [
    const {'1': 'CreateWard', '2': '.proto.services.task_svc.v1.CreateWardRequest', '3': '.proto.services.task_svc.v1.CreateWardResponse', '4': const {}},
    const {'1': 'GetWard', '2': '.proto.services.task_svc.v1.GetWardRequest', '3': '.proto.services.task_svc.v1.GetWardResponse', '4': const {}},
    const {'1': 'UpdateWard', '2': '.proto.services.task_svc.v1.UpdateWardRequest', '3': '.proto.services.task_svc.v1.UpdateWardResponse', '4': const {}},
  ],
};

@$core.Deprecated('Use wardServiceDescriptor instead')
const $core.Map<$core.String, $core.Map<$core.String, $core.dynamic>> WardServiceBase$messageJson = const {
  '.proto.services.task_svc.v1.CreateWardRequest': CreateWardRequest$json,
  '.proto.services.task_svc.v1.CreateWardResponse': CreateWardResponse$json,
  '.proto.services.task_svc.v1.GetWardRequest': GetWardRequest$json,
  '.proto.services.task_svc.v1.GetWardResponse': GetWardResponse$json,
  '.proto.services.task_svc.v1.UpdateWardRequest': UpdateWardRequest$json,
  '.proto.services.task_svc.v1.UpdateWardResponse': UpdateWardResponse$json,
};

/// Descriptor for `WardService`. Decode as a `google.protobuf.ServiceDescriptorProto`.
final $typed_data.Uint8List wardServiceDescriptor = $convert.base64Decode('CgtXYXJkU2VydmljZRJtCgpDcmVhdGVXYXJkEi0ucHJvdG8uc2VydmljZXMudGFza19zdmMudjEuQ3JlYXRlV2FyZFJlcXVlc3QaLi5wcm90by5zZXJ2aWNlcy50YXNrX3N2Yy52MS5DcmVhdGVXYXJkUmVzcG9uc2UiABJkCgdHZXRXYXJkEioucHJvdG8uc2VydmljZXMudGFza19zdmMudjEuR2V0V2FyZFJlcXVlc3QaKy5wcm90by5zZXJ2aWNlcy50YXNrX3N2Yy52MS5HZXRXYXJkUmVzcG9uc2UiABJtCgpVcGRhdGVXYXJkEi0ucHJvdG8uc2VydmljZXMudGFza19zdmMudjEuVXBkYXRlV2FyZFJlcXVlc3QaLi5wcm90by5zZXJ2aWNlcy50YXNrX3N2Yy52MS5VcGRhdGVXYXJkUmVzcG9uc2UiAA==');