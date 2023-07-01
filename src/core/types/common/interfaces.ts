import multer from 'multer';
import { IncomingHttpHeaders } from 'http';
import { ObjectSchema } from 'joi';
import "express"

export interface ControllerArgs {
    input?: any;
    params?: any;
    query?: any;
    files?:  any | null | undefined; //TODO: come back to work on the types for this.
    user?: TokenUser | undefined | null; //TODO: add mongoose user.
    headers?: IncomingHttpHeaders,
}

export interface ValidationSchema {
  inputSchema?: ObjectSchema;
  paramsSchema?: ObjectSchema;
  querySchema?: ObjectSchema;
}

export interface TokenUser {
    id: string;
    role: string;
}


export interface IEMAIL {
  fileName: string;
  data: Record<any, unknown>;
  email: string;
  subject?: string;
  attachments?: Array<string>
}