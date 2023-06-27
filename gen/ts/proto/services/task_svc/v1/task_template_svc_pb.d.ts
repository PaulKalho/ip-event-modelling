import * as jspb from 'google-protobuf'



export class CreateTaskTemplateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateTaskTemplateRequest;

  getDescription(): string;
  setDescription(value: string): CreateTaskTemplateRequest;

  getPublic(): boolean;
  setPublic(value: boolean): CreateTaskTemplateRequest;

  getWardId(): string;
  setWardId(value: string): CreateTaskTemplateRequest;
  hasWardId(): boolean;
  clearWardId(): CreateTaskTemplateRequest;

  getSubtasksList(): Array<CreateTaskTemplateRequest.SubTask>;
  setSubtasksList(value: Array<CreateTaskTemplateRequest.SubTask>): CreateTaskTemplateRequest;
  clearSubtasksList(): CreateTaskTemplateRequest;
  addSubtasks(value?: CreateTaskTemplateRequest.SubTask, index?: number): CreateTaskTemplateRequest.SubTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaskTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaskTemplateRequest): CreateTaskTemplateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTaskTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaskTemplateRequest;
  static deserializeBinaryFromReader(message: CreateTaskTemplateRequest, reader: jspb.BinaryReader): CreateTaskTemplateRequest;
}

export namespace CreateTaskTemplateRequest {
  export type AsObject = {
    name: string,
    description: string,
    pb_public: boolean,
    wardId?: string,
    subtasksList: Array<CreateTaskTemplateRequest.SubTask.AsObject>,
  }

  export class SubTask extends jspb.Message {
    getName(): string;
    setName(value: string): SubTask;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubTask.AsObject;
    static toObject(includeInstance: boolean, msg: SubTask): SubTask.AsObject;
    static serializeBinaryToWriter(message: SubTask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubTask;
    static deserializeBinaryFromReader(message: SubTask, reader: jspb.BinaryReader): SubTask;
  }

  export namespace SubTask {
    export type AsObject = {
      name: string,
    }
  }


  export enum WardIdCase { 
    _WARD_ID_NOT_SET = 0,
    WARD_ID = 4,
  }
}

export class CreateTaskTemplateResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateTaskTemplateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaskTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaskTemplateResponse): CreateTaskTemplateResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTaskTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaskTemplateResponse;
  static deserializeBinaryFromReader(message: CreateTaskTemplateResponse, reader: jspb.BinaryReader): CreateTaskTemplateResponse;
}

export namespace CreateTaskTemplateResponse {
  export type AsObject = {
    id: string,
  }
}

export class GetAllTaskTemplatesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllTaskTemplatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllTaskTemplatesRequest): GetAllTaskTemplatesRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllTaskTemplatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllTaskTemplatesRequest;
  static deserializeBinaryFromReader(message: GetAllTaskTemplatesRequest, reader: jspb.BinaryReader): GetAllTaskTemplatesRequest;
}

export namespace GetAllTaskTemplatesRequest {
  export type AsObject = {
  }
}

export class GetAllTaskTemplatesResponse extends jspb.Message {
  getTemplatesList(): Array<GetAllTaskTemplatesResponse.TaskTemplate>;
  setTemplatesList(value: Array<GetAllTaskTemplatesResponse.TaskTemplate>): GetAllTaskTemplatesResponse;
  clearTemplatesList(): GetAllTaskTemplatesResponse;
  addTemplates(value?: GetAllTaskTemplatesResponse.TaskTemplate, index?: number): GetAllTaskTemplatesResponse.TaskTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllTaskTemplatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllTaskTemplatesResponse): GetAllTaskTemplatesResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllTaskTemplatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllTaskTemplatesResponse;
  static deserializeBinaryFromReader(message: GetAllTaskTemplatesResponse, reader: jspb.BinaryReader): GetAllTaskTemplatesResponse;
}

export namespace GetAllTaskTemplatesResponse {
  export type AsObject = {
    templatesList: Array<GetAllTaskTemplatesResponse.TaskTemplate.AsObject>,
  }

  export class TaskTemplate extends jspb.Message {
    getId(): string;
    setId(value: string): TaskTemplate;

    getName(): string;
    setName(value: string): TaskTemplate;

    getDescription(): string;
    setDescription(value: string): TaskTemplate;

    getIsPublic(): boolean;
    setIsPublic(value: boolean): TaskTemplate;

    getUserId(): string;
    setUserId(value: string): TaskTemplate;
    hasUserId(): boolean;
    clearUserId(): TaskTemplate;

    getSubtasksList(): Array<GetAllTaskTemplatesResponse.TaskTemplate.SubTask>;
    setSubtasksList(value: Array<GetAllTaskTemplatesResponse.TaskTemplate.SubTask>): TaskTemplate;
    clearSubtasksList(): TaskTemplate;
    addSubtasks(value?: GetAllTaskTemplatesResponse.TaskTemplate.SubTask, index?: number): GetAllTaskTemplatesResponse.TaskTemplate.SubTask;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskTemplate.AsObject;
    static toObject(includeInstance: boolean, msg: TaskTemplate): TaskTemplate.AsObject;
    static serializeBinaryToWriter(message: TaskTemplate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskTemplate;
    static deserializeBinaryFromReader(message: TaskTemplate, reader: jspb.BinaryReader): TaskTemplate;
  }

  export namespace TaskTemplate {
    export type AsObject = {
      id: string,
      name: string,
      description: string,
      isPublic: boolean,
      userId?: string,
      subtasksList: Array<GetAllTaskTemplatesResponse.TaskTemplate.SubTask.AsObject>,
    }

    export class SubTask extends jspb.Message {
      getId(): string;
      setId(value: string): SubTask;

      getTaskTemplateId(): string;
      setTaskTemplateId(value: string): SubTask;

      getName(): string;
      setName(value: string): SubTask;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SubTask.AsObject;
      static toObject(includeInstance: boolean, msg: SubTask): SubTask.AsObject;
      static serializeBinaryToWriter(message: SubTask, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SubTask;
      static deserializeBinaryFromReader(message: SubTask, reader: jspb.BinaryReader): SubTask;
    }

    export namespace SubTask {
      export type AsObject = {
        id: string,
        taskTemplateId: string,
        name: string,
      }
    }


    export enum UserIdCase { 
      _USER_ID_NOT_SET = 0,
      USER_ID = 6,
    }
  }

}

export class DeleteTaskTemplateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteTaskTemplateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTaskTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTaskTemplateRequest): DeleteTaskTemplateRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTaskTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTaskTemplateRequest;
  static deserializeBinaryFromReader(message: DeleteTaskTemplateRequest, reader: jspb.BinaryReader): DeleteTaskTemplateRequest;
}

export namespace DeleteTaskTemplateRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteTaskTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTaskTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTaskTemplateResponse): DeleteTaskTemplateResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteTaskTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTaskTemplateResponse;
  static deserializeBinaryFromReader(message: DeleteTaskTemplateResponse, reader: jspb.BinaryReader): DeleteTaskTemplateResponse;
}

export namespace DeleteTaskTemplateResponse {
  export type AsObject = {
  }
}

export class DeleteTaskTemplateSubTaskRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteTaskTemplateSubTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTaskTemplateSubTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTaskTemplateSubTaskRequest): DeleteTaskTemplateSubTaskRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTaskTemplateSubTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTaskTemplateSubTaskRequest;
  static deserializeBinaryFromReader(message: DeleteTaskTemplateSubTaskRequest, reader: jspb.BinaryReader): DeleteTaskTemplateSubTaskRequest;
}

export namespace DeleteTaskTemplateSubTaskRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteTaskTemplateSubTaskResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTaskTemplateSubTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTaskTemplateSubTaskResponse): DeleteTaskTemplateSubTaskResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteTaskTemplateSubTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTaskTemplateSubTaskResponse;
  static deserializeBinaryFromReader(message: DeleteTaskTemplateSubTaskResponse, reader: jspb.BinaryReader): DeleteTaskTemplateSubTaskResponse;
}

export namespace DeleteTaskTemplateSubTaskResponse {
  export type AsObject = {
  }
}

export class UpdateTaskTemplateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateTaskTemplateRequest;

  getName(): string;
  setName(value: string): UpdateTaskTemplateRequest;
  hasName(): boolean;
  clearName(): UpdateTaskTemplateRequest;

  getDescription(): string;
  setDescription(value: string): UpdateTaskTemplateRequest;
  hasDescription(): boolean;
  clearDescription(): UpdateTaskTemplateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTaskTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTaskTemplateRequest): UpdateTaskTemplateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTaskTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTaskTemplateRequest;
  static deserializeBinaryFromReader(message: UpdateTaskTemplateRequest, reader: jspb.BinaryReader): UpdateTaskTemplateRequest;
}

export namespace UpdateTaskTemplateRequest {
  export type AsObject = {
    id: string,
    name?: string,
    description?: string,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 2,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 3,
  }
}

export class UpdateTaskTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTaskTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTaskTemplateResponse): UpdateTaskTemplateResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateTaskTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTaskTemplateResponse;
  static deserializeBinaryFromReader(message: UpdateTaskTemplateResponse, reader: jspb.BinaryReader): UpdateTaskTemplateResponse;
}

export namespace UpdateTaskTemplateResponse {
  export type AsObject = {
  }
}

export class UpdateTaskTemplateSubTaskRequest extends jspb.Message {
  getSubtaskId(): string;
  setSubtaskId(value: string): UpdateTaskTemplateSubTaskRequest;

  getName(): string;
  setName(value: string): UpdateTaskTemplateSubTaskRequest;
  hasName(): boolean;
  clearName(): UpdateTaskTemplateSubTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTaskTemplateSubTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTaskTemplateSubTaskRequest): UpdateTaskTemplateSubTaskRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTaskTemplateSubTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTaskTemplateSubTaskRequest;
  static deserializeBinaryFromReader(message: UpdateTaskTemplateSubTaskRequest, reader: jspb.BinaryReader): UpdateTaskTemplateSubTaskRequest;
}

export namespace UpdateTaskTemplateSubTaskRequest {
  export type AsObject = {
    subtaskId: string,
    name?: string,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 2,
  }
}

export class UpdateTaskTemplateSubTaskResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTaskTemplateSubTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTaskTemplateSubTaskResponse): UpdateTaskTemplateSubTaskResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateTaskTemplateSubTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTaskTemplateSubTaskResponse;
  static deserializeBinaryFromReader(message: UpdateTaskTemplateSubTaskResponse, reader: jspb.BinaryReader): UpdateTaskTemplateSubTaskResponse;
}

export namespace UpdateTaskTemplateSubTaskResponse {
  export type AsObject = {
  }
}

export class CreateTaskTemplateSubTaskRequest extends jspb.Message {
  getTaskTemplateId(): string;
  setTaskTemplateId(value: string): CreateTaskTemplateSubTaskRequest;

  getName(): string;
  setName(value: string): CreateTaskTemplateSubTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaskTemplateSubTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaskTemplateSubTaskRequest): CreateTaskTemplateSubTaskRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTaskTemplateSubTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaskTemplateSubTaskRequest;
  static deserializeBinaryFromReader(message: CreateTaskTemplateSubTaskRequest, reader: jspb.BinaryReader): CreateTaskTemplateSubTaskRequest;
}

export namespace CreateTaskTemplateSubTaskRequest {
  export type AsObject = {
    taskTemplateId: string,
    name: string,
  }
}

export class CreateTaskTemplateSubTaskResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateTaskTemplateSubTaskResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaskTemplateSubTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaskTemplateSubTaskResponse): CreateTaskTemplateSubTaskResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTaskTemplateSubTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaskTemplateSubTaskResponse;
  static deserializeBinaryFromReader(message: CreateTaskTemplateSubTaskResponse, reader: jspb.BinaryReader): CreateTaskTemplateSubTaskResponse;
}

export namespace CreateTaskTemplateSubTaskResponse {
  export type AsObject = {
    id: string,
  }
}
