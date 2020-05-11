const path = require('path');
module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/i, // i 붙히면 대문자 파일도 가능
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.css$/i, // i 붙히면 대문자 파일도 가능
            loader: ['style-loader', 'css-loader']
        }]
    },
    devServer: {
        contentBase: path.resolve('public'),
        host: '0.0.0.0',
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }    
}