import express from "express";
import { getCharacters, getImagesByCharacterId } from "../services/charactersService";

const router = express.Router();

router.get('/', getCharacters);
router.get('/images', getImagesByCharacterId);

export default router