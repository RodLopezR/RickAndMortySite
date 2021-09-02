import nock from 'nock';
import SearchServiceMock from './SearchMock';

export const MockGetSearchOk = (name: string, status: string, page: number) => {
  nock('https://api.themoviedb.org/3/search')
    .get(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${name}&status=${status}`
    )
    .reply(200, SearchServiceMock, { 'Access-Control-Allow-Origin': '*' });
};

export const MockGetSearchError = (name: string, status: string, page: number) => {
  nock('https://api.themoviedb.org/3/search')
    .get(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${name}&status=${status}`
    )
    .reply(500, SearchServiceMock, { 'Access-Control-Allow-Origin': '*' });
};

export const MockGetSearchBadFormat = (name: string, status: string, page: number) => {
  nock('https://api.themoviedb.org/3/search')
    .get(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${name}&status=${status}`
    )
    .reply(200, "", { 'Access-Control-Allow-Origin': '*' });
};
