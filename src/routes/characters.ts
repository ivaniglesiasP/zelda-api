import { Router } from "express";
import { findCharacterById, getCharacters, getImagesByCharacterId } from "../services/characterFacade";
import { Character, Image } from "../types";

const router = Router();

router.get("/", async (_req, res) => {
  const characters: Character[] = await getCharacters();
  res.status(200).json(characters);
});

router.get("/:characterId", async (req, res) => {
  const includeImages = req.query.images === "true";
  const { characterId } = req.params;
  const character: Character = await findCharacterById(characterId, includeImages);

  if (!character) return res.status(404).send("Character not found");

  return res.status(200).json(character);
});

router.get("/images/:characterId", async (req, res) => {
  const { characterId } = req.params;
  const images: Image[] = await getImagesByCharacterId(characterId);

  if (!images) return res.status(404).send("Character not found");

  return res.status(200).json(images);
});

export default router;
