"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsnerModule = void 0;
const common_1 = require("@nestjs/common");
const awsner_service_1 = require("./awsner.service");
const awsner_controller_1 = require("./awsner.controller");
const database_module_1 = require("../database/database.module");
let AwsnerModule = class AwsnerModule {
};
exports.AwsnerModule = AwsnerModule;
exports.AwsnerModule = AwsnerModule = __decorate([
    (0, common_1.Module)({
        controllers: [awsner_controller_1.AwsnerController],
        providers: [awsner_service_1.AwsnerService],
        imports: [database_module_1.DatabaseModule],
    })
], AwsnerModule);
//# sourceMappingURL=awsner.module.js.map