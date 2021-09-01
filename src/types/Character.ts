export interface ObjectBase {
  name: string;
  url: string;
}

interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  url: string;
  origin: ObjectBase;
  location: ObjectBase;
}

export default CharacterType;
