<template>
  <div>
	<AddresslistHeader title="收货地址"></AddresslistHeader> 
	<div class="addressList">
		<van-address-list
		v-model="chosenAddressId"
		:list="list"
		@edit="getCurrentAddress"
		@select="setDeaultAddress"
		@add="onAddList"
		/>  
	</div>
  </div>	
</template>


<script>
import AddresslistHeader from '../../common/header';
 import { mapState } from 'vuex'
import { AddressList } from 'vant';
import { Dialog } from 'vant';
export default{
  data(){
    return{
	  list:[],
	  chosenAddressId: ""
	}
  },
  components:{
    [AddressList.name]:AddressList,
	  AddresslistHeader,
		[Dialog.name]:Dialog
  },
  computed:{
    ...mapState([
    	"addressList"
    ])
  },
  mounted(){
    this.list = this.addressList;
	   console.log(this.list);
		 var isExitDefaultAddress = this.list.every((item,index)=>{
			 return item.is_default === false
		 });
     console.log(isExitDefaultAddress);
		 if(isExitDefaultAddress){
			 Dialog.alert({
				message: '请设置默认收货地址'
			 }).then(() => {
			 }); 
		 }else{
			 this.list.forEach((item)=>{
			 	if(item.is_default){
			 		this.chosenAddressId = item.id 
			 	}
			 });
		 }
			 
			 
  },
  methods:{
    getCurrentAddress(obj,index){
			this.$store.dispatch('setAddressedit', obj);
			this.$router.push({ path: "addressEdit"});	 
    },
		setDeaultAddress(item,index){
			 this.$store.dispatch('defaultAddress', item);
		},
		onAddList(){
			this.$store.dispatch('emptyAddress');
		  this.$router.push({ path: "addressEdit"});	  	
		}
  }
}	
</script>

<style scoped>
  .addressList{
	  padding-top: 1.45rem;
  }
</style>