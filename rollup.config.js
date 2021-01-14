import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    file: 'public/bundle.js',
    format: 'esm'
  },
  plugins: [ 
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    commonjs({
      include: [
        'node_modules/**'
      ],
      exclude: [
        'node_modules/process-es6/**'
      ]
    })
  ]
};
