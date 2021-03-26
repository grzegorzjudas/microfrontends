const path = require('path');

const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'index.js'
    },
    mode: process.env.NODE_ENV,
    resolve: {
        extensions: [ '.js', '.jsx' ]
    },
    devServer: {
        port: 9001,
        compress: true,
        contentBase: path.join(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [ '@babel/preset-react' ]
                }
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: '@homi/auth',
            library: {
                type: 'var',
                name: 'auth'
            },
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/components/App'
            },
            shared: {
                'react': { singleton: true },
                'react-dom': { singleton: true }
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            scriptLoading: 'defer'
        })
    ]
};
