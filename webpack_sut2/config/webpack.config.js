const path=require("path"); //加载path模块
module.exports={
    entry:{
        index:"./src/index.js",
        product:"./src/product.js"
    },
    output:{//打包出口
        path:path.resolve(__dirname,"../dist/"), //打包文件
        // filename:"bundle.js"//打包文件输出名称
        filename:"[name].[hash].js"

    }
}