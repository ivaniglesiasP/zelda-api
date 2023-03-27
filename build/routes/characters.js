"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const characterFacade_1 = require("../services/characterFacade");
const router = express_1.default.Router();
router.get('/', characterFacade_1.getCharacters);
router.get('/:characterId', characterFacade_1.findCharacterById);
router.get('/images/:characterId');
exports.default = router;
