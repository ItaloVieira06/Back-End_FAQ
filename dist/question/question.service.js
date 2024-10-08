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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let QuestionService = class QuestionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(params) {
        return await this.prisma.questions.create({ data: params });
    }
    async update(id_question, updateQuestionDto) {
        return await this.prisma.questions.update({
            where: { id_question },
            data: updateQuestionDto,
        });
    }
    async delete(params) {
        const { where } = params;
        return await this.prisma.questions.delete({
            where,
        });
    }
    async searchOne(params) {
        const { where } = params;
        return await this.prisma.questions.findUnique({
            where,
        });
    }
    async searchAll() {
        return await this.prisma.questions.findMany();
    }
};
exports.QuestionService = QuestionService;
exports.QuestionService = QuestionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], QuestionService);
//# sourceMappingURL=question.service.js.map