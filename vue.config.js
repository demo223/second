module.exports = {
  publicPath: '/', // 基本路径
  outputDir: 'dist', // 输出文件目录
  indexPath: 'index.html', //用于设定打包生成的 index.html 文件的存储位置
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        network: '@/network',
        views: '@/views',
      },
    },
  },
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js', // 模板来源
      template: 'public/index.html', // 在 dist/index.html 的输出
      filename: 'index.html', // 当使用 title 选项时， // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '二手交易平台设计',
    },
  }, // 配置服务器
  devServer: {
    // 启用压缩，代码占的空间少，在互联网传输快
    compress: true,
    port: 8008,
    host: 'localhost',
    hot: true, // 启用热启动。
    open: true, // 默认第一次运行时调起浏览器打开项目 // 服务器代理，实现跨域访问接口
    proxy: {
      '/api': {
        target: 'https://music.taihe.com', // 接口地址
        ws: true, // 是否启用websockets
        changOrigin: true, //允许跨域  Origin源127.0.0.1:9000
        pathRewrite: {
          '^/api': '', //请求的时候使用这个/api前缀就可以
        },
      },
    },
  },
}
