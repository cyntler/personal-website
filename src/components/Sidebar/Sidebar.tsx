import { Link, useTranslation } from 'next-locales';
import { FunctionComponent } from 'react';

import { Logo } from '../Logo';
import { NAVIGATION } from '~/constants';
import { getNewTabProps } from '~/utils/getNewTabProps';

export const Sidebar: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <aside className="w-full">
      <div className="sticky top-0 rounded-xl w-full px-8 py-8">
        <div>
          <Link href="/" className="text-black dark:text-white">
            <Logo />
          </Link>
        </div>
        <h1 className="mt-3 text-black dark:text-white text-2xl md:text-4xl xl:text-6xl 2xl:text-6xl font-bold tracking-tighter relative lg:right-1">
          {t('common.headname')}
        </h1>
        <div className="lg:mt-5 max-w-xl">
          <p className="dark:text-zinc-400 text-zinc-500 text-base leading-5">
            {t('common.headline')}
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-zinc-300">
          <nav>
            <ul className="lg:space-y-2 space-x-3 list-none no-underline inline-flex items-center sm:flex sm:flex-col sm:items-start sm:space-x-0">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link
                    className="dark:text-zinc-400 text-zinc-500 dark:hover:text-white hover:text-black inline-flex items-center"
                    href={item.href}
                    {...getNewTabProps(item.href)}
                  >
                    <span>{t(`navigation.${item.name}`)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};
