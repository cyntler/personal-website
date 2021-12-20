import { getMetaTagContentByName } from '../getMetaTagContentByName';

test('return empty string for element that does not exist', () => {
  const result = getMetaTagContentByName('test');

  expect(result).toBe('');
});

test('return valid content value for created element', () => {
  const name = 'test';
  const content = 'Lorem ipsum';

  const metaElement = document.createElement('meta');
  metaElement.setAttribute('name', name);
  metaElement.setAttribute('content', content);
  document.head.appendChild(metaElement);

  const result = getMetaTagContentByName(name);

  expect(result).toBe(content);
});
