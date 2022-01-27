import { FunctionComponent } from 'react';
import Link from 'next/link';

import { APP_LOGO_ALT, APP_LOGO_IMG_SRC } from '~/constants';
import { LogoImage } from './Logo.style';

interface LogoProps {
  size?: number;
  asLink?: string;
}

export const Logo: FunctionComponent<LogoProps> = ({ size, asLink }) => {
  const renderLogo = (
    <LogoImage
      src={APP_LOGO_IMG_SRC}
      alt={APP_LOGO_ALT}
      width={size}
      height={size}
    />
  );

  if (asLink) {
    return (
      <Link href={asLink}>
        <a href={asLink}>{renderLogo}</a>
      </Link>
    );
  }

  return renderLogo;
};

Logo.defaultProps = {
  size: 30,
};
