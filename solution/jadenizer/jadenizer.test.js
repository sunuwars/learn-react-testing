import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Jadenizer from './jadenizer.js';

// ensures our document gets cleared out after each test
// so we don't have lots of copies of our component in there
// otherwise our tests might affect each other
afterEach(cleanup);

test('Jadenizer component', () => {
  const { getByText, getByLabelText, getByTestId } = render(<Jadenizer />); // use renderIntoDocument so we have a real document with browser events

  const button = getByText('Jadenize');
  const input = getByLabelText('Enter text for Jadenization');

  fireEvent.change(input, {
    target: { value: `how can mirrors be real if our eyes aren't real` },
  }); // fire the onChange event
  fireEvent.click(button); // fire a real browser event on the submit button

  const output = getByTestId('output');
  expect(output.textContent).toBe(
    `How Can Mirrors Be Real If Our Eyes Aren't Real`
  );
});
