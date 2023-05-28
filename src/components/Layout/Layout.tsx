import { FunctionComponent } from 'react';

import { PropsWithChildrenOnly } from '~/constants';
import { Sidebar } from '../Sidebar';

export const Layout: FunctionComponent<PropsWithChildrenOnly> = ({
  children,
}) => (
  <div className="2xl:max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-4">
      <Sidebar />
      <main className="w-full lg:col-span-3">
        <section>
          <div className="p-8 lg:py-12 lg:px-10">{children}</div>
        </section>
      </main>
    </div>
  </div>
);
