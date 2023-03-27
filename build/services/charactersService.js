"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.allCharacters = void 0;
const db_1 = __importDefault(require("../db/db"));
const allCharacters = () => {
    return db_1.default.query("SELECT * FROM characters");
};
exports.allCharacters = allCharacters;
const findById = (characterId) => {
    return db_1.default.query("SELECT * FROM characters WHERE id = $1", [characterId]);
};
exports.findById = findById;
