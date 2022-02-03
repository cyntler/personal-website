export const arrayToStaticPaths = (strings: string[], pathPrefix?: string) =>
  strings.map((str) => `${pathPrefix ? `${pathPrefix}/` : ''}${str}`);
