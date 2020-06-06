const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    watch: true,
    entry: ['./src/index.tsx'],

    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },
    output: {
        path: `${__dirname}/public`,
        publicPath: '/',
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "ts-loader"
                }]
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        liveReload: true,
        port: 9000,
        historyApiFallback: true,
        hotOnly: true,
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};