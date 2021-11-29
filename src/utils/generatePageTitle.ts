import { APP_NAME } from '~/constants';

export const generatePageTitle = (titleName?: string) =>
  `${APP_NAME} ${titleName ? `— ${titleName}` : ''}`.trim();
