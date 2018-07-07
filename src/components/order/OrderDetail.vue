<template>
  <div class="orderDetail">
     <OrderDetailHeader title="订单详情"></OrderDetailHeader>
	 <div class="orderDetails">
	 	<div class="currentAddressList">
	 		<ul>
	 			<li v-for="(item,index) in currentOrder.currentAddressList">
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
				<li v-for="(item,index) in currentOrder.orders">
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
			<div class="orderRemarks">
				<van-cell-group>
					<van-cell title="支付方式" :value="payStyle"/>
					<van-cell title="发票信息" :value="invoiceTitle" label="公司名称"/>
					<van-cell title="订单留言" :value="orderMessage"/>
				</van-cell-group>
			</div>
	 	</div>
	 </div>
  </div>
</template>

<script>
import OrderDetailHeader from '../../common/header'
import { mapState } from 'vuex'
import { Cell, CellGroup } from 'vant';
export default{
  data(){
    return{
		  payStyle:"",
			invoiceTitle:"",
			orderMessage:""
	  }
  },
  components:{
    OrderDetailHeader,
	  [Cell.name]: Cell,
	  [CellGroup.name]: CellGroup
  },
  computed:{
    ...mapState([
    	"currentOrder"
    ])
  },
  mounted:function(){
  },
  created(){
		 this.payStyle = this.currentOrder.payStyle
		 this.invoiceTitle = this.currentOrder.invoiceTitle
		 this.orderMessage = this.currentOrder.orderMessage
  }
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
	display: inline-block;
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
	padding: 2px;
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
</style>