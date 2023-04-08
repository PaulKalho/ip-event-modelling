///
//  Generated code. Do not modify.
//  source: proto/services/auth_svc/v1/auth_svc.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,deprecated_member_use_from_same_package,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:async' as $async;

import 'package:protobuf/protobuf.dart' as $pb;

import 'dart:core' as $core;
import 'auth_svc.pb.dart' as $0;
import 'auth_svc.pbjson.dart';

export 'auth_svc.pb.dart';

abstract class AuthServiceBase extends $pb.GeneratedService {
  $async.Future<$0.PrelimAuthRequestResponse> prelimAuthRequest($pb.ServerContext ctx, $0.PrelimAuthRequestRequest request);
  $async.Future<$0.RefreshTokenResponse> refreshToken($pb.ServerContext ctx, $0.RefreshTokenRequest request);

  $pb.GeneratedMessage createRequest($core.String method) {
    switch (method) {
      case 'PrelimAuthRequest': return $0.PrelimAuthRequestRequest();
      case 'RefreshToken': return $0.RefreshTokenRequest();
      default: throw $core.ArgumentError('Unknown method: $method');
    }
  }

  $async.Future<$pb.GeneratedMessage> handleCall($pb.ServerContext ctx, $core.String method, $pb.GeneratedMessage request) {
    switch (method) {
      case 'PrelimAuthRequest': return this.prelimAuthRequest(ctx, request as $0.PrelimAuthRequestRequest);
      case 'RefreshToken': return this.refreshToken(ctx, request as $0.RefreshTokenRequest);
      default: throw $core.ArgumentError('Unknown method: $method');
    }
  }

  $core.Map<$core.String, $core.dynamic> get $json => AuthServiceBase$json;
  $core.Map<$core.String, $core.Map<$core.String, $core.dynamic>> get $messageJson => AuthServiceBase$messageJson;
}
