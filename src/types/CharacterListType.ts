import CharacterType from './Character';

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface CharacterListType {
  info: Info;
  results: CharacterType[];
}

export default CharacterListType;
