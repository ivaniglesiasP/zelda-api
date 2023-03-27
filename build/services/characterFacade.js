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
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCharacterById = exports.getCharacters = void 0;
const charactersService_1 = require("./charactersService");
const imagesService_1 = require("./imagesService");
const getCharacters = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, charactersService_1.allCharacters)();
    res.json(response.rows);
});
exports.getCharacters = getCharacters;
const findCharacterById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, charactersService_1.findById)(req.params.characterId);
    const character = response.rows[0];
    if (req.query.images) {
        const imagesQueryResponse = yield (0, imagesService_1.AllImagesByCharacterId)(req.params.characterId);
        const images = imagesQueryResponse.rows;
        const characterWihtImages = Object.assign(Object.assign({}, character), { images: images });
        res.json(characterWihtImages);
    }
    else {
        res.json(character);
    }
});
exports.findCharacterById = findCharacterById;
