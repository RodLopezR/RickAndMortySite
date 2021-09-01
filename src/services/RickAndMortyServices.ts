import axios from 'axios';
import CharacterType from '../types/Character';
import CharacterListType from '../types/CharacterListType';

export const GetCharactersService = async (
  query: string,
  page: number = 1
): Promise<CharacterListType> => {
  const oAxiosResponse = await axios.get(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );

  if (
    oAxiosResponse.status !== 200 ||
    !oAxiosResponse ||
    !oAxiosResponse.data ||
    !oAxiosResponse.data.info ||
    !oAxiosResponse.data.results
  ) {
    throw new Error('El formato de respuesta no es el esperado');
  }

  const oResult: CharacterListType = {
    info: oAxiosResponse.data.info,
    results: oAxiosResponse.data.results,
  };

  return oResult;
};

export const GetCharacterByIdService = async (
  id: number
): Promise<CharacterType> => {
  const oAxiosResponse = await axios.get(
    `https://rickandmortyapi.com/api/character/${String(id)}`
  );

  if (
    oAxiosResponse.status !== 200 ||
    !oAxiosResponse ||
    !oAxiosResponse.data
  ) {
    throw new Error('El formato de respuesta no es el esperado');
  }

  const oResult: CharacterType = oAxiosResponse.data;
  return oResult;
};
