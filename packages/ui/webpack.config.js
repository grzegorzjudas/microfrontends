const path = require('path');

const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

printEnvironment(getEnvironment(), true);

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },
    mode: getEnvironment(),
    resolve: {
        extensions: [ '.js', '.ts', '.tsx' ]
    },
    devServer: {
        port: 9000,
        contentBase: path.resolve(__dirname, 'dist/static/'),
        contentBasePublicPath: '/static',
        publicPath: '/',
        historyApiFallback: true,
        hot: true,
        hotOnly: true,
        inline: true,
        compress: switchEnvs(false, true),
        headers: {
            'Cache-Control': 'no-store'
        }
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'ts-loader' }
                ]
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: '@grzegorzjudas/ui',
            remotes: {
                '@grzegorzjudas/auth': 'auth@http://localhost:9001/remoteEntry.js'
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

function printEnvironment (environment, colors) {
    console.log([
        colors ? '\x1b[34m' : '',
        '===================================',
        `Building for: ${environment}`,
        '===================================',
        colors ? '\x1b[0m' : ''
    ].join('\n'));
}

function getEnvironment () {
    const options = [ 'development', 'production', 'none' ];
    const env = process.env.NODE_ENV;

    return options.includes(env) ? env : 'production';
}

function switchEnvs (dev, prod) {
    if (getEnvironment() === 'development') return dev;

    return prod;
}
