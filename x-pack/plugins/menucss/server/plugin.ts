import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../src/core/server';

import { MenucssPluginSetup, MenucssPluginStart } from './types';
import { defineRoutes } from './routes';

export class MenucssPlugin implements Plugin<MenucssPluginSetup, MenucssPluginStart> {
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('menucss: Setup');
    const router = core.http.createRouter();

    // Register server side APIs
    defineRoutes(router);

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('menucss: Started');
    return {};
  }

  public stop() {}
}
