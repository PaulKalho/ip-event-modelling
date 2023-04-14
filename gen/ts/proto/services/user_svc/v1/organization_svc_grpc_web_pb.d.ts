import * as grpcWeb from 'grpc-web';

import * as proto_services_user_svc_v1_organization_svc_pb from '../../../../proto/services/user_svc/v1/organization_svc_pb';


export class OrganizationServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createOrganization(
    request: proto_services_user_svc_v1_organization_svc_pb.CreateOrganizationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_services_user_svc_v1_organization_svc_pb.CreateOrganizationResponse) => void
  ): grpcWeb.ClientReadableStream<proto_services_user_svc_v1_organization_svc_pb.CreateOrganizationResponse>;

  createOrganizationForUser(
    request: proto_services_user_svc_v1_organization_svc_pb.CreateOrganizationForUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_services_user_svc_v1_organization_svc_pb.CreateOrganizationForUserResponse) => void
  ): grpcWeb.ClientReadableStream<proto_services_user_svc_v1_organization_svc_pb.CreateOrganizationForUserResponse>;

  getOrganization(
    request: proto_services_user_svc_v1_organization_svc_pb.GetOrganizationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_services_user_svc_v1_organization_svc_pb.GetOrganizationResponse) => void
  ): grpcWeb.ClientReadableStream<proto_services_user_svc_v1_organization_svc_pb.GetOrganizationResponse>;

  addMember(
    request: proto_services_user_svc_v1_organization_svc_pb.AddMemberRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_services_user_svc_v1_organization_svc_pb.AddMemberResponse) => void
  ): grpcWeb.ClientReadableStream<proto_services_user_svc_v1_organization_svc_pb.AddMemberResponse>;

  removeMember(
    request: proto_services_user_svc_v1_organization_svc_pb.RemoveMemberRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_services_user_svc_v1_organization_svc_pb.RemoveMemberResponse) => void
  ): grpcWeb.ClientReadableStream<proto_services_user_svc_v1_organization_svc_pb.RemoveMemberResponse>;

  inviteMember(
    request: proto_services_user_svc_v1_organization_svc_pb.InviteMemberRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_services_user_svc_v1_organization_svc_pb.InviteMemberResponse) => void
  ): grpcWeb.ClientReadableStream<proto_services_user_svc_v1_organization_svc_pb.InviteMemberResponse>;

}

export class OrganizationServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createOrganization(
    request: proto_services_user_svc_v1_organization_svc_pb.CreateOrganizationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_services_user_svc_v1_organization_svc_pb.CreateOrganizationResponse>;

  createOrganizationForUser(
    request: proto_services_user_svc_v1_organization_svc_pb.CreateOrganizationForUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_services_user_svc_v1_organization_svc_pb.CreateOrganizationForUserResponse>;

  getOrganization(
    request: proto_services_user_svc_v1_organization_svc_pb.GetOrganizationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_services_user_svc_v1_organization_svc_pb.GetOrganizationResponse>;

  addMember(
    request: proto_services_user_svc_v1_organization_svc_pb.AddMemberRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_services_user_svc_v1_organization_svc_pb.AddMemberResponse>;

  removeMember(
    request: proto_services_user_svc_v1_organization_svc_pb.RemoveMemberRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_services_user_svc_v1_organization_svc_pb.RemoveMemberResponse>;

  inviteMember(
    request: proto_services_user_svc_v1_organization_svc_pb.InviteMemberRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_services_user_svc_v1_organization_svc_pb.InviteMemberResponse>;

}
