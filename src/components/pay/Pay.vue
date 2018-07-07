<template>
   <div style="padding-bottom: 60px;">
		 <PayHeader title="结算"></PayHeader>
	   <div class="orderDetails">
			 <div class="currentAddressList">
			 		<ul>
			 			<li v-for="(item,index) in currentAddressList">
			 				<p><span class="name">收货人:{{item.name}}</span><span  class="tel">电话:{{item.tel}}</span></p>
			 				<p><em>收货地址:</em><span class="addressDetail">{{item.address}}</span></p>
			 			</li>
			 		</ul>
			 </div>
			 <div class="payGoodsList">
			 	<h4>
			 		商品清单
			 	</h4>
			 	<ul class="ordersList">
			 		<li v-for="(item,index) in orders">
			 			<span class="orderImg">
			 					<img :src="item.proImg" />
			 			</span>
			 			<div class="orderDetail">
			 					<span>{{item.proName}}</span>
			 					<span>￥{{item.proPrice}}</span>
			 			</div>
			 			<div class="orderNum">
			 					×{{item.homeValue}}
			 			</div>
			 		</li>
			 	</ul> 
			 </div>
			 <div class="payGoodsList">
			 	<h4>
			 		发票信息
			 	</h4>
			 	<div class="invoiceInfo">
			 		<p>*请输入发票信息:</p>
			 		<input type="text" v-model="invoiceTitle" placeholder="请输入发票信息"/>
			 	</div>
			 </div>
			 
			 <div class="payGoodsList">
			 	<h4>
			 		支付方式
			 	</h4>
			 	<div class="payStylesNav">
			 			<!--<van-tabs :active="pay_active" type="card" @click="getPayStyle">
			 				<van-tab>
			 					<div slot="title">在线支付</div>
			 					<div class="payStyleBox">支持支付宝支付、微信支付、银行卡支付、财付通等</div>
			 				</van-tab>
			 				<van-tab>
			 					<div slot="title">蚂蚁花呗</div>
			 					<div class="payStyleBox">花呗分期是花呗联合天猫淘宝推出的，面向互联网的赊购服务，通过支付宝轻松还款，0首付</div>
			 				</van-tab>
			 				<van-tab>
			 					<div slot="title">货到付款</div>
			 					<div class="payStyleBox">货到再付款，支持现金交易</div>
			 				</van-tab>
			 		</van-tabs>-->
					<ul>
						<li v-for="(item,index) in payStyles" @click="getPayStyle(index)" :class="{activeNav:index===tabNum}">
							<span>{{item.name}}</span>
						</li>
					</ul>
					<div class="payStyleBox" v-for="(item,index) in payStyles" v-show="index === tabNum">
						{{item.introduce}}
					</div>
			 	</div>
			 </div>
			 
			 <div class="payGoodsList">
			 	<h4>
			 		订单留言
			 	</h4>
			 	<div class="orderMessage">
			 		<textarea v-model="orderMessage" maxlength="300" rows="5" placeholder="限300字（若有特殊需求，请联系商城在线客服)"/>
			 	</div>
			 </div>
		 </div>
		 <van-submit-bar
			:price="orderTotalNum()"
			button-text="结算"
			@submit="paySuccess"
		/>
   </div>
</template>

<script>
import PayHeader from '../../common/header'
import { mapState } from 'vuex'
import { Tab, Tabs } from 'vant';
import { SubmitBar } from 'vant';
export default{
  data(){
	  return{
		  currentAddressList:[],
			invoiceTitle:"",
			"pay_active":0,
			"orderTotal":0,
			"payStyle":"在线支付",
			"orderMessage":"",
			tabNum:0
		}
	},
	components:{
	  [Tab.name]:Tab,
		[Tabs.name]:Tabs,
		[SubmitBar.name]:SubmitBar,
		PayHeader
	},
	methods:{
		orderTotalNum(){
			var totalSum = 0;
			this.orders.forEach((item)=>{
				totalSum+=item.proPrice*item.homeValue*100	
			})
			return totalSum;
		},
		paySuccess(){
			var orderObj={};
			orderObj.orders = this.orders;
			orderObj.orderMessage = this.orderMessage;
			orderObj.invoiceTitle = this.invoiceTitle;
			orderObj.payStyle = this.payStyle;
			orderObj.currentAddressList = this.currentAddressList;
			this.$store.dispatch('setCurrentorder', orderObj);
			this.$store.dispatch('getAllOrders', orderObj);
			this.$router.push({ path: "paySuccess"});	 
		},
		getPayStyle(index){
			this.tabNum = index;
			this.payStyle =  this.payStyles[index].name;
      console.log(this.payStyle);
		}
	},
	created(){
		this.currentAddressList = this.addressList.filter((item)=>{
		  return item.is_default === true
		});
	},
	computed:{
	  ...mapState([
		  "orders",
			"payStyles",
			"addressList"
		])
	},
}
	
</script>

<style scoped>
.orderDetails{
	padding-top: 1.45rem;
}
.currentAddressList{
	padding: .5rem 4%;
	background: #fff;
}
.currentAddressList ul li p{
	font-size: .4rem;
	width: 96%;
	padding: 0 2%;
}
.currentAddressList ul li p span.tel{
  float: right;	
}
.currentAddressList ul li p em{
	display: inline-block;
	vertical-align: top;
}
.currentAddressList ul li p span.addressDetail{
  display: inline-block;
  vertical-align: top;
	width: 80%;
}
.payGoodsList{
	background: #fff;
	margin-top: .5rem;
}
.payGoodsList h4{
  border-bottom:1px solid #eaeaea;
	font-size: .4rem;
	padding: .5rem 4%;
}
.ordersList li{
	  padding: 0 2%;
		font-size: .35rem;
		margin-top: .2rem;
}
.ordersList li span.orderImg{
	display: inline-block;
	width: 26%;
}
.ordersList li .orderDetail{
	display: inline-block;
}
 .orderDetail span{
	display: block;
}
.ordersList li .orderNum{
	display: inline-block;
	float: right;
	margin-right: 2%;
	margin-top: .35rem;
}
.payStylesNav{
	padding: 0 4% .5rem 4%;
	margin-top: .4rem;
}
.payStylesNav ul li{
	display: inline-block;
	margin-right: 6%;
}
.payStylesNav ul li span{
	font-size: .35rem;
	border:1px solid #d1d1d1;
	border-radius: 3px;
	padding: .3rem .5rem;
}
.payStyleBox{
	border: 1px solid #eaeaea;
	border-radius: 5px;
	margin-top: 20px;
	height: 1.4rem;
	font-size: .4rem;
	padding: .2rem 4%;
}
.orderMessage{
	  padding: 0 4% .5rem 4%;
    margin-top: .4rem;
}
.orderMessage textarea{
	width: 100%;
	font-size: .4rem;
	padding: 4px;
	border: 1px solid #d1d1d1;
  border-radius: 3px;
}
.invoiceInfo{
	  padding: 0 4% .5rem 4%;
    margin-top: .4rem;
}
.invoiceInfo p{
	font-size: .4rem;
}
.invoiceInfo input{
    height: 1.18rem;
    border: 1px solid #d1d1d1;
    border-radius: 3px;
    width: 98%;
		padding-left: 2%;
		font-size: .4rem;
		margin-top: .3rem;
}
.payStylesNav ul li.activeNav span{
	color: red;
	border: 1px solid red;
}
</style>