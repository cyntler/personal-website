import { APP_NAME } from '~/constants';
import { generatePageTitle } from '../generatePageTitle';

test('returns valid title without name parameter', () => {
  const result = generatePageTitle();

  expect(result).toBe(APP_NAME);
});

test('returns valid title with name parameter', () => {
  const name = 'Test';

  const result = generatePageTitle(name);

  expect(result).toBe(`${APP_NAME} — Test`);
});
