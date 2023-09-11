"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingEndPoint = void 0;
const testingEndPoint = (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            msg: 'Ok'
        });
    }
    catch (err) {
        res.status(500).json({
            ok: false,
            msg: 'Contacta al devops'
        });
    }
};
exports.testingEndPoint = testingEndPoint;
