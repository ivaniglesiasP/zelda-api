import client from "../db/db";

export const AllImagesByCharacterId = (characterId: string) => {
  return client.query("SELECT * FROM images WHERE character_id = $1", [characterId]);
};
