import './index.scss';

import { MenucssPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin() {
  return new MenucssPlugin();
}
export { MenucssPluginSetup, MenucssPluginStart } from './types';
