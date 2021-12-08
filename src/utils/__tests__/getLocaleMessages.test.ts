import { getLocaleMessages } from '../getLocaleMessages';

test('return object with locale messages', () => {
  expect(getLocaleMessages()).toBeInstanceOf(Object);
});
