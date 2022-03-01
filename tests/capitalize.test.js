import capitalize from '../code/capitalize';

it('One word', () => {
  expect(capitalize('string')).toBe('String');
})

it('Multile words', () => {
  expect(capitalize('multiple strings')).toBe('Multiple strings')
})

it('Empty string', () => {
  expect(capitalize('')).toBe('');
})

it('Not string', () => {
  expect(capitalize(5)).toBe('');
})