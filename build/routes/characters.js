"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const characterFacade_1 = require("../services/characterFacade");
const router = express_1.default.Router();
router.get("/", (_req, res) => {
    res.status(200).json((0, characterFacade_1.getCharacters)());
});
router.get("/:characterId", (req, res) => {
    const includeImages = req.query.images ? true : false;
    const { characterId } = req.params;
    const character = (0, characterFacade_1.findCharacterById)(characterId, includeImages);
    if (!character)
        return res.status(404).send("Character not found");
    return res.status(200).json(character);
});
router.get("/images/:characterId");
exports.default = router;
