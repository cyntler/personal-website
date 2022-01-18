export const getHost = () => {
  if (typeof window !== 'undefined') {
    return window.location.host;
  }

  return '';
};
