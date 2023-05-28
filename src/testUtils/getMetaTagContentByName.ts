export const getMetaTagContentByName = (name: string) =>
  document.querySelector(`meta[name="${name}"]`)?.getAttribute('content') ?? '';
