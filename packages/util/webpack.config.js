const path = require('path');

printEnvironment(getEnvironment(), true);

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'index.js',
        library: {
            type: 'commonjs'
        }
    },
    devtool: switchEnvs('cheap-module-source-map'),
    externals: {
        'react': 'react',
        'react-dom': 'react-dom'
    },
    mode: getEnvironment(),
    resolve: {
        extensions: [ '.js', '.ts', '.tsx' ]
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
                test: /\.(svg|png|jpg)$/,
                type: 'asset/inline'
            }
        ]
    }
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
