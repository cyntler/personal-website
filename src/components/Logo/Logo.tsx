import { Link } from 'next-locales';
import { FunctionComponent } from 'react';

import { APP_LOGO_ALT, APP_LOGO_IMG_SRC } from '~/constants';

interface LogoProps {
  asLink?: string;
}

export const Logo: FunctionComponent<LogoProps> = ({ asLink }) => {
  const renderLogo = (
    <img src={APP_LOGO_IMG_SRC} alt={APP_LOGO_ALT} className="block w-9 h-9" />
  );

  if (asLink) {
    return <Link href={asLink}>{renderLogo}</Link>;
  }

  return renderLogo;
};
