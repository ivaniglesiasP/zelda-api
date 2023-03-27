"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllImagesByCharacterId = void 0;
const db_1 = __importDefault(require("../db/db"));
const AllImagesByCharacterId = (characterId) => {
    return db_1.default.query("SELECT * FROM images WHERE character_id = $1", [characterId]);
};
exports.AllImagesByCharacterId = AllImagesByCharacterId;
