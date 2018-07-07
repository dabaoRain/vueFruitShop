<template>
  <div class="homePage">
	  <van-swipe :autoplay="3000">
			<van-swipe-item v-for="(sliderFruit, index) in sliderFruitData" :key="sliderFruit.id">
				<img :src="sliderFruit.proImg" @click="getProDetail(sliderFruit.id)"/>
			</van-swipe-item>
		</van-swipe>
  </div>
</template>


<script>
 import { mapState } from 'vuex'
import { Swipe, SwipeItem } from 'vant';
export default{
  data(){
    return{
		  sliderFruitData:[]
	  }
  },
	components:{
	   [Swipe.name]:Swipe,
		 [SwipeItem.name]:SwipeItem
	},
	computed: {
		...mapState([
			'addressList',
			"fruitData"
		])
	},
	created(){
		if(this.fruitData.length === 0){
		  this.getFruitData();
		}
		if(this.addressList.length === 0){
		  this.getAddressList();
		}
	},
	methods:{
	   getFruitData(){
			 this.$http.get("../../../../static/fruit.json").then((res)=>{
				 var fruitData = res.data.data.fruitData;
				 this.sliderFruitData = fruitData.filter((item)=>{
					 return item.sliderImg === true
				 });
				 this.$store.dispatch('setFruit', fruitData);
				 /* this.$store.dispatch('setAddresslist',addressList); */
			 })
		 },
		 getAddressList(){
			 this.$http.get("../../../../static/fruit.json").then((res)=>{
			 	var addressList = res.data.data.addressList;
			 	 this.$store.dispatch('setAddresslist',addressList); 
			 }) 
		 },
		 getProDetail(proId){
		   this.$router.push({ path: "goodDetail", query: { id: proId } });
		 }
 	}
}
</script>

<style scoped>
</style>