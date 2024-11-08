"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsnerController = void 0;
const common_1 = require("@nestjs/common");
const awsner_service_1 = require("./awsner.service");
const create_awsner_dto_1 = require("./dto/create-awsner.dto");
const update_awsner_dto_1 = require("./dto/update-awsner.dto");
let AwsnerController = class AwsnerController {
    constructor(awsnerService) {
        this.awsnerService = awsnerService;
    }
    async create(params) {
        return await this.awsnerService.create(params);
    }
    async update(id_awsner, data) {
        return await this.awsnerService.update({
            where: { id_awsner },
            data: data,
        });
    }
    async delete(id_awsner) {
        return await this.awsnerService.delete({ where: { id_awsner } });
    }
    async findAll() {
        return await this.awsnerService.searchAll();
    }
    async searchOne(id_awsner) {
        return await this.awsnerService.searchOne({ where: { id_awsner } });
    }
};
exports.AwsnerController = AwsnerController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_awsner_dto_1.CreateAwsnerDto]),
    __metadata("design:returntype", Promise)
], AwsnerController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_awsner_dto_1.UpdateAwsnerDto]),
    __metadata("design:returntype", Promise)
], AwsnerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AwsnerController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('search/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AwsnerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AwsnerController.prototype, "searchOne", null);
exports.AwsnerController = AwsnerController = __decorate([
    (0, common_1.Controller)('awsner'),
    __metadata("design:paramtypes", [awsner_service_1.AwsnerService])
], AwsnerController);
//# sourceMappingURL=awsner.controller.js.map