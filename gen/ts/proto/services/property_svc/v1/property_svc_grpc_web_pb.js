/**
 * @fileoverview gRPC-Web generated client stub for proto.services.property_svc.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v0.0.0
// source: proto/services/property_svc/v1/property_svc.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_services_property_svc_v1_types_pb = require('../../../../proto/services/property_svc/v1/types_pb.js')
const proto = {};
proto.proto = {};
proto.proto.services = {};
proto.proto.services.property_svc = {};
proto.proto.services.property_svc.v1 = require('./property_svc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.services.property_svc.v1.PropertyServiceClient =
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
proto.proto.services.property_svc.v1.PropertyServicePromiseClient =
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
 *   !proto.proto.services.property_svc.v1.CreatePropertyRequest,
 *   !proto.proto.services.property_svc.v1.CreatePropertyResponse>}
 */
const methodDescriptor_PropertyService_CreateProperty = new grpc.web.MethodDescriptor(
  '/proto.services.property_svc.v1.PropertyService/CreateProperty',
  grpc.web.MethodType.UNARY,
  proto.proto.services.property_svc.v1.CreatePropertyRequest,
  proto.proto.services.property_svc.v1.CreatePropertyResponse,
  /**
   * @param {!proto.proto.services.property_svc.v1.CreatePropertyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.services.property_svc.v1.CreatePropertyResponse.deserializeBinary
);


/**
 * @param {!proto.proto.services.property_svc.v1.CreatePropertyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.services.property_svc.v1.CreatePropertyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.services.property_svc.v1.CreatePropertyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.services.property_svc.v1.PropertyServiceClient.prototype.createProperty =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.services.property_svc.v1.PropertyService/CreateProperty',
      request,
      metadata || {},
      methodDescriptor_PropertyService_CreateProperty,
      callback);
};


/**
 * @param {!proto.proto.services.property_svc.v1.CreatePropertyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.services.property_svc.v1.CreatePropertyResponse>}
 *     Promise that resolves to the response
 */
proto.proto.services.property_svc.v1.PropertyServicePromiseClient.prototype.createProperty =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.services.property_svc.v1.PropertyService/CreateProperty',
      request,
      metadata || {},
      methodDescriptor_PropertyService_CreateProperty);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.services.property_svc.v1.GetPropertyRequest,
 *   !proto.proto.services.property_svc.v1.GetPropertyResponse>}
 */
const methodDescriptor_PropertyService_GetProperty = new grpc.web.MethodDescriptor(
  '/proto.services.property_svc.v1.PropertyService/GetProperty',
  grpc.web.MethodType.UNARY,
  proto.proto.services.property_svc.v1.GetPropertyRequest,
  proto.proto.services.property_svc.v1.GetPropertyResponse,
  /**
   * @param {!proto.proto.services.property_svc.v1.GetPropertyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.services.property_svc.v1.GetPropertyResponse.deserializeBinary
);


/**
 * @param {!proto.proto.services.property_svc.v1.GetPropertyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.services.property_svc.v1.GetPropertyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.services.property_svc.v1.GetPropertyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.services.property_svc.v1.PropertyServiceClient.prototype.getProperty =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.services.property_svc.v1.PropertyService/GetProperty',
      request,
      metadata || {},
      methodDescriptor_PropertyService_GetProperty,
      callback);
};


/**
 * @param {!proto.proto.services.property_svc.v1.GetPropertyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.services.property_svc.v1.GetPropertyResponse>}
 *     Promise that resolves to the response
 */
proto.proto.services.property_svc.v1.PropertyServicePromiseClient.prototype.getProperty =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.services.property_svc.v1.PropertyService/GetProperty',
      request,
      metadata || {},
      methodDescriptor_PropertyService_GetProperty);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.services.property_svc.v1.UpdatePropertyRequest,
 *   !proto.proto.services.property_svc.v1.UpdatePropertyResponse>}
 */
const methodDescriptor_PropertyService_UpdateProperty = new grpc.web.MethodDescriptor(
  '/proto.services.property_svc.v1.PropertyService/UpdateProperty',
  grpc.web.MethodType.UNARY,
  proto.proto.services.property_svc.v1.UpdatePropertyRequest,
  proto.proto.services.property_svc.v1.UpdatePropertyResponse,
  /**
   * @param {!proto.proto.services.property_svc.v1.UpdatePropertyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.services.property_svc.v1.UpdatePropertyResponse.deserializeBinary
);


/**
 * @param {!proto.proto.services.property_svc.v1.UpdatePropertyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.services.property_svc.v1.UpdatePropertyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.services.property_svc.v1.UpdatePropertyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.services.property_svc.v1.PropertyServiceClient.prototype.updateProperty =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.services.property_svc.v1.PropertyService/UpdateProperty',
      request,
      metadata || {},
      methodDescriptor_PropertyService_UpdateProperty,
      callback);
};


/**
 * @param {!proto.proto.services.property_svc.v1.UpdatePropertyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.services.property_svc.v1.UpdatePropertyResponse>}
 *     Promise that resolves to the response
 */
proto.proto.services.property_svc.v1.PropertyServicePromiseClient.prototype.updateProperty =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.services.property_svc.v1.PropertyService/UpdateProperty',
      request,
      metadata || {},
      methodDescriptor_PropertyService_UpdateProperty);
};


module.exports = proto.proto.services.property_svc.v1;
