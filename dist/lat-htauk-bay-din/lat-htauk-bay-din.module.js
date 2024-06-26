"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatHtaukBayDinModule = void 0;
const common_1 = require("@nestjs/common");
const lat_htauk_bay_din_controller_1 = require("./lat-htauk-bay-din.controller");
const lat_htauk_bay_din_service_1 = require("./lat-htauk-bay-din.service");
let LatHtaukBayDinModule = class LatHtaukBayDinModule {
};
exports.LatHtaukBayDinModule = LatHtaukBayDinModule;
exports.LatHtaukBayDinModule = LatHtaukBayDinModule = __decorate([
    (0, common_1.Module)({
        controllers: [lat_htauk_bay_din_controller_1.LatHtaukBayDinController],
        providers: [lat_htauk_bay_din_service_1.LatHtaukBayDinService],
    })
], LatHtaukBayDinModule);
//# sourceMappingURL=lat-htauk-bay-din.module.js.map