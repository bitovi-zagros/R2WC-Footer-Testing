const path = require('path')
module.exports = {
  entry: './web-entry.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'footer-web-component.js',
    library: {
      type: 'commonjs',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: require('styled-jsx/webpack').loader,
            options: {
              type: 'scoped',
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-react',
                  {
                    'styled-jsx': {
                      plugins: [
                        [
                          '@styled-jsx/plugin-sass',
                          {
                            sassOptions: {
                              includePaths: ['./src/styles'],
                            },
                            options: {
                              type: 'scoped',
                            },
                          },
                        ],
                      ],
                    },
                  },
                ],
              ],
            },
          },
          'ts-loader',
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
}
