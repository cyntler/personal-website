import { FunctionComponent } from 'react';
import Link from 'next/link';

import { APP_LOGO_ALT } from '~/constants';
import { StyledLogoImage } from './Logo.style';

interface LogoProps {
  size?: number;
  asLink?: string;
}

export const Logo: FunctionComponent<LogoProps> = ({ size, asLink }) => {
  const renderLogo = (
    <StyledLogoImage
      src="/logo.svg"
      alt={APP_LOGO_ALT}
      width={size}
      height={size}
    />
  );

  if (asLink) {
    return (
      <Link href={asLink}>
        <a>{renderLogo}</a>
      </Link>
    );
  }

  return renderLogo;
};

Logo.defaultProps = {
  size: 40,
};
