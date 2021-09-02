import {
  fireEvent,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import CharacterListView from '../../components/CharacterListView';
import { MockGetSearchOk } from '../../utils/NockService';

test('Render with search', () => {
  const props = {
    service: {
      info: {
        count: 1,
        pages: 1,
        next: null,
        prev: null,
      },
      results: [
        {
          id: 1,
          name: 'string',
          status: 'string',
          species: 'string',
          image: 'string',
          type: 'string',
          gender: 'string',
          url: 'string',
          origin: { name: '', url: '' },
          location: { name: '', url: '' },
        },
      ],
    },
    changePage: jest.fn(),
    page: 1,
  };

  const renderedComponent = render(<CharacterListView {...props} />);
  const divContainer = renderedComponent.container.querySelector('div');
  const buttonPage = renderedComponent.container.querySelector(
    '.MuiPaginationItem-page'
  );

  if (buttonPage) {
    fireEvent.click(buttonPage);
  }

  expect(buttonPage).not.toBeNull();
  expect(divContainer).not.toBeNull();
  expect(props.changePage).toHaveBeenCalled();
});
