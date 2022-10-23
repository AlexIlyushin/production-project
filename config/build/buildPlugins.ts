import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, apiUrl }: BuildOptions): webpack.WebpackPluginInstance[] {
    const isProd = !isDev;
    return [
        new HtmlWebpackPlugin(
            {
                template: paths.html,
            },
        ),
        new webpack.ProgressPlugin(),

        new webpack.DefinePlugin({ // плагин для прокидывания переменных в файлы
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
        }),
        ...(isDev ? [
            new ReactRefreshWebpackPlugin({ overlay: false }),
            new BundleAnalyzerPlugin({ openAnalyzer: false }),
        ] : []),
        ...(isProd ? [
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
        ] : []),

    ];
}
