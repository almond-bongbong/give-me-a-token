import envVars from 'preact-cli-plugin-env-vars';

export default (config, env, helpers) => {
  envVars(config, env, helpers);

  if (!env.dev) {
    config.output.publicPath = '/give-me-a-token/';
  }

  config.plugins.push(
    new helpers.webpack.DefinePlugin({
      'process.env.PUBLIC_PATH': JSON.stringify(config.output.publicPath || '/')
    }),
  );
};