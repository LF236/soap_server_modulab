"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64_decode = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const base64_decode = (base64, extension) => {
    const bitMap = new Buffer(base64, 'base64');
    const ruta = path_1.default.join(__dirname, '../../files');
    fs_1.default.writeFileSync(`${ruta}/${new Date()}.${extension}`, bitMap);
};
exports.base64_decode = base64_decode;
