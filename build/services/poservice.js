"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let dir_xml_files = path_1.default.join(__dirname, '../../wsdl');
const poServiceXml = fs_1.default.readFileSync(path_1.default.join(dir_xml_files, 'helloTesting.wsdl'), 'utf-8');
const poService = {
    MessageSplitterService: {
        MessageSplitterServiceSoapPort: {
            MessageSplitter: function (args) {
                const name = args.message;
                console.log(args);
                return {
                    result: `Hello ${name}`
                };
            }
        },
        MessageSplitterServiceSoap12Port: {
            MessageSplitter: function (args) {
                const name = args.message;
                return {
                    result: `Hello ${name}`
                };
            }
        }
    }
};
exports.default = {
    xml: poServiceXml,
    service: poService
};
