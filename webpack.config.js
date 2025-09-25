const path = require("path");
const dotenv = require("dotenv");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isProd = process.env.NODE_ENV !== "development";

dotenv.config();

module.exports = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
        filename: "bundle.[contenthash].js",
        path: process.env.BUILD_PATH ?? path.resolve(__dirname, "build"),
        clean: true,
        publicPath: "/"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            inject: "body",
            scriptLoading: "defer"
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
        }),
        ...(
            isProd
            ? [
                new MiniCssExtractPlugin({
                    filename: "css/[name].[contenthash].css",
                    chunkFilename: "css/[id].[contenthash].css",
                    ignoreOrder: false
                })
            ]
            : [new ReactRefreshWebpackPlugin()]
        )
    ],
    devtool: isProd ? "source-map" : "eval-cheap-module-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
            watch: true
        },
        historyApiFallback: true,
        hot: true,
        host: "127.0.0.1",
        port: process.env.PORT_DEV ?? 3200,
        allowedHosts: [`dev.${process.env.DOMAIN}`],
        compress: true,
        headers: {
            "X-Frame-Options": "DENY",
            "X-Content-Type-Options": "nosniff",
            "Referrer-Policy": "no-referrer",
            "Permissions-Policy": "camera=(), microphone=(), geolocation=()"
        },
        client: {
            overlay: true,
            webSocketURL: {
                hostname: `dev.${process.env.DOMAIN}`,
                port: 443,
                protocol: "wss",
                pathname: "/ws"
            }
        }
    },
    optimization: {
        minimize: isProd,
        splitChunks: {
            chunks: "all"
        },
        runtimeChunk: "single"
    },
    performance: {
        hints: isProd ? "warning" : false,
        maxAssetSize: 250000,
        maxEntrypointSize: 250000
    },
    cache: {
        type: "filesystem"
    }
};
