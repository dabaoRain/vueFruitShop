<template>
  <div>
	<AddresseditHeader title="地址编辑"></AddresseditHeader>
	<div class="addressList">
		<van-address-edit
			:area-list="areaList"
			:address-info="addressEdit"
			show-postal
			show-delete
			show-set-default
			show-search-result
			@save="onSaveAddress"
		/>
	</div>
  </div>	
</template>


<script>
import areaList from '../area/area';
import { AddressEdit } from 'vant';
import { Area } from 'vant';
import AddresseditHeader from '../../common/header';
import { AddressList } from 'vant';
import { mapState } from 'vuex'
export default{
  data(){
    return{
	  areaList,
	  currentAddressInfo:{},
      searchResult: []
	  }
  },
  components:{
	AddresseditHeader,
	[AddressEdit.name]:AddressEdit,
	[Area.name]:Area,
  },
  computed:{
  	...mapState([
  		'addressEdit',
		  'addressList'
  	])
  },
  methods:{
		onSaveAddress(content){
			debugger
			if(!content.id){
			  var currentAddressListLen= this.addressList.length;	
				content.id = (currentAddressListLen+1).toString();
				if(content.province === '北京市' || content.province === '天津市' || content.province === '上海市'||content.province === '重庆市'){
				   content.address = content.province+content.county+content.address_detail;	
				} else{
					content.address = content.province+content.city+content.county+content.address_detail;
				}
				if(content.is_default){
				  this.addressList.forEach((item,index)=>{
				  	item.is_default = false;	
				  });	
				}
				this.addressList.push(content);
			} else{
			  var addressId = content.id;
				if(content.province === '北京市' || content.province === '天津市' || content.province === '上海市'||content.province === '重庆市'){
					content.address = content.province+content.county+content.address_detail;	
				} else{
					content.address = content.province+content.city+content.county+content.address_detail;
				}
				if(content.is_default){
				  this.addressList.forEach((item,index)=>{
				  	item.is_default = false;	
				  });	
				}
				this.addressList.forEach((item,index)=>{
					if(item.id === addressId){
						this.addressList.splice(index,1,content);
				  }
				});
			}
			this.$store.dispatch('setAddresslist',this.addressList); 
			this.$router.push({ path: "address"}); 
		}
  },
  created(){
  }
}	
</script>

<style scoped>
  .addressList{
	  padding-top: 1.45rem;
  }
	.van-picker__toolbar{
	}
</style>

