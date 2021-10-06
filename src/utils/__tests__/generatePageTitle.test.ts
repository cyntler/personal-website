import { generatePageTitle } from '../generatePageTitle';

describe('utils/generatePageTitle', () => {
  it('returns valid title without name parameter', () => {
    const result = generatePageTitle();

    expect(result).toBe('Dc');
  });

  it('returns valid title with name parameter', () => {
    const name = 'Test';

    const result = generatePageTitle(name);

    expect(result).toBe('Dc — Test');
  });
});
