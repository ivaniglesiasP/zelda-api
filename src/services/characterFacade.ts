import { QueryResult } from "pg";
import { Request, Response } from "express";
import { findById, allCharacters } from "./charactersService";
import { AllImagesByCharacterId } from "./imagesService";
import { Character, Image } from "../types";

export const getCharacters = async (_req: Request, res: Response) => {
  const response: QueryResult<Character[]> = await allCharacters();

  res.json(response.rows);
};

export const findCharacterById = async (req: Request, res: Response) => {
  const response: QueryResult<Character> = await findById(req.params.characterId);
  const character: Character = response.rows[0];
  if (req.query.images) {
    const imagesQueryResponse:QueryResult<Image> = await AllImagesByCharacterId(req.params.characterId);
    const images: Image[] = imagesQueryResponse.rows;
    const characterWihtImages: Character = { ...character, images: images };
    res.json(characterWihtImages);
  } else {
    res.json(character);
  }
};
