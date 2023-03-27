export type Character = {
  id: Number;
  name: string;
  title: string;
  title: string;
  race: string;
  gender: string;
  description: string;
  biography: string;
  created_at: string;
  images?: Image[];
};

export type Image = {
  id: Number;
  created_at: string;
  imageURL: string;
  character_id?: Number;
  game: string;
  description: string | null;
};
