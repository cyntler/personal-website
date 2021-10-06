import { generatePageTitle } from '../generatePageTitle';

describe('utils/generatePageTitle', () => {
  it('returns valid title without name parameter', () => {
    const result = generatePageTitle();

    expect(result).toBe('Dc');
  });
});
