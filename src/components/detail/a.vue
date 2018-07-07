<template>
	<div class="goodDetail">
	   <van-tabs v-model="active">
			<van-tab v-for="item in navArr" :title="item.name" :key="item.name">
				内容 {{ item.name }}
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
import { Tab, Tabs } from 'vant';
 export default{
   data(){
     return{
		   navArr:[
			   {
					 name:"商品"
				 },
				 {
				 	name:"详情"
				 },
				 {
					 name:"评论"
				 }
			 ]   
	   }
   },
   components:{
	   [Tab.name]:Tab,
		 [Tabs.name]:Tabs
   },
	 methods:{
	 }
 } 
</script>

<style>
   
</style>