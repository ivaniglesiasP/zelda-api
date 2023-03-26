import express from "express";
import { getCharacterById, getCharacters, getImagesByCharacterId } from "../services/charactersService";

const router = express.Router();

router.get('/', getCharacters);
router.get('/:characterId', getCharacterById);
router.get('/images/:characterId', getImagesByCharacterId);

export default router