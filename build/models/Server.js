"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const fs_1 = __importDefault(require("fs"));
const https_1 = require("https");
const modulab_1 = __importDefault(require("../routes/modulab"));
const poservice_1 = __importDefault(require("../services/poservice"));
const saveLabsService_1 = __importDefault(require("../services/saveLabsService"));
const soap = require('soap');
class Servidor {
    constructor() {
        this.app = (0, express_1.default)();
        // this.soapServer = new Server();
        this.port = parseInt(`${process.env.PORT}`);
        this.server = process.env.ENVIRONMENT == 'productivo'
            ? (0, https_1.createServer)({
                cert: fs_1.default.readFileSync('/cert/ssaver.gob.mx.crt'),
                key: fs_1.default.readFileSync('/cert/ssaver.gob.mx.key')
            }, this.app) : http_1.default.createServer(this.app);
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use(body_parser_1.default.raw({ type: function () { return true; }, limit: '5mb' }));
        this.app.use('/modulab', modulab_1.default);
    }
    execute() {
        this.middlewares();
        this.server.listen(this.port, () => {
            process.env.ENVIRONMENT == 'productivo'
                ? console.log(`Server Settings ready in https://modulab.ssaver.gob.mx:${this.port}`.america)
                : console.log(`Server Settings ready in http://localhost:${this.port}`.rainbow);
        });
        // console.log( soap );
        soap.listen(this.server, '/sayHello', poservice_1.default.service, poservice_1.default.xml, (e) => {
        });
        soap.listen(this.server, '/saveLabs', saveLabsService_1.default.service, saveLabsService_1.default.xml, (e) => {
        });
    }
}
exports.default = Servidor;
