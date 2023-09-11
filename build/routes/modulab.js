"use strict";
/*
    Prefix: /modulab
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const modulab_1 = require("../controllers/modulab");
const router = (0, express_1.Router)();
router.get('/', modulab_1.testingEndPoint);
exports.default = router;
