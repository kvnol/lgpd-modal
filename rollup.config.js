import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

const config = [];

config.push({
  input: 'src/js/index.js',
  plugins: [nodeResolve(), babel({ babelHelpers: 'bundled' }), terser()],
  output: {
    file: `dist/${pkg.name}.min.js`,
    format: 'umd',
    name: 'LGPDModal',
    esModule: false,
    exports: 'named',
    sourcemap: true,
  },
});

config.push({
  input: 'src/js/index.js',
  plugins: [nodeResolve()],
  output: [
    {
      dir: 'dist/esm',
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
  ],
});

export default config;
