export const getMetaTagContentByName = (name: string) => {
  const metaTag = document.querySelector(`meta[name="${name}"]`);

  if (!metaTag) {
    return '';
  }

  return metaTag.getAttribute('content') || '';
};
