import { isPresent } from '@ember/utils';

const Leanplum = window.Leanplum;

export function initialize(appInstance) {
  const config = appInstance.resolveRegistration('config:environment');

  if (isPresent(Leanplum) && config.leanplum) {
    const { isDevelopmentMode, appId, apiKey, variables } = config.leanplum;

    if (isDevelopmentMode) {
      Leanplum.setAppIdForDevelopmentMode(appId, apiKey);
    } else {
      Leanplum.setAppIdForProductionMode(appId, apiKey);
    }

    if (variables)
      Leanplum.setVariables(variables);

    Leanplum.start();
  }
}

export default {
  initialize
};
