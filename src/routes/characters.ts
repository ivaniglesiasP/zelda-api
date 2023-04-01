import express from "express";
import { findCharacterById, getCharacters } from "../services/characterFacade";

const router = express.Router();

router.get("/", async (_req, res) => {
  const response = await getCharacters();
  res.status(200).json(response);
});

router.get("/:characterId", async (req, res) => {
  const includeImages = req.query.images ? true : false;
  const { characterId } = req.params;
  const character = await findCharacterById(characterId, includeImages);

  if (!character) return res.status(404).send("Character not found");

  return res.status(200).json(character);
});

export default router;
