import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

export interface MenucssPluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MenucssPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}
