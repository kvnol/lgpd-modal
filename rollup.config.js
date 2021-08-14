import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

const config = [];

config.push({
  input: 'src/js/index.js',
  output: {
    name: 'LGPDModal',
    file: 'dist/lgpdmodal.umd.js',
    format: 'umd',
    extend: true,
    esModule: 'false',
    exports: 'named',
  },
  plugins: [resolve(), babel({ babelHelpers: 'bundled' })],
});

config.push({
  input: 'src/js/index.js',
  output: {
    name: 'LGPDModal',
    file: 'dist/lgpdmodal.esm.js',
    format: 'es',
    exports: 'named',
  },
  plugins: [resolve(), babel({ babelHelpers: 'bundled' })],
});

config.push({
  input: 'src/js/index.js',
  output: {
    name: 'LGPDModal',
    file: 'dist/lgpdmodal.min.js',
    format: 'iife',
  },
  plugins: [resolve(), babel({ babelHelpers: 'bundled' })],
});

export default config;
