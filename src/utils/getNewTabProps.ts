import { AnchorHTMLAttributes } from 'react';

export const getNewTabProps = (
  href: string,
): AnchorHTMLAttributes<HTMLAnchorElement> => ({
  ...(href.includes('http') && {
    target: '_blank',
    rel: 'noopener noreferrer',
  }),
});
