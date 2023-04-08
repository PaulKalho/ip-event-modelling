import * as grpcWeb from 'grpc-web';

import * as proto_services_task_svc_v1_patient_svc_pb from '../../../../proto/services/task_svc/v1/patient_svc_pb';


export class PatientServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPatient(
    request: proto_services_task_svc_v1_patient_svc_pb.CreatePatientRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_services_task_svc_v1_patient_svc_pb.CreatePatientResponse) => void
  ): grpcWeb.ClientReadableStream<proto_services_task_svc_v1_patient_svc_pb.CreatePatientResponse>;

  getPatient(
    request: proto_services_task_svc_v1_patient_svc_pb.GetPatientRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_services_task_svc_v1_patient_svc_pb.GetPatientResponse) => void
  ): grpcWeb.ClientReadableStream<proto_services_task_svc_v1_patient_svc_pb.GetPatientResponse>;

  updatePatient(
    request: proto_services_task_svc_v1_patient_svc_pb.UpdatePatientRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_services_task_svc_v1_patient_svc_pb.UpdatePatientResponse) => void
  ): grpcWeb.ClientReadableStream<proto_services_task_svc_v1_patient_svc_pb.UpdatePatientResponse>;

}

export class PatientServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPatient(
    request: proto_services_task_svc_v1_patient_svc_pb.CreatePatientRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_services_task_svc_v1_patient_svc_pb.CreatePatientResponse>;

  getPatient(
    request: proto_services_task_svc_v1_patient_svc_pb.GetPatientRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_services_task_svc_v1_patient_svc_pb.GetPatientResponse>;

  updatePatient(
    request: proto_services_task_svc_v1_patient_svc_pb.UpdatePatientRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_services_task_svc_v1_patient_svc_pb.UpdatePatientResponse>;

}
