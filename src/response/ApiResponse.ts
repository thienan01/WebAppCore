export class ApiResponse {
    constructor(status_code: number, message: string) {
        this.status_code = status_code
        this.message = message
    }
    status_code: number;
    message: string;
}

export class SuccessResponse extends ApiResponse {
    constructor(status_code: number, message: string, data: any) {
        super(status_code, message);
        this.data = data
    }
    data: any;

}

export class ErrorResponse extends ApiResponse {
    constructor(status_code: number, message: string, error_detail: any) {
        super(status_code, message);
        this.error_detail = error_detail
    }
    error_detail: any;
}