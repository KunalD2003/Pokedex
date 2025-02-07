const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

module.exports = (async () => {
  const {
    resolver: { assetExts, sourceExts },
  } = await getDefaultConfig(__dirname);

  return mergeConfig(getDefaultConfig(__dirname), {
    transformer: {
      // Tell Metro to use react-native-svg-transformer for SVG files.
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      // Optionally, you can include additional transform options:
      // getTransformOptions: async () => ({
      //   transform: { experimentalImportSupport: false, inlineRequires: true },
      // }),
    },
    resolver: {
      // Remove 'svg' from assetExts...
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      // ...and add 'svg' to sourceExts.
      sourceExts: [...sourceExts, 'svg'],
    },
  });
})();
