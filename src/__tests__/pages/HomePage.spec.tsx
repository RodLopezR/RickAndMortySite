import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import HomePage from '../../pages/HomePage';
import { MockGetSearchOk } from '../../utils/NockService';

describe('App test', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });
  test('Render basic site', async () => {
    MockGetSearchOk('', '', 1);

    await act(async () => {
      const { getByText } = render(<HomePage />);

      expect(getByText('Cargando resultados')).not.toBeNull();

      // /await waitForElementToBeRemoved(() => getByText('Cargando resultados'));
    });
  });
});
