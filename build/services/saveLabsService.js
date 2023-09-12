"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let dir_xml_files = path_1.default.join(__dirname, '../../wsdl');
const poServiceXml = fs_1.default.readFileSync(path_1.default.join(dir_xml_files, 'saveLabs.wsdl'), 'utf-8');
const saveLabsService = {
    SaveLabsService: {
        SaveLabsServiceSoapPort: {
            SaveLabs: function (args) {
                console.log(args);
                return {
                    result: `Hello`
                };
            }
        },
        SaveLabsServiceSoap12Port: {
            SaveLabs: function (args) {
                return {
                    result: `Hello`
                };
            }
        }
    }
};
exports.default = {
    xml: poServiceXml,
    service: saveLabsService
};
