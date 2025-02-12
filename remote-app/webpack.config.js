const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
 
module.exports = {
  ...withModuleFederationPlugin({
    name: 'app',
 
    filename: 'remoteEntry.js',
    exposes: {
      './AppModule': './src/app/app.module.ts',
    },
 
    shared: {
      ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    },
  }),
 
  // ✅ Move output.publicPath here (outside withModuleFederationPlugin)
  output: {
    publicPath: "http://localhost:4201/",
    uniqueName: "app", // Ensures no conflicts in the module federation setup
  },
};
