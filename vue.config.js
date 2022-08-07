module.exports = {
    // publicPath: process.env.NODE_ENV === 'production'
    //     ? ''
    //     : '/',
    devServer: {
        port:8081,
        proxy: {
            '/api': {
                //target: 'http://127.0.0.1:8094',
                target: 'http://127.0.0.1:7070',
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true
            },
            '/search_api': {
                //target: 'http://127.0.0.1:8096',
                target: 'http://127.0.0.1:7070',
                pathRewrite: {
                    '^/search_api': ''
                },
                changeOrigin: true
            },
            '/detail_api': {
                //target: 'http://127.0.0.1:8097',
                target: 'http://127.0.0.1:7070',
                pathRewrite: {
                    '^/detail_api': ''
                },
                changeOrigin: true
            },
            '/shopcar_api': {
                //target: 'http://127.0.0.1:8101',
                target: 'http://127.0.0.1:7070',
                pathRewrite: {
                    '^/shopcar_api': ''
                },
                changeOrigin: true
            },
            "/payment_api": {
                //target: 'http://127.0.0.1:8103',
                target: 'http://127.0.0.1:7070',
                pathRewrite: {
                    '^/payment_api': ''
                },
                changeOrigin: true
            },
            "/usian": {
                target: 'http://192.168.1.116:3001',
                pathRewrite: {
                    '^/usian': ''
                },
                changeOrigin: true
            },
            "/register_api": {
                //target: 'http://127.0.0.1:8099',
                target: 'http://127.0.0.1:7070',
                pathRewrite: {
                    '^/register_api': ''
                },
                changeOrigin: true
            }
        }
    }
}