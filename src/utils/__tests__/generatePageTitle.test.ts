import { generatePageTitle } from '../generatePageTitle';

test('returns valid title without name parameter', () => {
  const result = generatePageTitle();

  expect(result).toBe('Dc');
});

test('returns valid title with name parameter', () => {
  const name = 'Test';

  const result = generatePageTitle(name);

  expect(result).toBe('Dc — Test');
});
