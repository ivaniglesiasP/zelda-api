import express from "express";
import { findCharacterById, getCharacters } from "../services/characterFacade";


const router = express.Router();

router.get('/',getCharacters );
router.get('/:characterId', findCharacterById);
router.get('/images/:characterId', );

export default router