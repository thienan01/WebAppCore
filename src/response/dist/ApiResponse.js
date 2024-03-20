"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ErrorResponse = exports.SuccessResponse = exports.ApiResponse = void 0;
var ApiResponse = /** @class */ (function () {
    function ApiResponse(status_code, message) {
        this.status_code = status_code;
        this.message = message;
    }
    return ApiResponse;
}());
exports.ApiResponse = ApiResponse;
var SuccessResponse = /** @class */ (function (_super) {
    __extends(SuccessResponse, _super);
    function SuccessResponse(status_code, message, data) {
        var _this = _super.call(this, status_code, message) || this;
        _this.data = data;
        return _this;
    }
    return SuccessResponse;
}(ApiResponse));
exports.SuccessResponse = SuccessResponse;
var ErrorResponse = /** @class */ (function (_super) {
    __extends(ErrorResponse, _super);
    function ErrorResponse(status_code, message, error_detail) {
        var _this = _super.call(this, status_code, message) || this;
        _this.error_detail = error_detail;
        return _this;
    }
    return ErrorResponse;
}(ApiResponse));
exports.ErrorResponse = ErrorResponse;
