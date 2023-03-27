import client from "../db/db";

export const allCharacters = () => {
  return client.query("SELECT * FROM characters");
};

export const findById = (characterId: string) => {
  return client.query("SELECT * FROM characters WHERE id = $1", [characterId]);
};
