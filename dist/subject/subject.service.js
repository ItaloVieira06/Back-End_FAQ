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
exports.SubjectService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let SubjectService = class SubjectService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(params) {
        return await this.prisma.subjects.create({ data: params });
    }
    async update(params) {
        const { where, data } = params;
        return await this.prisma.subjects.update({
            where,
            data,
        });
    }
    async delete(params) {
        const { where } = params;
        return await this.prisma.subjects.delete({
            where,
        });
    }
    async searchOne(params) {
        const { where } = params;
        return await this.prisma.subjects.findUnique({
            where,
        });
    }
    async searchAll() {
        return await this.prisma.subjects.findMany();
    }
};
exports.SubjectService = SubjectService;
exports.SubjectService = SubjectService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SubjectService);
//# sourceMappingURL=subject.service.js.map