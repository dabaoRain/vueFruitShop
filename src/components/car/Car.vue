<template>
	<div class="car">
		<CarHeader title="购物车"></CarHeader>
	   <ul style="padding-top: 1.45rem;">
	      <li v-for="(item,index) in carts" :key="index">
	        <div class="carProList">
	           <div class="carProSelect carProInfo" @click="danxuanChecked(item)">
	           	   <van-icon v-show="item.danxuan" name="checkbox-marked-circle" class="icon_check icon_checkAll"/>
			 	         <van-icon v-show="!item.danxuan" name="checkboxround0" class="icon_check"/>
	           </div>
	           <div class="carProImg carProInfo">
	           	  <img :src="item.proImg"/>
	           </div>
	           <div class="cartInformation carProInfo">
	           	  <div>
	           	  	{{item.proName}}
	           	  </div>
	           	  <div>
	           	  	{{item.proPrice}}
	           	  </div>
	           	  <div>
	           	  	<van-stepper v-model="item.homeValue" />
	           	  </div>
	           </div>
	           <div class="deleteCarPro carProInfo" @click="shanchu(index)">
	           	  <van-icon name="shanchu" />
	           </div>
	        </div>
	      </li>
	   </ul>
	    <van-submit-bar
			  :price="sum()"
			  button-text="提交订单"
			  @submit="onSubmit"
			>
			 <div @click="toggleCheckedAll" class="icon_quanxuan" v-show="carts.length===0?false:true">
			 	  <van-icon v-show="checkedAll" name="checkbox-marked-circle" class="icon_check icon_checkAll"/>
			 	  <van-icon v-show="!checkedAll" name="checkboxround0" class="icon_check"/>
			 	全选
			 </div>
			</van-submit-bar>
	</div>
</template>

<script>
 import { mapState } from 'vuex'
 import { Checkbox, CheckboxGroup } from 'vant';
 import { Card } from 'vant';
 import { Stepper } from 'vant';
 import { SubmitBar } from 'vant';
 import { Icon } from 'vant';
 import { mapMutations} from "vuex";
 import CarHeader from '../../common/header';
 export default{
    data(){
     return{
     	checkedAll:true
     }
   },
   components:{
     [Checkbox.name]:Checkbox,
     [CheckboxGroup.name]:CheckboxGroup,
     [Card.name]:Card,
     [Stepper.name]:Stepper,
     [SubmitBar.name]:SubmitBar,
     [Icon.name]:Icon,
		 CarHeader
   },
   computed:{
	 ...mapState([
	   "carts"
     ])
   },
	 created(){
		 console.log(this.carts);
	 },
   methods:{
		 ...mapMutations(["shanchu"]),
     toggleCheckedAll(){
       this.checkedAll= !this.checkedAll;
       if(!this.checkedAll){
       	 this.carts.forEach((item)=>{
       	   item.danxuan = false  
       	 })
       }else{
       	 this.carts.forEach((item)=>{
       	   item.danxuan = true  
       	 })
       }
     },
     danxuanChecked(cart){
       cart.danxuan = !cart.danxuan;
       if(!cart.danxuan){
         this.checkedAll = false
       }
       var isExitCheckedNo = this.carts.every(item=>{
         return item.danxuan === true	 
       });
       if(isExitCheckedNo){
         this.checkedAll = true	
       }else{
       	this.checkedAll = false
       }
     },
     sum(){
       var totalSum = 0;
       this.carts.forEach((item)=>{
         if(item.danxuan){
           totalSum+=item.proPrice*item.homeValue*100	
         }
       })
       return totalSum
     },
     onSubmit(){
     	var pays = this.carts.filter((item)=>{
     		return item.danxuan === true
     	});
     	this.$store.dispatch('setOrders', pays);
		  this.$router.push({ path: "pay"});	
     }
   }
 }
</script>

<style scoped lang="scss">
	.carProList{
		padding: .5rem 2%;
		background: #fff;
		.carProInfo{
			display: inline-block;	
		}
	}
  .carProSelect{
  	width: 10%;
  	vertical-align: middle;
  }
  .carProImg{
  	width: 28%;
  	vertical-align: top;
  }
  .cartInformation{
   width: 48%;
  	vertical-align: middle;
  	font-size: .4rem;	
  }
  .deleteCarPro{
  	width: 4%;
  	vertical-align: middle;
		margin-right: 2%;
		font-size: .4rem;
  }
  .icon_quanxuan{
  	margin-left: 2%;
  }
  .icon_check{
  	font-size: 0.6rem;
  }
  .icon_checkAll{
  	color: #38adff;
  }
</style>