<template>
  <div class="headerTitle">
      <div class="header-left" @click="$router.go(-1)">
         <van-icon name="zuojiantou" />
      </div>
      <div class="header-in">{{title}}</div>
      <div class="header-rigth"></div>
  </div>
</template>

<script>
import { Icon } from 'vant';	
export default {
  name:"headerTitle",
  props:[
      "title"
  ],
	components:{
		[Icon.name]:Icon
	}
}
</script>

<style scoped lang="scss">
	.headerTitle{
		width: 100%;
		height: 1.45rem;
		background: #fff;
		line-height: 1.45rem;
		position: fixed;
		top:0;
		left: 0;
	  .header-left{
			width: 10%;
			height: 100%;
			display: inline-block;
			.van-icon-zuojiantou{
				font-size: 0.4rem;
				line-height: 1.45rem;
				text-align: center;
				display: block;
			}
		}
		.header-in{
		   width: 80%;
		   display: inline-block;
			text-align: center;
			font-size: .4rem;
		}
		.header-rigth{
			width: 10%;
			display: inline-block;
		}
	}
</style>