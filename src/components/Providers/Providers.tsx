import { FunctionComponent } from 'react';

import { PropsWithChildrenOnly } from '~/constants';

export const Providers: FunctionComponent<PropsWithChildrenOnly> = ({
  children,
}) => <div>{children}</div>;
