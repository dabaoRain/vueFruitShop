<template>
  <div class="perCenter">
	  <MyHeader title="个人中心"></MyHeader>
	  <div class="perContent">
			 <div class="container">
			 	  <div class="userImg"><img  src="../../../static/img/userImg.png" /></div>
          <div class="userName">dabao</div>
					<div class="userState">学会接受拒绝和拒绝别人.</div>
			 </div>
			 <div>
				 <van-cell title="我的收藏" icon="location" is-link to="/collect"/>
				 <van-cell title="我的收货地址" icon="location" is-link to="/address"/>
				 <van-cell title="我的购物车" icon="location" is-link  to="/car"/>
			 </div>
		</div>
	 <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import MyHeader from '../../common/header';
import HomeFooter from '../../common/FooterBar'
import { Cell, CellGroup } from 'vant';
export default{
  data(){
    return{
	  }
  },
  components:{
		MyHeader,
    HomeFooter,
		[Cell.name]:Cell,
		[CellGroup.name]:CellGroup
  }
}
</script>

<style scoped lang="scss">
	.perContent{
	   padding-top: 1.45rem;
		 .container{
		 	height: 3.6rem;
		 	background: url(../../../static/img/bj.png) no-repeat;
		 	text-align: center;
		 	color: #fff;
		 	padding: .4rem 0;
			.userImg{
				width: 16%;
				margin: 0 auto;
				img{
					border-radius: 50%;
				}
			}
			.userName{
				font-size: .5rem;
				margin: .2rem 0;
			 }
			 .userState{
			 	font-size: .56rem;
			 }
		 }
	}
</style>