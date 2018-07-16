<template>
  <div class="orders">
	 <OrderHeader title="我的订单"></OrderHeader>
	 <div class="orderList">
		<van-tabs :active="activeOrder">
		  <van-tab>
			<div slot="title">全部</div>
			<div>
				 <div v-for="(item,index) in ordersList" :key="index" class="ordersShow">
					  <div class="order_title">
							  大宝京城果蔬集团分部
							  <span class="orderStatus">已完成</span>
						</div>
					  <ul class="orderInfoList">
							 <li v-for="(order,key) in item.orders" :key="key">
								 <div class="orderInfo">
									  <div class="orderImg">
											 <img :src="order.proImg" />
										</div>
										<div class="orderName">
											 <p>{{order.proName}}</p>
											 <p>{{order.proPrice}}</p>
										</div>
										<div class="orderValue">
											 <span>×{{order.homeValue}}</span>
										</div>
								 </div> 
							 </li>
						</ul>
						<div class="orderOperation">
							  <van-button type="primary" size="small" @click="checkOrder(item)">订单详情</van-button>
								<van-button type="danger" size="small" @click="delOrders(index)">订单删除</van-button>
						</div>
				 </div>
			</div>
		  </van-tab>
		  <van-tab>
			<div slot="title">待付款</div>
			<div>待付款</div>
		  </van-tab>
		  <van-tab>
			<div slot="title">待收货</div>
			<div>待收货</div>
		  </van-tab>
		  <van-tab>
		  <div slot="title">待评价</div>
		  <div>待评价</div>
		  </van-tab>
		</van-tabs> 
	 </div>
  </div>
</template>

<script>
import OrderHeader  from '../../common/header'
import { Tab, Tabs } from 'vant';
import { mapState } from 'vuex'
import { mapMutations} from "vuex";
import { Button } from 'vant';
export default{
  data(){
    return{
	    activeOrder:0
	  }
  },
  components:{
    OrderHeader,
	  [Tab.name]:Tab,
	  [Tabs.name]:Tabs,
		[Button.name]:Button
  },
	computed:{
		...mapState([
			"ordersList"
		])
	},
	created(){
	  console.log(this.ordersList);
	},
	mounted:function(){
	},
	methods:{
		...mapMutations(["delOrders"]),
		checkOrder(order){
			 this.$store.dispatch('setCurrentorder', order);
			 this.$router.push({ path: "orderDetail"});	
		}
	}
}	
</script>

<style scoped>
  .orderList{
	  padding-top: 1.45rem;
  }
	.ordersShow{
		margin-top: .5rem;
		background: #fff;
		.order_title{
			border-bottom: 1px solid #f0f0f0;
			padding: .4rem 4%;
			font-size: .4rem;
			.orderStatus{
				float: right;
			}
		}
		.orderInfo{
			padding: .2rem 4%;
			border-bottom: 1px solid #f0f0f0;
			div{
				display: inline-block;
				font-size: .4rem;
			}
			.orderImg{
				width: 20%;
				vertical-align: top;
			}
			.orderName{
				width: 60%;
				vertical-align: top;
			}
			.orderValue{
				width: 10%;
				vertical-align: top;
				text-align: right;
			}
		}
	}
	.orderOperation{
		padding: .5rem 0;
		text-align: right;
		margin-right: 4%;
	}
</style>