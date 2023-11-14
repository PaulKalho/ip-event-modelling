/**
 * @fileoverview gRPC-Web generated client stub for proto.services.user_svc.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v0.0.0
// source: proto/services/user_svc/v1/user_svc.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.proto = {};
proto.proto.services = {};
proto.proto.services.user_svc = {};
proto.proto.services.user_svc.v1 = require('./user_svc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.services.user_svc.v1.UserServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.services.user_svc.v1.UserServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.services.user_svc.v1.CreateUserRequest,
 *   !proto.proto.services.user_svc.v1.CreateUserResponse>}
 */
const methodDescriptor_UserService_CreateUser = new grpc.web.MethodDescriptor(
  '/proto.services.user_svc.v1.UserService/CreateUser',
  grpc.web.MethodType.UNARY,
  proto.proto.services.user_svc.v1.CreateUserRequest,
  proto.proto.services.user_svc.v1.CreateUserResponse,
  /**
   * @param {!proto.proto.services.user_svc.v1.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.services.user_svc.v1.CreateUserResponse.deserializeBinary
);


/**
 * @param {!proto.proto.services.user_svc.v1.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.services.user_svc.v1.CreateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.services.user_svc.v1.CreateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.services.user_svc.v1.UserServiceClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.services.user_svc.v1.UserService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateUser,
      callback);
};


/**
 * @param {!proto.proto.services.user_svc.v1.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.services.user_svc.v1.CreateUserResponse>}
 *     Promise that resolves to the response
 */
proto.proto.services.user_svc.v1.UserServicePromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.services.user_svc.v1.UserService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.services.user_svc.v1.ReadSelfRequest,
 *   !proto.proto.services.user_svc.v1.ReadSelfResponse>}
 */
const methodDescriptor_UserService_ReadSelf = new grpc.web.MethodDescriptor(
  '/proto.services.user_svc.v1.UserService/ReadSelf',
  grpc.web.MethodType.UNARY,
  proto.proto.services.user_svc.v1.ReadSelfRequest,
  proto.proto.services.user_svc.v1.ReadSelfResponse,
  /**
   * @param {!proto.proto.services.user_svc.v1.ReadSelfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.services.user_svc.v1.ReadSelfResponse.deserializeBinary
);


/**
 * @param {!proto.proto.services.user_svc.v1.ReadSelfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.services.user_svc.v1.ReadSelfResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.services.user_svc.v1.ReadSelfResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.services.user_svc.v1.UserServiceClient.prototype.readSelf =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.services.user_svc.v1.UserService/ReadSelf',
      request,
      metadata || {},
      methodDescriptor_UserService_ReadSelf,
      callback);
};


/**
 * @param {!proto.proto.services.user_svc.v1.ReadSelfRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.services.user_svc.v1.ReadSelfResponse>}
 *     Promise that resolves to the response
 */
proto.proto.services.user_svc.v1.UserServicePromiseClient.prototype.readSelf =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.services.user_svc.v1.UserService/ReadSelf',
      request,
      metadata || {},
      methodDescriptor_UserService_ReadSelf);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.services.user_svc.v1.ReadPublicProfileRequest,
 *   !proto.proto.services.user_svc.v1.ReadPublicProfileResponse>}
 */
const methodDescriptor_UserService_ReadPublicProfile = new grpc.web.MethodDescriptor(
  '/proto.services.user_svc.v1.UserService/ReadPublicProfile',
  grpc.web.MethodType.UNARY,
  proto.proto.services.user_svc.v1.ReadPublicProfileRequest,
  proto.proto.services.user_svc.v1.ReadPublicProfileResponse,
  /**
   * @param {!proto.proto.services.user_svc.v1.ReadPublicProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.services.user_svc.v1.ReadPublicProfileResponse.deserializeBinary
);


/**
 * @param {!proto.proto.services.user_svc.v1.ReadPublicProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.services.user_svc.v1.ReadPublicProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.services.user_svc.v1.ReadPublicProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.services.user_svc.v1.UserServiceClient.prototype.readPublicProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.services.user_svc.v1.UserService/ReadPublicProfile',
      request,
      metadata || {},
      methodDescriptor_UserService_ReadPublicProfile,
      callback);
};


/**
 * @param {!proto.proto.services.user_svc.v1.ReadPublicProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.services.user_svc.v1.ReadPublicProfileResponse>}
 *     Promise that resolves to the response
 */
proto.proto.services.user_svc.v1.UserServicePromiseClient.prototype.readPublicProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.services.user_svc.v1.UserService/ReadPublicProfile',
      request,
      metadata || {},
      methodDescriptor_UserService_ReadPublicProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.services.user_svc.v1.UpdateUserRequest,
 *   !proto.proto.services.user_svc.v1.UpdateUserResponse>}
 */
const methodDescriptor_UserService_UpdateUser = new grpc.web.MethodDescriptor(
  '/proto.services.user_svc.v1.UserService/UpdateUser',
  grpc.web.MethodType.UNARY,
  proto.proto.services.user_svc.v1.UpdateUserRequest,
  proto.proto.services.user_svc.v1.UpdateUserResponse,
  /**
   * @param {!proto.proto.services.user_svc.v1.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.services.user_svc.v1.UpdateUserResponse.deserializeBinary
);


/**
 * @param {!proto.proto.services.user_svc.v1.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.services.user_svc.v1.UpdateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.services.user_svc.v1.UpdateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.services.user_svc.v1.UserServiceClient.prototype.updateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.services.user_svc.v1.UserService/UpdateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateUser,
      callback);
};


/**
 * @param {!proto.proto.services.user_svc.v1.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.services.user_svc.v1.UpdateUserResponse>}
 *     Promise that resolves to the response
 */
proto.proto.services.user_svc.v1.UserServicePromiseClient.prototype.updateUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.services.user_svc.v1.UserService/UpdateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateUser);
};


module.exports = proto.proto.services.user_svc.v1;

