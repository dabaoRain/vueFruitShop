<template>
  <div>
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(sliderFruit, index) in sliderFruitData" :key="sliderFruit.id">
				<img :src="sliderFruit.proImg" @click="getProDetail(sliderFruit.id)"/>
			</van-swipe-item>
		</van-swipe>
	  <ul class="container">
	  	<li v-for="(listFruit,index) in listFruitData" :key="listFruit.id" @click="getProDetail(listFruit.id)">
			<div class="proImg">
				<img :src="listFruit.proImg"/>
			</div>
			<span>{{listFruit.proName}}</span>
			<span>￥{{listFruit.proPrice}}</span>
	  	</li>
	  </ul>     
  </div>	
</template>

<script>
 import { mapState } from 'vuex'
import { Swipe, SwipeItem } from 'vant';
export default{
  data(){
    return{
			sliderFruitData:[],
	    listFruitData:[]
	  }
  },
	components:{
		 [Swipe.name]:Swipe,
		 [SwipeItem.name]:SwipeItem
	},
	mounted:function(){
		if(this.fruitData.length ===0){
		  this.getFruitData()		
		} else{
			this.listFruitData = this.fruitData.filter((item)=>{
				return item.sliderImg === false
			});
			this.sliderFruitData = this.fruitData.filter((item)=>{
			return item.sliderImg === true
			});
		};
		this.getAddressList();
	},
	created(){
		this.$store.dispatch('setIndex', 0);
	},
	computed: {
		...mapState([
			'addressList',
			"fruitData"
		])
	},
	methods:{
	   getFruitData(){
			 this.$http.get("../../../../static/fruit.json").then((res)=>{
				 var fruitData = res.data.data.fruitData;
				 this.listFruitData = fruitData.filter((item)=>{
					 return item.sliderImg === false
				 });
				 this.sliderFruitData = fruitData.filter((item)=>{
				 	return item.sliderImg === true
				 });
				 this.$store.dispatch('setFruit', fruitData);
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
  .container{
	  display:flex;
    width:100%;
	}
	.container li{
	   flex:1;
     text-align:center;
		 padding:0 2%;
		 font-size: .2rem;
		 color: #ff660a;
	}
	.container li .proImg img{
	  width: 80%;
	}
	.container li span{
		display: block;
	}
</style>