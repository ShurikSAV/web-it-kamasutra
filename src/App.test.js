import { render, screen } from '@testing-library/react';
import App from './App';

test('test +',() => {
  const a = 10
  const b = 11

  const res = a + b

  expect(res).toBe(21)
})