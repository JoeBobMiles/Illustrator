const path = require('path');

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/_entry.tsx",
    output: {
        filename: "app.bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        // We include ".js" for the sake of the WebPack development
        // server. If we don't, the dev server fails to compile.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    devServer: {
        compress: true,
        port: 80
    }
};
