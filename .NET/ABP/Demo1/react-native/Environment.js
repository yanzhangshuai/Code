const ENV = {
  dev: {
    apiUrl: 'http://localhost:44329',
    oAuthConfig: {
      issuer: 'http://localhost:44329',
      clientId: 'Demo1_App',
      clientSecret: '1q2w3e*',
      scope: 'Demo1',
    },
    localization: {
      defaultResourceName: 'Demo1',
    },
  },
  prod: {
    apiUrl: 'http://localhost:44329',
    oAuthConfig: {
      issuer: 'http://localhost:44329',
      clientId: 'Demo1_App',
      clientSecret: '1q2w3e*',
      scope: 'Demo1',
    },
    localization: {
      defaultResourceName: 'Demo1',
    },
  },
};

export const getEnvVars = () => {
  // eslint-disable-next-line no-undef
  return __DEV__ ? ENV.dev : ENV.prod;
};
