// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: proto/services/user_svc/v1/organization_svc.proto

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
	OrganizationService_CreateOrganization_FullMethodName        = "/proto.services.user_svc.v1.OrganizationService/CreateOrganization"
	OrganizationService_CreateOrganizationForUser_FullMethodName = "/proto.services.user_svc.v1.OrganizationService/CreateOrganizationForUser"
	OrganizationService_GetOrganization_FullMethodName           = "/proto.services.user_svc.v1.OrganizationService/GetOrganization"
	OrganizationService_GetOrganizationsByUser_FullMethodName    = "/proto.services.user_svc.v1.OrganizationService/GetOrganizationsByUser"
	OrganizationService_UpdateOrganization_FullMethodName        = "/proto.services.user_svc.v1.OrganizationService/UpdateOrganization"
	OrganizationService_DeleteOrganization_FullMethodName        = "/proto.services.user_svc.v1.OrganizationService/DeleteOrganization"
	OrganizationService_AddMember_FullMethodName                 = "/proto.services.user_svc.v1.OrganizationService/AddMember"
	OrganizationService_RemoveMember_FullMethodName              = "/proto.services.user_svc.v1.OrganizationService/RemoveMember"
	OrganizationService_InviteMember_FullMethodName              = "/proto.services.user_svc.v1.OrganizationService/InviteMember"
	OrganizationService_AcceptInvitation_FullMethodName          = "/proto.services.user_svc.v1.OrganizationService/AcceptInvitation"
	OrganizationService_GetInvitationsByUser_FullMethodName      = "/proto.services.user_svc.v1.OrganizationService/GetInvitationsByUser"
)

// OrganizationServiceClient is the client API for OrganizationService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type OrganizationServiceClient interface {
	CreateOrganization(ctx context.Context, in *CreateOrganizationRequest, opts ...grpc.CallOption) (*CreateOrganizationResponse, error)
	CreateOrganizationForUser(ctx context.Context, in *CreateOrganizationForUserRequest, opts ...grpc.CallOption) (*CreateOrganizationForUserResponse, error)
	GetOrganization(ctx context.Context, in *GetOrganizationRequest, opts ...grpc.CallOption) (*GetOrganizationResponse, error)
	GetOrganizationsByUser(ctx context.Context, in *GetOrganizationsByUserRequest, opts ...grpc.CallOption) (*GetOrganizationsByUserResponse, error)
	UpdateOrganization(ctx context.Context, in *UpdateOrganizationRequest, opts ...grpc.CallOption) (*UpdateOrganizationResponse, error)
	DeleteOrganization(ctx context.Context, in *DeleteOrganizationRequest, opts ...grpc.CallOption) (*DeleteOrganizationResponse, error)
	AddMember(ctx context.Context, in *AddMemberRequest, opts ...grpc.CallOption) (*AddMemberResponse, error)
	RemoveMember(ctx context.Context, in *RemoveMemberRequest, opts ...grpc.CallOption) (*RemoveMemberResponse, error)
	InviteMember(ctx context.Context, in *InviteMemberRequest, opts ...grpc.CallOption) (*InviteMemberResponse, error)
	AcceptInvitation(ctx context.Context, in *AcceptInvitationRequest, opts ...grpc.CallOption) (*AcceptInvitationResponse, error)
	GetInvitationsByUser(ctx context.Context, in *GetInvitationsByUserRequest, opts ...grpc.CallOption) (*GetInvitationsByUserResponse, error)
}

type organizationServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewOrganizationServiceClient(cc grpc.ClientConnInterface) OrganizationServiceClient {
	return &organizationServiceClient{cc}
}

func (c *organizationServiceClient) CreateOrganization(ctx context.Context, in *CreateOrganizationRequest, opts ...grpc.CallOption) (*CreateOrganizationResponse, error) {
	out := new(CreateOrganizationResponse)
	err := c.cc.Invoke(ctx, OrganizationService_CreateOrganization_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *organizationServiceClient) CreateOrganizationForUser(ctx context.Context, in *CreateOrganizationForUserRequest, opts ...grpc.CallOption) (*CreateOrganizationForUserResponse, error) {
	out := new(CreateOrganizationForUserResponse)
	err := c.cc.Invoke(ctx, OrganizationService_CreateOrganizationForUser_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *organizationServiceClient) GetOrganization(ctx context.Context, in *GetOrganizationRequest, opts ...grpc.CallOption) (*GetOrganizationResponse, error) {
	out := new(GetOrganizationResponse)
	err := c.cc.Invoke(ctx, OrganizationService_GetOrganization_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *organizationServiceClient) GetOrganizationsByUser(ctx context.Context, in *GetOrganizationsByUserRequest, opts ...grpc.CallOption) (*GetOrganizationsByUserResponse, error) {
	out := new(GetOrganizationsByUserResponse)
	err := c.cc.Invoke(ctx, OrganizationService_GetOrganizationsByUser_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *organizationServiceClient) UpdateOrganization(ctx context.Context, in *UpdateOrganizationRequest, opts ...grpc.CallOption) (*UpdateOrganizationResponse, error) {
	out := new(UpdateOrganizationResponse)
	err := c.cc.Invoke(ctx, OrganizationService_UpdateOrganization_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *organizationServiceClient) DeleteOrganization(ctx context.Context, in *DeleteOrganizationRequest, opts ...grpc.CallOption) (*DeleteOrganizationResponse, error) {
	out := new(DeleteOrganizationResponse)
	err := c.cc.Invoke(ctx, OrganizationService_DeleteOrganization_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *organizationServiceClient) AddMember(ctx context.Context, in *AddMemberRequest, opts ...grpc.CallOption) (*AddMemberResponse, error) {
	out := new(AddMemberResponse)
	err := c.cc.Invoke(ctx, OrganizationService_AddMember_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *organizationServiceClient) RemoveMember(ctx context.Context, in *RemoveMemberRequest, opts ...grpc.CallOption) (*RemoveMemberResponse, error) {
	out := new(RemoveMemberResponse)
	err := c.cc.Invoke(ctx, OrganizationService_RemoveMember_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *organizationServiceClient) InviteMember(ctx context.Context, in *InviteMemberRequest, opts ...grpc.CallOption) (*InviteMemberResponse, error) {
	out := new(InviteMemberResponse)
	err := c.cc.Invoke(ctx, OrganizationService_InviteMember_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *organizationServiceClient) AcceptInvitation(ctx context.Context, in *AcceptInvitationRequest, opts ...grpc.CallOption) (*AcceptInvitationResponse, error) {
	out := new(AcceptInvitationResponse)
	err := c.cc.Invoke(ctx, OrganizationService_AcceptInvitation_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *organizationServiceClient) GetInvitationsByUser(ctx context.Context, in *GetInvitationsByUserRequest, opts ...grpc.CallOption) (*GetInvitationsByUserResponse, error) {
	out := new(GetInvitationsByUserResponse)
	err := c.cc.Invoke(ctx, OrganizationService_GetInvitationsByUser_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// OrganizationServiceServer is the server API for OrganizationService service.
// All implementations must embed UnimplementedOrganizationServiceServer
// for forward compatibility
type OrganizationServiceServer interface {
	CreateOrganization(context.Context, *CreateOrganizationRequest) (*CreateOrganizationResponse, error)
	CreateOrganizationForUser(context.Context, *CreateOrganizationForUserRequest) (*CreateOrganizationForUserResponse, error)
	GetOrganization(context.Context, *GetOrganizationRequest) (*GetOrganizationResponse, error)
	GetOrganizationsByUser(context.Context, *GetOrganizationsByUserRequest) (*GetOrganizationsByUserResponse, error)
	UpdateOrganization(context.Context, *UpdateOrganizationRequest) (*UpdateOrganizationResponse, error)
	DeleteOrganization(context.Context, *DeleteOrganizationRequest) (*DeleteOrganizationResponse, error)
	AddMember(context.Context, *AddMemberRequest) (*AddMemberResponse, error)
	RemoveMember(context.Context, *RemoveMemberRequest) (*RemoveMemberResponse, error)
	InviteMember(context.Context, *InviteMemberRequest) (*InviteMemberResponse, error)
	AcceptInvitation(context.Context, *AcceptInvitationRequest) (*AcceptInvitationResponse, error)
	GetInvitationsByUser(context.Context, *GetInvitationsByUserRequest) (*GetInvitationsByUserResponse, error)
	mustEmbedUnimplementedOrganizationServiceServer()
}

// UnimplementedOrganizationServiceServer must be embedded to have forward compatible implementations.
type UnimplementedOrganizationServiceServer struct {
}

func (UnimplementedOrganizationServiceServer) CreateOrganization(context.Context, *CreateOrganizationRequest) (*CreateOrganizationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateOrganization not implemented")
}
func (UnimplementedOrganizationServiceServer) CreateOrganizationForUser(context.Context, *CreateOrganizationForUserRequest) (*CreateOrganizationForUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateOrganizationForUser not implemented")
}
func (UnimplementedOrganizationServiceServer) GetOrganization(context.Context, *GetOrganizationRequest) (*GetOrganizationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOrganization not implemented")
}
func (UnimplementedOrganizationServiceServer) GetOrganizationsByUser(context.Context, *GetOrganizationsByUserRequest) (*GetOrganizationsByUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOrganizationsByUser not implemented")
}
func (UnimplementedOrganizationServiceServer) UpdateOrganization(context.Context, *UpdateOrganizationRequest) (*UpdateOrganizationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateOrganization not implemented")
}
func (UnimplementedOrganizationServiceServer) DeleteOrganization(context.Context, *DeleteOrganizationRequest) (*DeleteOrganizationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteOrganization not implemented")
}
func (UnimplementedOrganizationServiceServer) AddMember(context.Context, *AddMemberRequest) (*AddMemberResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddMember not implemented")
}
func (UnimplementedOrganizationServiceServer) RemoveMember(context.Context, *RemoveMemberRequest) (*RemoveMemberResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RemoveMember not implemented")
}
func (UnimplementedOrganizationServiceServer) InviteMember(context.Context, *InviteMemberRequest) (*InviteMemberResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method InviteMember not implemented")
}
func (UnimplementedOrganizationServiceServer) AcceptInvitation(context.Context, *AcceptInvitationRequest) (*AcceptInvitationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AcceptInvitation not implemented")
}
func (UnimplementedOrganizationServiceServer) GetInvitationsByUser(context.Context, *GetInvitationsByUserRequest) (*GetInvitationsByUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetInvitationsByUser not implemented")
}
func (UnimplementedOrganizationServiceServer) mustEmbedUnimplementedOrganizationServiceServer() {}

// UnsafeOrganizationServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to OrganizationServiceServer will
// result in compilation errors.
type UnsafeOrganizationServiceServer interface {
	mustEmbedUnimplementedOrganizationServiceServer()
}

func RegisterOrganizationServiceServer(s grpc.ServiceRegistrar, srv OrganizationServiceServer) {
	s.RegisterService(&OrganizationService_ServiceDesc, srv)
}

func _OrganizationService_CreateOrganization_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateOrganizationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrganizationServiceServer).CreateOrganization(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: OrganizationService_CreateOrganization_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrganizationServiceServer).CreateOrganization(ctx, req.(*CreateOrganizationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OrganizationService_CreateOrganizationForUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateOrganizationForUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrganizationServiceServer).CreateOrganizationForUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: OrganizationService_CreateOrganizationForUser_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrganizationServiceServer).CreateOrganizationForUser(ctx, req.(*CreateOrganizationForUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OrganizationService_GetOrganization_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOrganizationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrganizationServiceServer).GetOrganization(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: OrganizationService_GetOrganization_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrganizationServiceServer).GetOrganization(ctx, req.(*GetOrganizationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OrganizationService_GetOrganizationsByUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOrganizationsByUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrganizationServiceServer).GetOrganizationsByUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: OrganizationService_GetOrganizationsByUser_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrganizationServiceServer).GetOrganizationsByUser(ctx, req.(*GetOrganizationsByUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OrganizationService_UpdateOrganization_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateOrganizationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrganizationServiceServer).UpdateOrganization(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: OrganizationService_UpdateOrganization_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrganizationServiceServer).UpdateOrganization(ctx, req.(*UpdateOrganizationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OrganizationService_DeleteOrganization_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteOrganizationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrganizationServiceServer).DeleteOrganization(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: OrganizationService_DeleteOrganization_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrganizationServiceServer).DeleteOrganization(ctx, req.(*DeleteOrganizationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OrganizationService_AddMember_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddMemberRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrganizationServiceServer).AddMember(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: OrganizationService_AddMember_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrganizationServiceServer).AddMember(ctx, req.(*AddMemberRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OrganizationService_RemoveMember_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RemoveMemberRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrganizationServiceServer).RemoveMember(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: OrganizationService_RemoveMember_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrganizationServiceServer).RemoveMember(ctx, req.(*RemoveMemberRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OrganizationService_InviteMember_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(InviteMemberRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrganizationServiceServer).InviteMember(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: OrganizationService_InviteMember_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrganizationServiceServer).InviteMember(ctx, req.(*InviteMemberRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OrganizationService_AcceptInvitation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AcceptInvitationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrganizationServiceServer).AcceptInvitation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: OrganizationService_AcceptInvitation_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrganizationServiceServer).AcceptInvitation(ctx, req.(*AcceptInvitationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OrganizationService_GetInvitationsByUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetInvitationsByUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrganizationServiceServer).GetInvitationsByUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: OrganizationService_GetInvitationsByUser_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrganizationServiceServer).GetInvitationsByUser(ctx, req.(*GetInvitationsByUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// OrganizationService_ServiceDesc is the grpc.ServiceDesc for OrganizationService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var OrganizationService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "proto.services.user_svc.v1.OrganizationService",
	HandlerType: (*OrganizationServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateOrganization",
			Handler:    _OrganizationService_CreateOrganization_Handler,
		},
		{
			MethodName: "CreateOrganizationForUser",
			Handler:    _OrganizationService_CreateOrganizationForUser_Handler,
		},
		{
			MethodName: "GetOrganization",
			Handler:    _OrganizationService_GetOrganization_Handler,
		},
		{
			MethodName: "GetOrganizationsByUser",
			Handler:    _OrganizationService_GetOrganizationsByUser_Handler,
		},
		{
			MethodName: "UpdateOrganization",
			Handler:    _OrganizationService_UpdateOrganization_Handler,
		},
		{
			MethodName: "DeleteOrganization",
			Handler:    _OrganizationService_DeleteOrganization_Handler,
		},
		{
			MethodName: "AddMember",
			Handler:    _OrganizationService_AddMember_Handler,
		},
		{
			MethodName: "RemoveMember",
			Handler:    _OrganizationService_RemoveMember_Handler,
		},
		{
			MethodName: "InviteMember",
			Handler:    _OrganizationService_InviteMember_Handler,
		},
		{
			MethodName: "AcceptInvitation",
			Handler:    _OrganizationService_AcceptInvitation_Handler,
		},
		{
			MethodName: "GetInvitationsByUser",
			Handler:    _OrganizationService_GetInvitationsByUser_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/services/user_svc/v1/organization_svc.proto",
}
