// source: services/updates_svc/v1/updates_svc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.services.updates_svc.v1.DomainEvent', null, global);
goog.exportSymbol('proto.services.updates_svc.v1.EntityEvent', null, global);
goog.exportSymbol('proto.services.updates_svc.v1.ReceiveUpdatesRequest', null, global);
goog.exportSymbol('proto.services.updates_svc.v1.ReceiveUpdatesResponse', null, global);
goog.exportSymbol('proto.services.updates_svc.v1.ReceiveUpdatesResponse.EventCase', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.services.updates_svc.v1.EntityEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.updates_svc.v1.EntityEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.updates_svc.v1.EntityEvent.displayName = 'proto.services.updates_svc.v1.EntityEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.services.updates_svc.v1.DomainEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.updates_svc.v1.DomainEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.updates_svc.v1.DomainEvent.displayName = 'proto.services.updates_svc.v1.DomainEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.services.updates_svc.v1.ReceiveUpdatesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.updates_svc.v1.ReceiveUpdatesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.updates_svc.v1.ReceiveUpdatesRequest.displayName = 'proto.services.updates_svc.v1.ReceiveUpdatesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.services.updates_svc.v1.ReceiveUpdatesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.services.updates_svc.v1.ReceiveUpdatesResponse.oneofGroups_);
};
goog.inherits(proto.services.updates_svc.v1.ReceiveUpdatesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.updates_svc.v1.ReceiveUpdatesResponse.displayName = 'proto.services.updates_svc.v1.ReceiveUpdatesResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.services.updates_svc.v1.EntityEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.services.updates_svc.v1.EntityEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.updates_svc.v1.EntityEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.updates_svc.v1.EntityEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    entityId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.services.updates_svc.v1.EntityEvent}
 */
proto.services.updates_svc.v1.EntityEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.updates_svc.v1.EntityEvent;
  return proto.services.updates_svc.v1.EntityEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.updates_svc.v1.EntityEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.updates_svc.v1.EntityEvent}
 */
proto.services.updates_svc.v1.EntityEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.services.updates_svc.v1.EntityEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.updates_svc.v1.EntityEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.updates_svc.v1.EntityEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.updates_svc.v1.EntityEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string entity_id = 1;
 * @return {string}
 */
proto.services.updates_svc.v1.EntityEvent.prototype.getEntityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.updates_svc.v1.EntityEvent} returns this
 */
proto.services.updates_svc.v1.EntityEvent.prototype.setEntityId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.services.updates_svc.v1.DomainEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.services.updates_svc.v1.DomainEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.updates_svc.v1.DomainEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.updates_svc.v1.DomainEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    eventType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    aggregateId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    aggregateType: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.services.updates_svc.v1.DomainEvent}
 */
proto.services.updates_svc.v1.DomainEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.updates_svc.v1.DomainEvent;
  return proto.services.updates_svc.v1.DomainEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.updates_svc.v1.DomainEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.updates_svc.v1.DomainEvent}
 */
proto.services.updates_svc.v1.DomainEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAggregateId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAggregateType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.services.updates_svc.v1.DomainEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.updates_svc.v1.DomainEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.updates_svc.v1.DomainEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.updates_svc.v1.DomainEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEventType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAggregateId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAggregateType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string event_id = 1;
 * @return {string}
 */
proto.services.updates_svc.v1.DomainEvent.prototype.getEventId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.updates_svc.v1.DomainEvent} returns this
 */
proto.services.updates_svc.v1.DomainEvent.prototype.setEventId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string event_type = 2;
 * @return {string}
 */
proto.services.updates_svc.v1.DomainEvent.prototype.getEventType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.updates_svc.v1.DomainEvent} returns this
 */
proto.services.updates_svc.v1.DomainEvent.prototype.setEventType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string aggregate_id = 3;
 * @return {string}
 */
proto.services.updates_svc.v1.DomainEvent.prototype.getAggregateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.updates_svc.v1.DomainEvent} returns this
 */
proto.services.updates_svc.v1.DomainEvent.prototype.setAggregateId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string aggregate_type = 4;
 * @return {string}
 */
proto.services.updates_svc.v1.DomainEvent.prototype.getAggregateType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.updates_svc.v1.DomainEvent} returns this
 */
proto.services.updates_svc.v1.DomainEvent.prototype.setAggregateType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.services.updates_svc.v1.ReceiveUpdatesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.updates_svc.v1.ReceiveUpdatesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.updates_svc.v1.ReceiveUpdatesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.updates_svc.v1.ReceiveUpdatesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    revision: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.services.updates_svc.v1.ReceiveUpdatesRequest}
 */
proto.services.updates_svc.v1.ReceiveUpdatesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.updates_svc.v1.ReceiveUpdatesRequest;
  return proto.services.updates_svc.v1.ReceiveUpdatesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.updates_svc.v1.ReceiveUpdatesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.updates_svc.v1.ReceiveUpdatesRequest}
 */
proto.services.updates_svc.v1.ReceiveUpdatesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRevision(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.services.updates_svc.v1.ReceiveUpdatesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.updates_svc.v1.ReceiveUpdatesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.updates_svc.v1.ReceiveUpdatesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.updates_svc.v1.ReceiveUpdatesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 revision = 1;
 * @return {number}
 */
proto.services.updates_svc.v1.ReceiveUpdatesRequest.prototype.getRevision = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.updates_svc.v1.ReceiveUpdatesRequest} returns this
 */
proto.services.updates_svc.v1.ReceiveUpdatesRequest.prototype.setRevision = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.services.updates_svc.v1.ReceiveUpdatesRequest} returns this
 */
proto.services.updates_svc.v1.ReceiveUpdatesRequest.prototype.clearRevision = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.updates_svc.v1.ReceiveUpdatesRequest.prototype.hasRevision = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.services.updates_svc.v1.ReceiveUpdatesResponse.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.services.updates_svc.v1.ReceiveUpdatesResponse.EventCase = {
  EVENT_NOT_SET: 0,
  ENTITY_EVENT: 2,
  DOMAIN_EVENT: 3
};

/**
 * @return {proto.services.updates_svc.v1.ReceiveUpdatesResponse.EventCase}
 */
proto.services.updates_svc.v1.ReceiveUpdatesResponse.prototype.getEventCase = function() {
  return /** @type {proto.services.updates_svc.v1.ReceiveUpdatesResponse.EventCase} */(jspb.Message.computeOneofCase(this, proto.services.updates_svc.v1.ReceiveUpdatesResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.services.updates_svc.v1.ReceiveUpdatesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.updates_svc.v1.ReceiveUpdatesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.updates_svc.v1.ReceiveUpdatesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.updates_svc.v1.ReceiveUpdatesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    revision: jspb.Message.getFieldWithDefault(msg, 1, 0),
    entityEvent: (f = msg.getEntityEvent()) && proto.services.updates_svc.v1.EntityEvent.toObject(includeInstance, f),
    domainEvent: (f = msg.getDomainEvent()) && proto.services.updates_svc.v1.DomainEvent.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.services.updates_svc.v1.ReceiveUpdatesResponse}
 */
proto.services.updates_svc.v1.ReceiveUpdatesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.updates_svc.v1.ReceiveUpdatesResponse;
  return proto.services.updates_svc.v1.ReceiveUpdatesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.updates_svc.v1.ReceiveUpdatesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.updates_svc.v1.ReceiveUpdatesResponse}
 */
proto.services.updates_svc.v1.ReceiveUpdatesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRevision(value);
      break;
    case 2:
      var value = new proto.services.updates_svc.v1.EntityEvent;
      reader.readMessage(value,proto.services.updates_svc.v1.EntityEvent.deserializeBinaryFromReader);
      msg.setEntityEvent(value);
      break;
    case 3:
      var value = new proto.services.updates_svc.v1.DomainEvent;
      reader.readMessage(value,proto.services.updates_svc.v1.DomainEvent.deserializeBinaryFromReader);
      msg.setDomainEvent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.services.updates_svc.v1.ReceiveUpdatesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.updates_svc.v1.ReceiveUpdatesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.updates_svc.v1.ReceiveUpdatesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.updates_svc.v1.ReceiveUpdatesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRevision();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEntityEvent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.services.updates_svc.v1.EntityEvent.serializeBinaryToWriter
    );
  }
  f = message.getDomainEvent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.services.updates_svc.v1.DomainEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 revision = 1;
 * @return {number}
 */
proto.services.updates_svc.v1.ReceiveUpdatesResponse.prototype.getRevision = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.updates_svc.v1.ReceiveUpdatesResponse} returns this
 */
proto.services.updates_svc.v1.ReceiveUpdatesResponse.prototype.setRevision = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional EntityEvent entity_event = 2;
 * @return {?proto.services.updates_svc.v1.EntityEvent}
 */
proto.services.updates_svc.v1.ReceiveUpdatesResponse.prototype.getEntityEvent = function() {
  return /** @type{?proto.services.updates_svc.v1.EntityEvent} */ (
    jspb.Message.getWrapperField(this, proto.services.updates_svc.v1.EntityEvent, 2));
};


/**
 * @param {?proto.services.updates_svc.v1.EntityEvent|undefined} value
 * @return {!proto.services.updates_svc.v1.ReceiveUpdatesResponse} returns this
*/
proto.services.updates_svc.v1.ReceiveUpdatesResponse.prototype.setEntityEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.services.updates_svc.v1.ReceiveUpdatesResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.updates_svc.v1.ReceiveUpdatesResponse} returns this
 */
proto.services.updates_svc.v1.ReceiveUpdatesResponse.prototype.clearEntityEvent = function() {
  return this.setEntityEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.updates_svc.v1.ReceiveUpdatesResponse.prototype.hasEntityEvent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DomainEvent domain_event = 3;
 * @return {?proto.services.updates_svc.v1.DomainEvent}
 */
proto.services.updates_svc.v1.ReceiveUpdatesResponse.prototype.getDomainEvent = function() {
  return /** @type{?proto.services.updates_svc.v1.DomainEvent} */ (
    jspb.Message.getWrapperField(this, proto.services.updates_svc.v1.DomainEvent, 3));
};


/**
 * @param {?proto.services.updates_svc.v1.DomainEvent|undefined} value
 * @return {!proto.services.updates_svc.v1.ReceiveUpdatesResponse} returns this
*/
proto.services.updates_svc.v1.ReceiveUpdatesResponse.prototype.setDomainEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.services.updates_svc.v1.ReceiveUpdatesResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.updates_svc.v1.ReceiveUpdatesResponse} returns this
 */
proto.services.updates_svc.v1.ReceiveUpdatesResponse.prototype.clearDomainEvent = function() {
  return this.setDomainEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.updates_svc.v1.ReceiveUpdatesResponse.prototype.hasDomainEvent = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.services.updates_svc.v1);