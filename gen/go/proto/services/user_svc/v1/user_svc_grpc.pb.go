// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: proto/services/user_svc/v1/user_svc.proto

package user_svc

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	UserService_ReadSelf_FullMethodName          = "/proto.services.user_svc.v1.UserService/ReadSelf"
	UserService_ReadPublicProfile_FullMethodName = "/proto.services.user_svc.v1.UserService/ReadPublicProfile"
	UserService_UpdateUser_FullMethodName        = "/proto.services.user_svc.v1.UserService/UpdateUser"
)

// UserServiceClient is the client API for UserService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type UserServiceClient interface {
	ReadSelf(ctx context.Context, in *ReadSelfRequest, opts ...grpc.CallOption) (*ReadSelfResponse, error)
	ReadPublicProfile(ctx context.Context, in *ReadPublicProfileRequest, opts ...grpc.CallOption) (*ReadPublicProfileResponse, error)
	UpdateUser(ctx context.Context, in *UpdateUserRequest, opts ...grpc.CallOption) (*UpdateUserResponse, error)
}

type userServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewUserServiceClient(cc grpc.ClientConnInterface) UserServiceClient {
	return &userServiceClient{cc}
}

func (c *userServiceClient) ReadSelf(ctx context.Context, in *ReadSelfRequest, opts ...grpc.CallOption) (*ReadSelfResponse, error) {
	out := new(ReadSelfResponse)
	err := c.cc.Invoke(ctx, UserService_ReadSelf_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) ReadPublicProfile(ctx context.Context, in *ReadPublicProfileRequest, opts ...grpc.CallOption) (*ReadPublicProfileResponse, error) {
	out := new(ReadPublicProfileResponse)
	err := c.cc.Invoke(ctx, UserService_ReadPublicProfile_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) UpdateUser(ctx context.Context, in *UpdateUserRequest, opts ...grpc.CallOption) (*UpdateUserResponse, error) {
	out := new(UpdateUserResponse)
	err := c.cc.Invoke(ctx, UserService_UpdateUser_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// UserServiceServer is the server API for UserService service.
// All implementations must embed UnimplementedUserServiceServer
// for forward compatibility
type UserServiceServer interface {
	ReadSelf(context.Context, *ReadSelfRequest) (*ReadSelfResponse, error)
	ReadPublicProfile(context.Context, *ReadPublicProfileRequest) (*ReadPublicProfileResponse, error)
	UpdateUser(context.Context, *UpdateUserRequest) (*UpdateUserResponse, error)
	mustEmbedUnimplementedUserServiceServer()
}

// UnimplementedUserServiceServer must be embedded to have forward compatible implementations.
type UnimplementedUserServiceServer struct {
}

func (UnimplementedUserServiceServer) ReadSelf(context.Context, *ReadSelfRequest) (*ReadSelfResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReadSelf not implemented")
}
func (UnimplementedUserServiceServer) ReadPublicProfile(context.Context, *ReadPublicProfileRequest) (*ReadPublicProfileResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReadPublicProfile not implemented")
}
func (UnimplementedUserServiceServer) UpdateUser(context.Context, *UpdateUserRequest) (*UpdateUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateUser not implemented")
}
func (UnimplementedUserServiceServer) mustEmbedUnimplementedUserServiceServer() {}

// UnsafeUserServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to UserServiceServer will
// result in compilation errors.
type UnsafeUserServiceServer interface {
	mustEmbedUnimplementedUserServiceServer()
}

func RegisterUserServiceServer(s grpc.ServiceRegistrar, srv UserServiceServer) {
	s.RegisterService(&UserService_ServiceDesc, srv)
}

func _UserService_ReadSelf_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReadSelfRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).ReadSelf(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: UserService_ReadSelf_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).ReadSelf(ctx, req.(*ReadSelfRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_ReadPublicProfile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReadPublicProfileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).ReadPublicProfile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: UserService_ReadPublicProfile_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).ReadPublicProfile(ctx, req.(*ReadPublicProfileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_UpdateUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).UpdateUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: UserService_UpdateUser_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).UpdateUser(ctx, req.(*UpdateUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// UserService_ServiceDesc is the grpc.ServiceDesc for UserService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var UserService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "proto.services.user_svc.v1.UserService",
	HandlerType: (*UserServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ReadSelf",
			Handler:    _UserService_ReadSelf_Handler,
		},
		{
			MethodName: "ReadPublicProfile",
			Handler:    _UserService_ReadPublicProfile_Handler,
		},
		{
			MethodName: "UpdateUser",
			Handler:    _UserService_UpdateUser_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/services/user_svc/v1/user_svc.proto",
}
