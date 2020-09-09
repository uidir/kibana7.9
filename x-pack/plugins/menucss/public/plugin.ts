import { i18n } from '@kbn/i18n';
import { AppMountParameters, CoreSetup, CoreStart, Plugin } from '../../../src/core/public';
import { MenucssPluginSetup, MenucssPluginStart, AppPluginStartDependencies } from './types';
import { PLUGIN_NAME } from '../common';
import { URL1 } from '../common';

export class MenucssPlugin implements Plugin<MenucssPluginSetup, MenucssPluginStart> {
  public setup(core: CoreSetup): MenucssPluginSetup {
    // Register an application into the side navigation menu
    core.application.register({
      id: 'menucss',
      euiIconType: 'monitoringApp',
      title: 'Lucre RSOI',
      order: 1,
      async mount(params: AppMountParameters) {
        // Load application bundle
        const { renderApp } = await import('./application');
        // Get start services as specified in kibana.json
        const [coreStart, depsStart] = await core.getStartServices();
        // Render the application
        return (window.location.href='/s/cloud-nine-bank/app/kibana#/dashboard/4b3340a0-50ba-11e9-a0fa-1b4f426a6a4e');
      },
    });
    core.application.register({
      id: 'menucss2',
      euiIconType: 'monitoringApp',
      title: 'Onboarding',
      order: 2,
      async mount(params: AppMountParameters) {
        // Load application bundle
        const { renderApp } = await import('./application');
        // Get start services as specified in kibana.json
        const [coreStart, depsStart] = await core.getStartServices();
        // Render the application
        return (window.location.href='/s/cloud-nine-bank/app/kibana#/dashboard/1424e740-42fe-11e9-b9e8-e97b8e0406d0');
      },
    });
    core.application.register({
      id: 'menucss3',
      euiIconType: 'monitoringApp',
      title: 'High Risk Account',
      order: 3, 
      async mount(params: AppMountParameters) {
        // Load application bundle
        const { renderApp } = await import('./application');
        // Get start services as specified in kibana.json
        const [coreStart, depsStart] = await core.getStartServices();
        // Render the application
        return (window.location.href='/s/cloud-nine-bank/app/kibana#/dashboard/cbc91470-42fe-11e9-b9e8-e97b8e0406d0');
      },
    });
    core.application.register({
      id: 'menucss4',
      euiIconType: 'monitoringApp',
      title: 'Alert Management',
      order: 4,
      async mount(params: AppMountParameters) {
        // Load application bundle
        const { renderApp } = await import('./application');
        // Get start services as specified in kibana.json
        const [coreStart, depsStart] = await core.getStartServices();
        // Render the application
        return (window.location.href='/s/cloud-nine-bank/app/kibana#/dashboard/60166970-43f9-11e9-b9e8-e97b8e0406d0');
      },
    });
    core.application.register({
      id: 'menucss5',
      euiIconType: 'monitoringApp',
      title: 'Bank Exam Prep',
      order: 5, 
      async mount(params: AppMountParameters) {
        // Load application bundle
        const { renderApp } = await import('./application');
        // Get start services as specified in kibana.json
        const [coreStart, depsStart] = await core.getStartServices();
        // Render the application
        return (window.location.href='/s/cloud-nine-bank/app/kibana#/dashboard/0b782e30-42ff-11e9-b9e8-e97b8e0406d0');
      },
    });
    core.application.register({
      id: 'menucss6',
      euiIconType: 'monitoringApp',
      title: 'BPM Dashboard',
      order: 6,
      async mount(params: AppMountParameters) {
        // Load application bundle
        const { renderApp } = await import('./application');
        // Get start services as specified in kibana.json
        const [coreStart, depsStart] = await core.getStartServices();
        // Render the application
        return (window.location.href='/s/cloud-nine-bank/app/kibana#/dashboard/aa1e8e80-4ff2-11e9-92a3-13c9a2a7165a');
      },
    });
      core.application.register({
      id: 'menucss7',
      euiIconType: 'grokApp',
      title: 'Bank Financial Reports',
      order: 7,
      async mount(params: AppMountParameters) {
        // Load application bundle
        const { renderApp } = await import('./application');
        // Get start services as specified in kibana.json
        const [coreStart, depsStart] = await core.getStartServices();
        // Render the application
        return renderApp(coreStart, depsStart as AppPluginStartDependencies, params);
      },
    });

    // Return methods that should be available to other plugins
    return {
      getGreeting() {
        return i18n.translate('menucss.greetingText', {
          defaultMessage: 'Hello from {name}!',
          values: {
            name: PLUGIN_NAME,
          },
        });
      },
    };
  }

  public start(core: CoreStart): MenucssPluginStart {
    return {};
  }

  public stop() {}
}
