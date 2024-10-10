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
exports.QuestionController = void 0;
const common_1 = require("@nestjs/common");
const question_service_1 = require("./question.service");
const create_question_dto_1 = require("./dto/create-question.dto");
const update_question_dto_1 = require("./dto/update-question.dto");
const common_2 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const role_guard_1 = require("../auth/role.guard");
const role_decorator_1 = require("../auth/role.decorator");
const role_enum_1 = require("../auth/role.enum");
let QuestionController = class QuestionController {
    constructor(questionsService) {
        this.questionsService = questionsService;
    }
    async create(params) {
        return await this.questionsService.create(params);
    }
    async update(id_question, updateQuestionDto) {
        return await this.questionsService.update(id_question, updateQuestionDto);
    }
    async delete(id_question) {
        return await this.questionsService.delete({ where: { id_question } });
    }
    async findAll() {
        return await this.questionsService.searchAll();
    }
    async searchOne(id_question) {
        return await this.questionsService.searchOne({ where: { id_question } });
    }
};
exports.QuestionController = QuestionController;
__decorate([
    (0, common_1.Post)('register'),
    (0, role_decorator_1.Roles)(role_enum_1.Role.Admin, role_enum_1.Role.User),
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_question_dto_1.CreateQuestionDto]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    (0, role_decorator_1.Roles)(role_enum_1.Role.Admin, role_enum_1.Role.User),
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_question_dto_1.UpdateQuestionDto]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, role_decorator_1.Roles)(role_enum_1.Role.Admin, role_enum_1.Role.User),
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('search/all'),
    (0, role_decorator_1.Roles)(role_enum_1.Role.Admin, role_enum_1.Role.User),
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search/:id'),
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)(role_enum_1.Role.Admin, role_enum_1.Role.User),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "searchOne", null);
exports.QuestionController = QuestionController = __decorate([
    (0, common_1.Controller)('question'),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], QuestionController);
//# sourceMappingURL=question.controller.js.map