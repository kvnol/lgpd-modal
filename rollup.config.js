import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/js/index.js',
  output: {
    name: 'LGPDModal',
    file: 'dist/index.min.js',
    format: 'iife',
  },
  plugins: [resolve(), babel({ babelHelpers: 'bundled' })],
};