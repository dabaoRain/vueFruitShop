<template>
	<div class="goodDetail">
		 <DetailHeader title="商品详情"></DetailHeader>
	   <ul style="padding: 1.45rem 0;">
			   <li v-for="(goodObj,index) in currentFruit" :key="index">
					  <van-tabs :active="active">
					  	<van-tab>
					  		<div slot="title">商品</div>
					  		<div>
					  			<van-swipe :autoplay="3000">
					  				<van-swipe-item v-for="(item, index) in goodObj.proSwipeImgs" :key="index">
					  					<img :src="item.swipeImg"/>
					  				</van-swipe-item>
					  			</van-swipe>
					  			<div class="goodDetailTitle">
					  					<h3>{{goodObj.proName}}</h3> 
					  					<h4>{{goodObj.proChar}}</h4>
					  					<h5>￥{{goodObj.proPrice}}</h5>
					  			</div>
									<div class="purchaseNum">
										  <label>购买数量</label>
											<div>
												 <van-stepper v-model="goodObj.homeValue"/>
											</div>
									</div>
					  		</div>
					  	</van-tab>
					  	<van-tab>
					  		<div slot="title">详情</div>
					  		<div>
					  			<ul>
					  					<li v-for="(item,index) in goodObj.proDetailImgs">
					  						<img :src="item.detailImg" /> 
					  					</li>
					  			</ul>
					  		</div>
					  	</van-tab>
					  	<van-tab>
					  		<div slot="title">评论</div>
					  		<div>评论内容</div>
					  	</van-tab>
					  </van-tabs>
					  
					  <van-goods-action>
					  	<van-goods-action-mini-btn :class="{'collected':isCollected}" icon="icon3"  text="收藏" @click="collectGoods(goodObj)"/>
					  	<van-goods-action-mini-btn @click="goCarShop" icon="cart" text="购物车" :info="cartLen"/>
					  	<van-goods-action-big-btn text="加入购物车" @click="addGoodsCar(goodObj)" />
					  	<van-goods-action-big-btn text="立即购买" primary @click="goPayGoods(goodObj)"/>
					  </van-goods-action>
				 </li>
		 </ul>
	</div>
</template>

<script>
 import { mapState } from 'vuex'
 import { mapMutations } from 'vuex'
 import { Tab, Tabs } from 'vant';
 import { Swipe, SwipeItem } from 'vant';
 import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant';
import { Toast } from 'vant';
import { Stepper } from 'vant';
import DetailHeader from '../../common/header';
 export default{
   data(){
     return{
		    active:0,
				currentFruit:[],
				cartLen:0,
				isCollected:false
	   }
   },
   components:{
		 [Tab.name]:Tab,
		 [Tabs.name]:Tabs,
		 [Swipe.name]:Swipe,
		 [SwipeItem.name]:SwipeItem,
		 [GoodsAction.name]:GoodsAction,
		 [GoodsActionBigBtn.name]:GoodsActionBigBtn,
		 [GoodsActionMiniBtn.name]:GoodsActionMiniBtn,
		 [Stepper.name]:Stepper,
		 DetailHeader
   },
	 methods:{
	   addGoodsCar(goodObj){
			var idExist = this.carts.find(item => {
				return item.id == goodObj.id;
			});
			if(!idExist){
				goodObj.danxuan=true;
			  this.$store.dispatch('addCar', goodObj);
				Toast('添加购物车成功');
				this.cartLen = this.carts.length;
			}else{
				Toast('该商品已经添加到购物车');
			}
		 },
		 goCarShop(){
		   this.$router.push({ path: "car"});	
		 },
		 goPayGoods(goodObj){
				var pays = [];
				pays.push(goodObj);
				this.$store.dispatch('setOrders', pays);
				this.$router.push({ path: "pay"});	
		 },
		 collectGoods(goodObj){
			  this.isCollected = !this.isCollected;
				this.$store.dispatch('collectGoods', goodObj);
		 }
	 },
	 created(){
	   var currentId = parseInt(this.$route.query.id);
		 this.currentFruit = this.fruitData.filter((item)=>{
		    return item.id === currentId   
		 });
		 this.cartLen = this.carts.length; //购物车数量初始值
		 console.log(this.currentFruit);
		 this.isCollected = this.currentFruit[0].isCollected
	 },
	 computed:{
		 ...mapState([
				 'fruitData',
				 "carts"
     ])
	 },
	mounted(){
	}
 } 
</script>

<style scoped  type="text/css">
	.goodDetailTitle{
		text-align: center;
	}
	.goodDetailTitle h3{
		font-size: .46rem;
    color: #3a3a3a;
	}
	.goodDetailTitle h4{
		font-size: .38rem;
		color: #878787;
	}
	.goodDetailTitle h5{
		font-size: .6rem;
		color: #ff660a;
	}
	.purchaseNum{
		border-top: 1px solid #cecece;
		border-bottom: 1px solid #cecece;
		padding: .3rem 4%;
		
	}
	.purchaseNum label{
		display: inline-block;
		vertical-align: middle;
		font-size: .5rem;
		width: 60%;
	}
	.purchaseNum div{
		display: inline-block;
		vertical-align: middle;
	}
	.collected{
		color: red;
	}
</style>