import { GetCharactersService } from '../../services/RickAndMortyServices';
import {
  MockGetSearchBadFormat,
  MockGetSearchError,
  MockGetSearchOk,
} from '../../utils/NockService';

describe('Services tests', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });
  test('SearchMovieService', async () => {
    const query = 'Megaman';
    MockGetSearchOk('', '', 1);

    const oResponse = await GetCharactersService({
      name: '',
      status: '',
      page: 1,
    });
    expect(oResponse).not.toBeNull();
    expect(oResponse.info).not.toBeNull();
    expect(oResponse.results).not.toBeNull();
    expect(oResponse.results.length).not.toBe(0);
  });
  test('SearchMovieService with server error', async () => {
    const query = 'Megaman';
    MockGetSearchError('', '', 1);

    const oResponse = await GetCharactersService();
    expect(oResponse).not.toBeNull();
    expect(oResponse.info).not.toBeNull();
    expect(oResponse.results).not.toBeNull();
    expect(oResponse.results.length).not.toBe(0);
  });
  test('SearchMovieService with bad format', async () => {
    const query = 'Megaman';
    MockGetSearchBadFormat('', '', 1);

    const oResponse = await GetCharactersService();
    expect(oResponse).not.toBeNull();
    expect(oResponse.info).not.toBeNull();
    expect(oResponse.results).not.toBeNull();
    expect(oResponse.results.length).not.toBe(0);
  });
});
