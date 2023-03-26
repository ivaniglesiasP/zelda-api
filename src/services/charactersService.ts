import { Request, Response } from "express";
import client from "../db/db";

export const getCharacters = async (_req: Request, res: Response) => {
  const response = await client.query("SELECT * FROM characters");

  res.json(response.rows);
};

export const getImagesByCharacterId = async (req: Request, res: Response) => {
  const response = await client.query("SELECT * FROM images WHERE character_id = $1", [req.query.characterId]);

  res.json(response.rows);
};
