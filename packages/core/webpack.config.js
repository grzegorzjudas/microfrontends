const path = require('path');

const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const packageJson = require('./package.json');

printEnvironment(getEnvironment(), true);

module.exports = (env) => ({
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },
    mode: getEnvironment(),
    devtool: switchEnvs('cheap-module-source-map'),
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
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.(svg|png|jpg|woff|woff2)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: packageJson.name,
            shared: [ 'react', 'react-dom', 'redux', 'react-redux' ]
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            scriptLoading: 'defer'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/**/*.css', to: 'static/styles/style.css' },
                { from: './assets', to: 'static/', noErrorOnMissing: true }
            ]
        }),
        ...(env.analyze ? [ new BundleAnalyzerPlugin() ] : [])
    ]
});

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
