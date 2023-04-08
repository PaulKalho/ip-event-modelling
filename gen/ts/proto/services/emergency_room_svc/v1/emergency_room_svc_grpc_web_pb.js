/**
 * @fileoverview gRPC-Web generated client stub for proto.services.emergency_room_svc.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v0.0.0
// source: proto/services/emergency_room_svc/v1/emergency_room_svc.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.proto = {};
proto.proto.services = {};
proto.proto.services.emergency_room_svc = {};
proto.proto.services.emergency_room_svc.v1 = require('./emergency_room_svc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.services.emergency_room_svc.v1.EmergencyRoomServiceClient =
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
proto.proto.services.emergency_room_svc.v1.EmergencyRoomServicePromiseClient =
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
 *   !proto.proto.services.emergency_room_svc.v1.CreateERRequest,
 *   !proto.proto.services.emergency_room_svc.v1.CreateERResponse>}
 */
const methodDescriptor_EmergencyRoomService_CreateER = new grpc.web.MethodDescriptor(
  '/proto.services.emergency_room_svc.v1.EmergencyRoomService/CreateER',
  grpc.web.MethodType.UNARY,
  proto.proto.services.emergency_room_svc.v1.CreateERRequest,
  proto.proto.services.emergency_room_svc.v1.CreateERResponse,
  /**
   * @param {!proto.proto.services.emergency_room_svc.v1.CreateERRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.services.emergency_room_svc.v1.CreateERResponse.deserializeBinary
);


/**
 * @param {!proto.proto.services.emergency_room_svc.v1.CreateERRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.services.emergency_room_svc.v1.CreateERResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.services.emergency_room_svc.v1.CreateERResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.services.emergency_room_svc.v1.EmergencyRoomServiceClient.prototype.createER =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.services.emergency_room_svc.v1.EmergencyRoomService/CreateER',
      request,
      metadata || {},
      methodDescriptor_EmergencyRoomService_CreateER,
      callback);
};


/**
 * @param {!proto.proto.services.emergency_room_svc.v1.CreateERRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.services.emergency_room_svc.v1.CreateERResponse>}
 *     Promise that resolves to the response
 */
proto.proto.services.emergency_room_svc.v1.EmergencyRoomServicePromiseClient.prototype.createER =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.services.emergency_room_svc.v1.EmergencyRoomService/CreateER',
      request,
      metadata || {},
      methodDescriptor_EmergencyRoomService_CreateER);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.services.emergency_room_svc.v1.GetERRequest,
 *   !proto.proto.services.emergency_room_svc.v1.GetERResponse>}
 */
const methodDescriptor_EmergencyRoomService_GetER = new grpc.web.MethodDescriptor(
  '/proto.services.emergency_room_svc.v1.EmergencyRoomService/GetER',
  grpc.web.MethodType.UNARY,
  proto.proto.services.emergency_room_svc.v1.GetERRequest,
  proto.proto.services.emergency_room_svc.v1.GetERResponse,
  /**
   * @param {!proto.proto.services.emergency_room_svc.v1.GetERRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.services.emergency_room_svc.v1.GetERResponse.deserializeBinary
);


/**
 * @param {!proto.proto.services.emergency_room_svc.v1.GetERRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.services.emergency_room_svc.v1.GetERResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.services.emergency_room_svc.v1.GetERResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.services.emergency_room_svc.v1.EmergencyRoomServiceClient.prototype.getER =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.services.emergency_room_svc.v1.EmergencyRoomService/GetER',
      request,
      metadata || {},
      methodDescriptor_EmergencyRoomService_GetER,
      callback);
};


/**
 * @param {!proto.proto.services.emergency_room_svc.v1.GetERRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.services.emergency_room_svc.v1.GetERResponse>}
 *     Promise that resolves to the response
 */
proto.proto.services.emergency_room_svc.v1.EmergencyRoomServicePromiseClient.prototype.getER =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.services.emergency_room_svc.v1.EmergencyRoomService/GetER',
      request,
      metadata || {},
      methodDescriptor_EmergencyRoomService_GetER);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.services.emergency_room_svc.v1.GetERsRequest,
 *   !proto.proto.services.emergency_room_svc.v1.GetERsResponse>}
 */
const methodDescriptor_EmergencyRoomService_GetERs = new grpc.web.MethodDescriptor(
  '/proto.services.emergency_room_svc.v1.EmergencyRoomService/GetERs',
  grpc.web.MethodType.UNARY,
  proto.proto.services.emergency_room_svc.v1.GetERsRequest,
  proto.proto.services.emergency_room_svc.v1.GetERsResponse,
  /**
   * @param {!proto.proto.services.emergency_room_svc.v1.GetERsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.services.emergency_room_svc.v1.GetERsResponse.deserializeBinary
);


/**
 * @param {!proto.proto.services.emergency_room_svc.v1.GetERsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.services.emergency_room_svc.v1.GetERsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.services.emergency_room_svc.v1.GetERsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.services.emergency_room_svc.v1.EmergencyRoomServiceClient.prototype.getERs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.services.emergency_room_svc.v1.EmergencyRoomService/GetERs',
      request,
      metadata || {},
      methodDescriptor_EmergencyRoomService_GetERs,
      callback);
};


/**
 * @param {!proto.proto.services.emergency_room_svc.v1.GetERsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.services.emergency_room_svc.v1.GetERsResponse>}
 *     Promise that resolves to the response
 */
proto.proto.services.emergency_room_svc.v1.EmergencyRoomServicePromiseClient.prototype.getERs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.services.emergency_room_svc.v1.EmergencyRoomService/GetERs',
      request,
      metadata || {},
      methodDescriptor_EmergencyRoomService_GetERs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.services.emergency_room_svc.v1.UpdateERRequest,
 *   !proto.proto.services.emergency_room_svc.v1.UpdateERResponse>}
 */
const methodDescriptor_EmergencyRoomService_UpdateER = new grpc.web.MethodDescriptor(
  '/proto.services.emergency_room_svc.v1.EmergencyRoomService/UpdateER',
  grpc.web.MethodType.UNARY,
  proto.proto.services.emergency_room_svc.v1.UpdateERRequest,
  proto.proto.services.emergency_room_svc.v1.UpdateERResponse,
  /**
   * @param {!proto.proto.services.emergency_room_svc.v1.UpdateERRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.services.emergency_room_svc.v1.UpdateERResponse.deserializeBinary
);


/**
 * @param {!proto.proto.services.emergency_room_svc.v1.UpdateERRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.services.emergency_room_svc.v1.UpdateERResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.services.emergency_room_svc.v1.UpdateERResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.services.emergency_room_svc.v1.EmergencyRoomServiceClient.prototype.updateER =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.services.emergency_room_svc.v1.EmergencyRoomService/UpdateER',
      request,
      metadata || {},
      methodDescriptor_EmergencyRoomService_UpdateER,
      callback);
};


/**
 * @param {!proto.proto.services.emergency_room_svc.v1.UpdateERRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.services.emergency_room_svc.v1.UpdateERResponse>}
 *     Promise that resolves to the response
 */
proto.proto.services.emergency_room_svc.v1.EmergencyRoomServicePromiseClient.prototype.updateER =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.services.emergency_room_svc.v1.EmergencyRoomService/UpdateER',
      request,
      metadata || {},
      methodDescriptor_EmergencyRoomService_UpdateER);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.services.emergency_room_svc.v1.AddDepartmentsToERRequest,
 *   !proto.proto.services.emergency_room_svc.v1.AddDepartmentsToERResponse>}
 */
const methodDescriptor_EmergencyRoomService_AddDepartmentsToER = new grpc.web.MethodDescriptor(
  '/proto.services.emergency_room_svc.v1.EmergencyRoomService/AddDepartmentsToER',
  grpc.web.MethodType.UNARY,
  proto.proto.services.emergency_room_svc.v1.AddDepartmentsToERRequest,
  proto.proto.services.emergency_room_svc.v1.AddDepartmentsToERResponse,
  /**
   * @param {!proto.proto.services.emergency_room_svc.v1.AddDepartmentsToERRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.services.emergency_room_svc.v1.AddDepartmentsToERResponse.deserializeBinary
);


/**
 * @param {!proto.proto.services.emergency_room_svc.v1.AddDepartmentsToERRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.services.emergency_room_svc.v1.AddDepartmentsToERResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.services.emergency_room_svc.v1.AddDepartmentsToERResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.services.emergency_room_svc.v1.EmergencyRoomServiceClient.prototype.addDepartmentsToER =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.services.emergency_room_svc.v1.EmergencyRoomService/AddDepartmentsToER',
      request,
      metadata || {},
      methodDescriptor_EmergencyRoomService_AddDepartmentsToER,
      callback);
};


/**
 * @param {!proto.proto.services.emergency_room_svc.v1.AddDepartmentsToERRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.services.emergency_room_svc.v1.AddDepartmentsToERResponse>}
 *     Promise that resolves to the response
 */
proto.proto.services.emergency_room_svc.v1.EmergencyRoomServicePromiseClient.prototype.addDepartmentsToER =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.services.emergency_room_svc.v1.EmergencyRoomService/AddDepartmentsToER',
      request,
      metadata || {},
      methodDescriptor_EmergencyRoomService_AddDepartmentsToER);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.services.emergency_room_svc.v1.RemoveDepartmentsFromERRequest,
 *   !proto.proto.services.emergency_room_svc.v1.RemoveDepartmentsFromERResponse>}
 */
const methodDescriptor_EmergencyRoomService_RemoveDepartmentsFromER = new grpc.web.MethodDescriptor(
  '/proto.services.emergency_room_svc.v1.EmergencyRoomService/RemoveDepartmentsFromER',
  grpc.web.MethodType.UNARY,
  proto.proto.services.emergency_room_svc.v1.RemoveDepartmentsFromERRequest,
  proto.proto.services.emergency_room_svc.v1.RemoveDepartmentsFromERResponse,
  /**
   * @param {!proto.proto.services.emergency_room_svc.v1.RemoveDepartmentsFromERRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.services.emergency_room_svc.v1.RemoveDepartmentsFromERResponse.deserializeBinary
);


/**
 * @param {!proto.proto.services.emergency_room_svc.v1.RemoveDepartmentsFromERRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.services.emergency_room_svc.v1.RemoveDepartmentsFromERResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.services.emergency_room_svc.v1.RemoveDepartmentsFromERResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.services.emergency_room_svc.v1.EmergencyRoomServiceClient.prototype.removeDepartmentsFromER =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.services.emergency_room_svc.v1.EmergencyRoomService/RemoveDepartmentsFromER',
      request,
      metadata || {},
      methodDescriptor_EmergencyRoomService_RemoveDepartmentsFromER,
      callback);
};


/**
 * @param {!proto.proto.services.emergency_room_svc.v1.RemoveDepartmentsFromERRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.services.emergency_room_svc.v1.RemoveDepartmentsFromERResponse>}
 *     Promise that resolves to the response
 */
proto.proto.services.emergency_room_svc.v1.EmergencyRoomServicePromiseClient.prototype.removeDepartmentsFromER =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.services.emergency_room_svc.v1.EmergencyRoomService/RemoveDepartmentsFromER',
      request,
      metadata || {},
      methodDescriptor_EmergencyRoomService_RemoveDepartmentsFromER);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.services.emergency_room_svc.v1.DeleteERRequest,
 *   !proto.proto.services.emergency_room_svc.v1.DeleteERResponse>}
 */
const methodDescriptor_EmergencyRoomService_DeleteER = new grpc.web.MethodDescriptor(
  '/proto.services.emergency_room_svc.v1.EmergencyRoomService/DeleteER',
  grpc.web.MethodType.UNARY,
  proto.proto.services.emergency_room_svc.v1.DeleteERRequest,
  proto.proto.services.emergency_room_svc.v1.DeleteERResponse,
  /**
   * @param {!proto.proto.services.emergency_room_svc.v1.DeleteERRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.services.emergency_room_svc.v1.DeleteERResponse.deserializeBinary
);


/**
 * @param {!proto.proto.services.emergency_room_svc.v1.DeleteERRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.services.emergency_room_svc.v1.DeleteERResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.services.emergency_room_svc.v1.DeleteERResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.services.emergency_room_svc.v1.EmergencyRoomServiceClient.prototype.deleteER =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.services.emergency_room_svc.v1.EmergencyRoomService/DeleteER',
      request,
      metadata || {},
      methodDescriptor_EmergencyRoomService_DeleteER,
      callback);
};


/**
 * @param {!proto.proto.services.emergency_room_svc.v1.DeleteERRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.services.emergency_room_svc.v1.DeleteERResponse>}
 *     Promise that resolves to the response
 */
proto.proto.services.emergency_room_svc.v1.EmergencyRoomServicePromiseClient.prototype.deleteER =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.services.emergency_room_svc.v1.EmergencyRoomService/DeleteER',
      request,
      metadata || {},
      methodDescriptor_EmergencyRoomService_DeleteER);
};


module.exports = proto.proto.services.emergency_room_svc.v1;
