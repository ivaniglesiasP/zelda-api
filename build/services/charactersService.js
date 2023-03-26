"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImagesByCharacterId = exports.getCharacterById = exports.getCharacters = void 0;
const db_1 = __importDefault(require("../db/db"));
const getCharacters = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield db_1.default.query("SELECT * FROM characters");
    res.json(response.rows);
});
exports.getCharacters = getCharacters;
const getCharacterById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield db_1.default.query("SELECT * FROM characters WHERE id = $1", [req.params.characterId]);
    const character = response.rows;
    if (req.query.images) {
        const imagesQueryResponse = yield db_1.default.query("SELECT * FROM images WHERE character_id = $1", [
            req.params.characterId,
        ]);
        const characterWihtImages = Object.assign(Object.assign({}, character), { images: imagesQueryResponse.rows });
        res.json(characterWihtImages);
    }
    else {
        res.json(character);
    }
});
exports.getCharacterById = getCharacterById;
const getImagesByCharacterId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield db_1.default.query("SELECT * FROM images WHERE character_id = $1", [req.params.characterId]);
    res.json(response.rows);
});
exports.getImagesByCharacterId = getImagesByCharacterId;
