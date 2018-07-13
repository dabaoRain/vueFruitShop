# vueFruitShop
vue水果小商城

项目历程：＜/br＞
1.vue-cli 构建＜/br＞
  npm install --global vue-cli＜/br＞
  vue init webpack vue-fruit-shop＜/br＞
  cd vue-fruit-shop＜/br＞
  npm run dev＜/br＞
2.vuex npm install vuex --save＜/br＞
3.axios npm install --save axios＜/br＞
4. 安装vant-ui插件＜/br＞
  官方文档：https://youzan.github.io/vant/＜/br＞
  项目采用的是按需加载：＜/br＞
  （1）npm i babel-plugin-import -D  //babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式＜/br＞
   (2) .babelrc中添加配置＜/br＞
       {
        "plugins": [
          ["import", {
            "libraryName": "vant",
            "libraryDirectory": "es",
            "style": true
          }]
        ]
      }＜/br＞
  （3）import { Button, Cell } from 'vant';＜/br＞
    //这里有个坑，第一次用的时候以为这样就可以了，但是不行,还需要第四步＜/br＞

  （4）在组件里面＜/br＞
    components：{＜/br＞
       [Button.name]:Button＜/br＞
    }＜/br＞
   (5)<van-button type="default">默认按钮</van-button>＜/br＞
   
  
