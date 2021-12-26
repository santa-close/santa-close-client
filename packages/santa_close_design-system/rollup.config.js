import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import {terser} from 'rollup-plugin-terser'

const packageJson = require('./package.json')
const extensions = ['.ts', '.tsx']
const external = ['react', 'react-dom']

process.env.BABEL_ENV = 'production'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  external: [/@babel\/runtime/],
  plugins: [
    peerDepsExternal(),
    resolve({extensions}),
    babel({
      extensions,
      include: ['src/**/*'],
      exclude: ['node_modules/**'],
      babelHelpers: 'runtime',
    }),
    commonjs({
      include: /node_modules/,
      extensions: [...extensions, '.js'],
    }),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    terser(),
  ],
  external,
}
