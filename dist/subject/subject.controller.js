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
exports.SubjectController = void 0;
const common_1 = require("@nestjs/common");
const subject_service_1 = require("./subject.service");
const create_subject_dto_1 = require("./dto/create-subject.dto");
const update_awsner_dto_1 = require("../awsner/dto/update-awsner.dto");
const common_2 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const role_guard_1 = require("../auth/role.guard");
const role_decorator_1 = require("../auth/role.decorator");
const role_enum_1 = require("../auth/role.enum");
let SubjectController = class SubjectController {
    constructor(subjectService) {
        this.subjectService = subjectService;
    }
    async create(params) {
        return await this.subjectService.create(params);
    }
    async update(id_subject, data) {
        return await this.subjectService.update({
            where: { id_subject },
            data: data,
        });
    }
    async delete(id_subject) {
        return await this.subjectService.delete({ where: { id_subject } });
    }
    async findAll() {
        return await this.subjectService.searchAll();
    }
    async searchOne(id_subject) {
        return await this.subjectService.searchOne({ where: { id_subject } });
    }
};
exports.SubjectController = SubjectController;
__decorate([
    (0, common_1.Post)('register'),
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)(role_enum_1.Role.Admin),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_subject_dto_1.CreateSubjectDto]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)(role_enum_1.Role.Admin),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_awsner_dto_1.UpdateAwsnerDto]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)(role_enum_1.Role.Admin),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('search/all'),
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)(role_enum_1.Role.Admin),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search/:id'),
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)(role_enum_1.Role.Admin),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "searchOne", null);
exports.SubjectController = SubjectController = __decorate([
    (0, common_1.Controller)('subject'),
    __metadata("design:paramtypes", [subject_service_1.SubjectService])
], SubjectController);
//# sourceMappingURL=subject.controller.js.map