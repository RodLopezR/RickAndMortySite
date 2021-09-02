import axios from 'axios';
import CharacterListType from '../types/CharacterListType';

export const GetCharactersService = async ({
  name = '',
  status = '',
  page = 1,
} = {}): Promise<CharacterListType> => {
  const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${name}&status=${status}`;
  const oAxiosResponse = await axios.get(url);

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
