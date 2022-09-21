import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import App from './App.jsx';

describe('Home page', () => {
  test('Should render title screen', () => {
    const el = render(<App />);

    const titleElement = el.getByText('Hello world :)');

    expect(titleElement).toBeInTheDocument();
  });
});
