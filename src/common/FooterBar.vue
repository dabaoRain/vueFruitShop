<template>
  <div class="footer">
	  <van-tabbar v-model="activeIndex" @change="changeNav">
			<van-tabbar-item to="/" icon="shouye">首页</van-tabbar-item>
			<van-tabbar-item to="/article" icon="wenzhang">文章</van-tabbar-item>
			<van-tabbar-item to="/car" icon="gouwucheman">购物车</van-tabbar-item>
			<van-tabbar-item to="/my" icon="user">个人中心</van-tabbar-item>
		</van-tabbar>
  </div>
</template>

<script>
 import { mapState } from 'vuex'
import { Tabbar, TabbarItem } from 'vant';
export default{
  data(){
    return{
			activeIndex:""
		}
	},
	components:{
	  [Tabbar.name]:Tabbar,
	  [TabbarItem.name]:TabbarItem
	},
	computed: {
		...mapState([
		   'nowIndex'
		])
	},
	methods:{
	   changeNav(active){
		    console.log(active);
				this.$store.dispatch('setIndex', active);
		 }   
	},
	mounted(){
	},
	created(){
	  this.activeIndex = this.nowIndex;
	}
}
</script>

<style scoped>
</style>