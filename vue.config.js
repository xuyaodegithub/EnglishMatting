const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');//打包时，显示进度条插件
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');//js压缩
const Timestamp = new Date().getTime();//时间戳，解决缓存问题
module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ? 'http://47.111.168.199:8080' : 'http://47.111.168.199:8080',
    publicPath:'./',
    outputDir:'dist',//打包生出的目录
    productionSourceMap: false,//定位打包后的原始位置，有利于调试
    // filenameHashing: false,    // 去掉文件名中的 hash
    lintOnSave: false,   // 取消 eslint 验证
    // assetsDir:'',//放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    // indexPath:'',//指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    // productionSourceMap:'',//如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    // filenameHashing:'',//默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希
    css: {//有的时候你想要向 webpack 的预处理器 loader 传递选项。你可以使用 vue.config.js 中的 css.loaderOptions 选项。比如你可以这样向所有 Sass 样式传入共享的全局变量：
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.scss` 这个文件
                data: `@import "~@/style/initscss.scss";`
            }
        }
    },

    devServer: {//代理
        port: process.env.PORT ? process.env.PORT : 8888,//端口号
        host: '0.0.0.0',
        // https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        proxy: {
            '/api': {
                target: 'http://47.111.168.199:8080/image2',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: 'http://47.111.168.199:8080/image2'
            }
        }
    },
    pages:{
        index:{
            entry: 'src/views/initIdx/index.js',
            template:'public/init.html',
            filename: 'index.html',
            title: 'home page',
            // chunks: ['chunk-vendors', 'chunk-common', 'loginOrRegister']
        },
        people: {
            // page 的入口
            entry: 'src/views/index/index.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'people.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Intelligent portrait online matting',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            // chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        objects: {
            // page 的入口
            entry: 'src/views/indexTwo/index.js',
            // 模板来源
            template: 'public/objects.html',
            // 在 dist/index.html 的输出
            filename: 'objects.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Object one click matting',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            // chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        loginOrRegister:{
            entry: 'src/views/login/login.js',
            template:'public/loginOrRegister.html',
            filename: 'loginOrRegister.html',
            title: 'Sign in',
            // chunks: ['chunk-vendors', 'chunk-common', 'loginOrRegister']
        },
        register:{
            entry: 'src/views/register/index.js',
            template:'public/register.html',
            filename: 'register.html',
            title: 'register',
            // chunks: ['chunk-vendors', 'chunk-common', 'loginOrRegister']
        },
        userCenter:{
            entry: 'src/views/userCenter/user.js',
            template:'public/userCenter.html',
            filename: 'userCenter.html',
            title: 'My',
            // chunks: ['chunk-vendors', 'chunk-common', 'userCenter']
        },
        userVip:{
            entry: 'src/views/userVip/index.js',
            template:'public/userVip.html',
            filename: 'userVip.html',
            title: 'Member Center',
            // chunks: ['chunk-vendors', 'chunk-common', 'userVip']
        },
        resBackMsg:{
            entry: 'src/views/resBackMsg/index.js',
            template:'public/resRackMsg.html',
            filename: 'resBackMsg.html',
            title: 'Processing result',
            // chunks: ['chunk-vendors', 'chunk-common', 'resBackMsg']
        },
        changePass:{
            entry: 'src/views/changePassword/index.js',
            template:'public/changePass.html',
            filename: 'changePass.html',
            title: 'Retrieve password',
            // chunks: ['chunk-vendors', 'chunk-common', 'changePass']
        },
        updataPass:{
            entry: 'src/views/updataPassword/index.js',
            template:'public/updata.html',
            filename: 'updataPass.html',
            title: 'Change Password',
            // chunks: ['chunk-vendors', 'chunk-common', 'changePass']
        },
        emailAction:{
            entry: 'src/views/emailAction/index.js',
            template:'public/emailAction.html',
            filename: 'emailAction.html',
            title: 'mailbox',
            // chunks: ['chunk-vendors', 'chunk-common', 'changePass']
        },
        product:{
            entry: 'src/views/products/index.js',
            template:'public/product.html',
            filename: 'product.html',
            title: 'More picup.ai products',
            // chunks: ['chunk-vendors', 'chunk-common', 'changePass']
        },
        aboutUs:{
            entry: 'src/views/aboutUs/index.js',
            template:'public/aboutUs.html',
            filename: 'aboutUs.html',
            title: 'About pickup.ai',
            // chunks: ['chunk-vendors', 'chunk-common', 'changePass']
        }, freeimg:{
            entry: 'src/views/freeimg/index.js',
            template:'public/freeimg.html',
            filename: 'freeimg.html',
            title: 'Free PNG transparency chart',
            // chunks: ['chunk-vendors', 'chunk-common', 'changePass']
        },detail:{
            entry: 'src/views/detail/index.js',
            template:'public/detail.html',
            filename: 'detail.html',
            title: 'Picture details',
            // chunks: ['chunk-vendors', 'chunk-common', 'changePass']
        },copyright:{
            entry: 'src/views/copyright/index.js',
            template:'public/copyright.html',
            filename: 'copyright.html',
            title: 'copyright',
            // chunks: ['chunk-vendors', 'chunk-common', 'changePass']
        },editPictures:{
            entry: 'src/views/editPictures/index.js',
            template:'public/editPictures.html',
            filename: 'editPictures.html',
            title: 'Picture editor',
            // chunks: ['chunk-vendors', 'chunk-common', 'changePass']
        },
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            }),
            new ProgressBarPlugin(),
            // new UglifyJsPlugin()
            new webpack.NormalModuleReplacementPlugin(/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/, 'element-ui/lib/locale/lang/en')
        ],
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            filename: `js/[name].${Timestamp}.js`,
            chunkFilename: `js/[name].${Timestamp}.js`
        },
    },
    // configureWebpack: config => {//如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象：
    //     if (process.env.NODE_ENV === 'production') {
    //         // 为生产环境修改配置...
    //     } else {
    //         // 为开发环境修改配置...
    //     }
    // }
}
