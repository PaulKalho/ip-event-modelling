/**
 * @fileoverview gRPC-Web generated client stub for proto.services.task_svc.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v0.0.0
// source: proto/services/task_svc/v1/ward_svc.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.proto = {};
proto.proto.services = {};
proto.proto.services.task_svc = {};
proto.proto.services.task_svc.v1 = require('./ward_svc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.services.task_svc.v1.WardServiceClient =
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
proto.proto.services.task_svc.v1.WardServicePromiseClient =
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
 *   !proto.proto.services.task_svc.v1.CreateWardRequest,
 *   !proto.proto.services.task_svc.v1.CreateWardResponse>}
 */
const methodDescriptor_WardService_CreateWard = new grpc.web.MethodDescriptor(
  '/proto.services.task_svc.v1.WardService/CreateWard',
  grpc.web.MethodType.UNARY,
  proto.proto.services.task_svc.v1.CreateWardRequest,
  proto.proto.services.task_svc.v1.CreateWardResponse,
  /**
   * @param {!proto.proto.services.task_svc.v1.CreateWardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.services.task_svc.v1.CreateWardResponse.deserializeBinary
);


/**
 * @param {!proto.proto.services.task_svc.v1.CreateWardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.services.task_svc.v1.CreateWardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.services.task_svc.v1.CreateWardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.services.task_svc.v1.WardServiceClient.prototype.createWard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.services.task_svc.v1.WardService/CreateWard',
      request,
      metadata || {},
      methodDescriptor_WardService_CreateWard,
      callback);
};


/**
 * @param {!proto.proto.services.task_svc.v1.CreateWardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.services.task_svc.v1.CreateWardResponse>}
 *     Promise that resolves to the response
 */
proto.proto.services.task_svc.v1.WardServicePromiseClient.prototype.createWard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.services.task_svc.v1.WardService/CreateWard',
      request,
      metadata || {},
      methodDescriptor_WardService_CreateWard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.services.task_svc.v1.GetWardRequest,
 *   !proto.proto.services.task_svc.v1.GetWardResponse>}
 */
const methodDescriptor_WardService_GetWard = new grpc.web.MethodDescriptor(
  '/proto.services.task_svc.v1.WardService/GetWard',
  grpc.web.MethodType.UNARY,
  proto.proto.services.task_svc.v1.GetWardRequest,
  proto.proto.services.task_svc.v1.GetWardResponse,
  /**
   * @param {!proto.proto.services.task_svc.v1.GetWardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.services.task_svc.v1.GetWardResponse.deserializeBinary
);


/**
 * @param {!proto.proto.services.task_svc.v1.GetWardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.services.task_svc.v1.GetWardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.services.task_svc.v1.GetWardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.services.task_svc.v1.WardServiceClient.prototype.getWard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.services.task_svc.v1.WardService/GetWard',
      request,
      metadata || {},
      methodDescriptor_WardService_GetWard,
      callback);
};


/**
 * @param {!proto.proto.services.task_svc.v1.GetWardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.services.task_svc.v1.GetWardResponse>}
 *     Promise that resolves to the response
 */
proto.proto.services.task_svc.v1.WardServicePromiseClient.prototype.getWard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.services.task_svc.v1.WardService/GetWard',
      request,
      metadata || {},
      methodDescriptor_WardService_GetWard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.services.task_svc.v1.UpdateWardRequest,
 *   !proto.proto.services.task_svc.v1.UpdateWardResponse>}
 */
const methodDescriptor_WardService_UpdateWard = new grpc.web.MethodDescriptor(
  '/proto.services.task_svc.v1.WardService/UpdateWard',
  grpc.web.MethodType.UNARY,
  proto.proto.services.task_svc.v1.UpdateWardRequest,
  proto.proto.services.task_svc.v1.UpdateWardResponse,
  /**
   * @param {!proto.proto.services.task_svc.v1.UpdateWardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.services.task_svc.v1.UpdateWardResponse.deserializeBinary
);


/**
 * @param {!proto.proto.services.task_svc.v1.UpdateWardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.services.task_svc.v1.UpdateWardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.services.task_svc.v1.UpdateWardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.services.task_svc.v1.WardServiceClient.prototype.updateWard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.services.task_svc.v1.WardService/UpdateWard',
      request,
      metadata || {},
      methodDescriptor_WardService_UpdateWard,
      callback);
};


/**
 * @param {!proto.proto.services.task_svc.v1.UpdateWardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.services.task_svc.v1.UpdateWardResponse>}
 *     Promise that resolves to the response
 */
proto.proto.services.task_svc.v1.WardServicePromiseClient.prototype.updateWard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.services.task_svc.v1.WardService/UpdateWard',
      request,
      metadata || {},
      methodDescriptor_WardService_UpdateWard);
};


module.exports = proto.proto.services.task_svc.v1;
