<template>
  <div class="paySuccess">
	 <PaySuccessHeader title="结算"></PaySuccessHeader>
	 <div class="paySuccessInfo">
		 <div class="icon_success">
			 <van-icon name="chenggong" /> 
		 </div>
		 <h4>购买成功</h4>
		 <div class="successBack">
		    已收到您的货款,请留意
			    <span @click="goOrderDetail">订单详情</span>
            以及
            <router-link to="/order">我的订单</router-link>
            另外祝您生活愉快 感谢您的支持与厚爱
		 </div>
	 </div>
  </div>
</template>

<script>
import PaySuccessHeader from '../../common/header'
import { Icon } from 'vant';
export default{
  data(){
    return{
	  }
  },
  components:{
     [Icon.name]:Icon,
	   PaySuccessHeader
  },
	methods:{
		goOrderDetail(){
			this.$router.push({ path: "orderDetail"});
		}
	}
} 	
</script>

<style scoped>
  .paySuccess{
  }
  .paySuccessInfo{
     padding-top: 1.45rem; 
	 text-align: center;
  }
  .icon_success{
	  margin-top: 2rem;
	  font-size: 2.8rem;
      color: #52b838;
  }
  .successBack{
     width: 80%;
	 margin: .5rem auto;
	 text-align: center;
	 font-size: .36rem;
  }
</style>