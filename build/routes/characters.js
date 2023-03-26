"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const charactersService_1 = require("../services/charactersService");
const router = express_1.default.Router();
router.get('/', charactersService_1.getCharacters);
router.get('/images', charactersService_1.getImagesByCharacterId);
exports.default = router;
