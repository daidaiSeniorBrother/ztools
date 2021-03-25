module.exports = {
    lintOnSave: false, //是否开启eslint
    devServer: {
        proxy: {
            '/baidu_translation': {
                target: "http://api.fanyi.baidu.com/",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/baidu_translation': ''
                }
            }
        }
    },
}
