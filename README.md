# vueFruitShop
vue水果小商城

项目历程：
1.vue-cli 构建
  npm install --global vue-cli
  vue init webpack vue-fruit-shop
  cd vue-fruit-shop
  npm run dev
2.vuex npm install vuex --save
3.axios npm install --save axios
4. 安装vant-ui插件
  官方文档：https://youzan.github.io/vant/
  项目采用的是按需加载：
  （1）npm i babel-plugin-import -D  //babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式
   (2) .babelrc中添加配置
       {
        "plugins": [
          ["import", {
            "libraryName": "vant",
            "libraryDirectory": "es",
            "style": true
          }]
        ]
      }
  （3）import { Button, Cell } from 'vant';
    //这里有个坑，第一次用的时候以为这样就可以了，但是不行,还需要第四步

  （4）在组件里面
    components：{
       [Button.name]:Button
    }
   (5)<van-button type="default">默认按钮</van-button>
   
  
