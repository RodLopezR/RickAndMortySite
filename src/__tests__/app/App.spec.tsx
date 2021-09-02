import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../../app/App';
import { MockGetSearchOk } from '../../utils/NockService';

describe('App test', () => {
  test('Render basic site', () => {
    MockGetSearchOk('', '', 1);

    const renderedComponent = render(<App />);
    const divContainer = renderedComponent.container.querySelector('div');
    expect(divContainer).not.toBeNull();
  });
});
