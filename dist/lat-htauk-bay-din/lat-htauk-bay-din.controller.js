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
exports.LatHtaukBayDinController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const lat_htauk_bay_din_service_1 = require("./lat-htauk-bay-din.service");
let LatHtaukBayDinController = class LatHtaukBayDinController {
    constructor(latHtaukBayDinService) {
        this.latHtaukBayDinService = latHtaukBayDinService;
    }
    getAllQuestions(res) {
        res.status(common_1.HttpStatus.OK).json({
            message: 'success',
            data: this.latHtaukBayDinService.getAllQuestions(),
        });
    }
    getNumberList(res) {
        res.status(common_1.HttpStatus.OK).json({
            message: 'success',
            data: this.latHtaukBayDinService.getNumberLists(),
        });
    }
    getAnswer(questionNo, answerNo, res) {
        const answer = this.latHtaukBayDinService.getAnswer(questionNo, answerNo);
        if (!answer)
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'not-found',
            });
        res.status(common_1.HttpStatus.OK).json({
            message: 'success',
            data: answer,
        });
    }
};
exports.LatHtaukBayDinController = LatHtaukBayDinController;
__decorate([
    (0, common_1.Get)('questions'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LatHtaukBayDinController.prototype, "getAllQuestions", null);
__decorate([
    (0, common_1.Get)('number-list'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LatHtaukBayDinController.prototype, "getNumberList", null);
__decorate([
    (0, common_1.Get)('answer/:questionNo/:answerNo'),
    __param(0, (0, common_1.Param)('questionNo')),
    __param(1, (0, common_1.Param)('answerNo')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", void 0)
], LatHtaukBayDinController.prototype, "getAnswer", null);
exports.LatHtaukBayDinController = LatHtaukBayDinController = __decorate([
    (0, swagger_1.ApiTags)('lat-htauk-bay-din'),
    (0, common_1.Controller)('lat-htauk-bay-din'),
    __metadata("design:paramtypes", [lat_htauk_bay_din_service_1.LatHtaukBayDinService])
], LatHtaukBayDinController);
//# sourceMappingURL=lat-htauk-bay-din.controller.js.map