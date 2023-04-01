import { QueryResult } from "pg";
import { findById, allCharacters } from "./charactersService";
import { AllImagesByCharacterId } from "./imagesService";
import { Character, Image } from "../types";

export const getCharacters = async () => {
  const response: QueryResult<Character[]> = await allCharacters();
  return response.rows;
};

export const findCharacterById = async (id: string, shouldIncludeImages: boolean) => {
  const response: QueryResult<Character> = await findById(id);
  const character: Character = response.rows[0];
  if (shouldIncludeImages) {
    const imagesQueryResponse: QueryResult<Image> = await AllImagesByCharacterId(id);
    const images: Image[] = imagesQueryResponse.rows;
    const characterWihtImages: Character = { ...character, images: images };
    return characterWihtImages;
  } else {
    return character;
  }
};
