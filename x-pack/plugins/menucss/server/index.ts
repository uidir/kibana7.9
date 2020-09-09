import { PluginInitializerContext } from '../../../src/core/server';
import { MenucssPlugin } from './plugin';

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new MenucssPlugin(initializerContext);
}

export { MenucssPluginSetup, MenucssPluginStart } from './types';
