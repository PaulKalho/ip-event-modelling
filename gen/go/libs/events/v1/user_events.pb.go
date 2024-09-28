// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.1
// 	protoc        (unknown)
// source: libs/events/v1/user_events.proto

package v1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// TOPIC: USER_REGISTERED
type UserRegisteredEvent struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id       string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Email    string `protobuf:"bytes,2,opt,name=email,proto3" json:"email,omitempty"`
	Nickname string `protobuf:"bytes,3,opt,name=nickname,proto3" json:"nickname,omitempty"`
	Name     string `protobuf:"bytes,4,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *UserRegisteredEvent) Reset() {
	*x = UserRegisteredEvent{}
	if protoimpl.UnsafeEnabled {
		mi := &file_libs_events_v1_user_events_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UserRegisteredEvent) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UserRegisteredEvent) ProtoMessage() {}

func (x *UserRegisteredEvent) ProtoReflect() protoreflect.Message {
	mi := &file_libs_events_v1_user_events_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UserRegisteredEvent.ProtoReflect.Descriptor instead.
func (*UserRegisteredEvent) Descriptor() ([]byte, []int) {
	return file_libs_events_v1_user_events_proto_rawDescGZIP(), []int{0}
}

func (x *UserRegisteredEvent) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *UserRegisteredEvent) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *UserRegisteredEvent) GetNickname() string {
	if x != nil {
		return x.Nickname
	}
	return ""
}

func (x *UserRegisteredEvent) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

// TOPIC: USER_CREATED
type UserCreatedEvent struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id       string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Email    string `protobuf:"bytes,2,opt,name=email,proto3" json:"email,omitempty"`
	Nickname string `protobuf:"bytes,3,opt,name=nickname,proto3" json:"nickname,omitempty"`
	Name     string `protobuf:"bytes,4,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *UserCreatedEvent) Reset() {
	*x = UserCreatedEvent{}
	if protoimpl.UnsafeEnabled {
		mi := &file_libs_events_v1_user_events_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UserCreatedEvent) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UserCreatedEvent) ProtoMessage() {}

func (x *UserCreatedEvent) ProtoReflect() protoreflect.Message {
	mi := &file_libs_events_v1_user_events_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UserCreatedEvent.ProtoReflect.Descriptor instead.
func (*UserCreatedEvent) Descriptor() ([]byte, []int) {
	return file_libs_events_v1_user_events_proto_rawDescGZIP(), []int{1}
}

func (x *UserCreatedEvent) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *UserCreatedEvent) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *UserCreatedEvent) GetNickname() string {
	if x != nil {
		return x.Nickname
	}
	return ""
}

func (x *UserCreatedEvent) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

// TOPIC: USER_UPDATED
type UserUpdatedEvent struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id       string  `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Email    *string `protobuf:"bytes,2,opt,name=email,proto3,oneof" json:"email,omitempty"`
	Nickname *string `protobuf:"bytes,3,opt,name=nickname,proto3,oneof" json:"nickname,omitempty"`
	Name     *string `protobuf:"bytes,4,opt,name=name,proto3,oneof" json:"name,omitempty"`
}

func (x *UserUpdatedEvent) Reset() {
	*x = UserUpdatedEvent{}
	if protoimpl.UnsafeEnabled {
		mi := &file_libs_events_v1_user_events_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UserUpdatedEvent) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UserUpdatedEvent) ProtoMessage() {}

func (x *UserUpdatedEvent) ProtoReflect() protoreflect.Message {
	mi := &file_libs_events_v1_user_events_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UserUpdatedEvent.ProtoReflect.Descriptor instead.
func (*UserUpdatedEvent) Descriptor() ([]byte, []int) {
	return file_libs_events_v1_user_events_proto_rawDescGZIP(), []int{2}
}

func (x *UserUpdatedEvent) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *UserUpdatedEvent) GetEmail() string {
	if x != nil && x.Email != nil {
		return *x.Email
	}
	return ""
}

func (x *UserUpdatedEvent) GetNickname() string {
	if x != nil && x.Nickname != nil {
		return *x.Nickname
	}
	return ""
}

func (x *UserUpdatedEvent) GetName() string {
	if x != nil && x.Name != nil {
		return *x.Name
	}
	return ""
}

var File_libs_events_v1_user_events_proto protoreflect.FileDescriptor

var file_libs_events_v1_user_events_proto_rawDesc = []byte{
	0x0a, 0x20, 0x6c, 0x69, 0x62, 0x73, 0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x2f, 0x76, 0x31,
	0x2f, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x0e, 0x6c, 0x69, 0x62, 0x73, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x2e,
	0x76, 0x31, 0x22, 0x6b, 0x0a, 0x13, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74,
	0x65, 0x72, 0x65, 0x64, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61,
	0x69, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x12,
	0x1a, 0x0a, 0x08, 0x6e, 0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x6e, 0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22,
	0x68, 0x0a, 0x10, 0x55, 0x73, 0x65, 0x72, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x45, 0x76,
	0x65, 0x6e, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x1a, 0x0a, 0x08, 0x6e, 0x69, 0x63,
	0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x6e, 0x69, 0x63,
	0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x97, 0x01, 0x0a, 0x10, 0x55, 0x73,
	0x65, 0x72, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x19,
	0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52,
	0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x88, 0x01, 0x01, 0x12, 0x1f, 0x0a, 0x08, 0x6e, 0x69, 0x63,
	0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x08, 0x6e,
	0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x88, 0x01, 0x01, 0x12, 0x17, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x48, 0x02, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x88, 0x01, 0x01, 0x42, 0x08, 0x0a, 0x06, 0x5f, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x42, 0x0b, 0x0a,
	0x09, 0x5f, 0x6e, 0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x6e,
	0x61, 0x6d, 0x65, 0x42, 0x93, 0x01, 0x0a, 0x12, 0x63, 0x6f, 0x6d, 0x2e, 0x6c, 0x69, 0x62, 0x73,
	0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x42, 0x0f, 0x55, 0x73, 0x65, 0x72,
	0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x12, 0x67,
	0x65, 0x6e, 0x2f, 0x6c, 0x69, 0x62, 0x73, 0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x2f, 0x76,
	0x31, 0xa2, 0x02, 0x03, 0x4c, 0x45, 0x58, 0xaa, 0x02, 0x0e, 0x4c, 0x69, 0x62, 0x73, 0x2e, 0x45,
	0x76, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x0e, 0x4c, 0x69, 0x62, 0x73, 0x5c,
	0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x1a, 0x4c, 0x69, 0x62, 0x73,
	0x5c, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x10, 0x4c, 0x69, 0x62, 0x73, 0x3a, 0x3a, 0x45,
	0x76, 0x65, 0x6e, 0x74, 0x73, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_libs_events_v1_user_events_proto_rawDescOnce sync.Once
	file_libs_events_v1_user_events_proto_rawDescData = file_libs_events_v1_user_events_proto_rawDesc
)

func file_libs_events_v1_user_events_proto_rawDescGZIP() []byte {
	file_libs_events_v1_user_events_proto_rawDescOnce.Do(func() {
		file_libs_events_v1_user_events_proto_rawDescData = protoimpl.X.CompressGZIP(file_libs_events_v1_user_events_proto_rawDescData)
	})
	return file_libs_events_v1_user_events_proto_rawDescData
}

var file_libs_events_v1_user_events_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_libs_events_v1_user_events_proto_goTypes = []interface{}{
	(*UserRegisteredEvent)(nil), // 0: libs.events.v1.UserRegisteredEvent
	(*UserCreatedEvent)(nil),    // 1: libs.events.v1.UserCreatedEvent
	(*UserUpdatedEvent)(nil),    // 2: libs.events.v1.UserUpdatedEvent
}
var file_libs_events_v1_user_events_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_libs_events_v1_user_events_proto_init() }
func file_libs_events_v1_user_events_proto_init() {
	if File_libs_events_v1_user_events_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_libs_events_v1_user_events_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UserRegisteredEvent); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_libs_events_v1_user_events_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UserCreatedEvent); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_libs_events_v1_user_events_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UserUpdatedEvent); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_libs_events_v1_user_events_proto_msgTypes[2].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_libs_events_v1_user_events_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_libs_events_v1_user_events_proto_goTypes,
		DependencyIndexes: file_libs_events_v1_user_events_proto_depIdxs,
		MessageInfos:      file_libs_events_v1_user_events_proto_msgTypes,
	}.Build()
	File_libs_events_v1_user_events_proto = out.File
	file_libs_events_v1_user_events_proto_rawDesc = nil
	file_libs_events_v1_user_events_proto_goTypes = nil
	file_libs_events_v1_user_events_proto_depIdxs = nil
}
