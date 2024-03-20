"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid")
    ], User.prototype, "id");
    __decorate([
        typeorm_1.Column({ unique: true }),
        class_validator_1.MinLength(6)
    ], User.prototype, "username");
    __decorate([
        typeorm_1.Column(),
        class_transformer_1.Exclude({ toPlainOnly: true })
    ], User.prototype, "password");
    User = __decorate([
        typeorm_1.Entity({ name: 'users' })
    ], User);
    return User;
}());
exports.User = User;
