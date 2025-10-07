import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

const DIRNAME = path.dirname(new URL(import.meta.url).pathname);
const IS_PROD = process.env.NODE_ENV !== "development";
const PORT    = Number(process.env.PORT ?? 3000);

export default {
    entry : path.resolve(DIRNAME, "src", "index.tsx"),
    output: {
        filename  : "bundle.[contenthash].js",
        path      : path.resolve(DIRNAME, "build"),
        clean     : true,
        publicPath: "/",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
        alias     : {
            "@": path.resolve(DIRNAME, "src"),
        },
    },
    module: {
        rules: [
            {
                test   : /\.[jt]sx?$/,
                exclude: /node_modules/,
                use    : {
                    loader : "ts-loader",
                    options: {
                        transpileOnly: true,
                    },
                },
            },
            {
                test: /\.css$/i,
                use : [
                    IS_PROD ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader",
                    "postcss-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template     : path.resolve(DIRNAME, "public", "index.html"),
            inject       : "body",
            scriptLoading: "defer",
        }),
        ...IS_PROD
            ? [
                new MiniCssExtractPlugin({
                    filename     : "css/[name].[contenthash].css",
                    chunkFilename: "css/[id].[contenthash].css",
                    ignoreOrder  : false,
                }),
            ]
            : [new ReactRefreshWebpackPlugin()],
    ],
    devtool  : IS_PROD ? "source-map" : "eval-cheap-module-source-map",
    devServer: {
        static: [
            {
                directory: path.join(DIRNAME, "public"),
                watch    : true,
            },
            {
                directory: path.join(DIRNAME, "assets"),
                watch    : true,
            },
        ],
        historyApiFallback: true,
        hot               : true,
        host              : "127.0.0.1",
        port              : PORT,
        allowedHosts      : ["127.0.0.1"],
        compress          : true,
        headers           : {
            "X-Frame-Options"       : "DENY",
            "X-Content-Type-Options": "nosniff",
            "Referrer-Policy"       : "no-referrer",
            "Permissions-Policy"    : "camera=(), microphone=(), geolocation=()",
        },
        client: {
            overlay     : true,
            webSocketURL: {
                hostname: "127.0.0.1",
                port    : 443,
                protocol: "wss",
                pathname: "/ws",
            },
        },
    },
    optimization: {
        minimize   : IS_PROD,
        splitChunks: {
            chunks: "all",
        },
        runtimeChunk: "single",
    },
    performance: {
        hints            : IS_PROD ? "warning" : false,
        maxAssetSize     : 250000,
        maxEntrypointSize: 250000,
    },
    cache: {
        type          : "filesystem",
        cacheDirectory: path.resolve(DIRNAME, ".webpackcache"),
    },
};
