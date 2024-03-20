import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Request, Response } from 'express';
import { ErrorResponse } from "src/response/ApiResponse";

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = exception.status;

        response
            .status(status)
            .json(new ErrorResponse(status,exception.message,exception.response));
    }

}