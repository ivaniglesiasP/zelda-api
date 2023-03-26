import { Request, Response } from "express";
import client from "../db/db";

export const getCharacters = async (_req: Request, res: Response) => {
  const response = await client.query("SELECT * FROM characters");

  res.json(response.rows);
};

export const getCharacterById = async (req: Request, res: Response) => {
  const response = await client.query("SELECT * FROM characters WHERE id = $1", [req.params.characterId]);
  const character = response.rows;
  if (req.query.images) {
    const imagesQueryResponse = await client.query("SELECT * FROM images WHERE character_id = $1", [
      req.params.characterId,
    ]);
    const characterWihtImages = { ...character, images: imagesQueryResponse.rows };
    res.json(characterWihtImages);
  } else {
    res.json(character);
  }
};

export const getImagesByCharacterId = async (req: Request, res: Response) => {
  const response = await client.query("SELECT * FROM images WHERE character_id = $1", [req.params.characterId]);

  res.json(response.rows);
};
