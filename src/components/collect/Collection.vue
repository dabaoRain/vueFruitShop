<template>
  <div class="collections">
	 <CollecHeader title="我的收藏"></CollecHeader>
	 <div class="collectTab">
		  <van-tabs :active="active">
				<van-tab>
					<div slot="title">商品</div>
					<div class="goodsCollect">
						 <ul>
							  <li v-for="(item,index) in goodsCollect" @click="getProDetail(item.id)">
									 <div class="goodsTitle">
									 	<span>{{item.proName}}</span>
									 	<em>￥{{item.proPrice}}</em>
									 </div>
									 <div class="goodsImg">
									 	  <img :src="item.proImg" />
									 </div>
								</li>
						 </ul>
					</div>
				</van-tab>
				<van-tab>
					<div slot="title">文章</div>
					<div>
						 <ul class="articlesList">
							 <li v-for="(article,index) in articlesCollect" :key="index" @click="goArticleDetail(article.id)">
							 	<div class="article_title">
							 		{{article.title}}
							 	</div>
							 	<div class="article_img">
							 		<img :src="article.img"/>
							 	</div>
							 	<div class="article_publishDate">
							 		发布日期:{{article.publishDate}}
							 	</div>
							 </li> 
						 </ul>
					</div>
				</van-tab>
			</van-tabs>
	 </div>
  </div>	
</template>

<script>
 import { mapState } from 'vuex'
import CollecHeader from '../../common/header';
import { Tab, Tabs } from 'vant';
export default{
  data(){
    return{
		  active:0 
	  }
  },
  components:{
	   CollecHeader,
		 [Tab.name]:Tab,
		 [Tabs.name]:Tabs
  },
	computed:{
		...mapState([
			'articlesCollect',
			"goodsCollect"
		])
	},
	created(){
		console.log(this.articlesCollect);
		console.log(this.goodsCollect);
	},
	methods:{
	  goArticleDetail(id){
	  	this.$router.push({	
	  		path:"articledetail",
	  		query:{
	  			id:id
	  		}
	  	})
	  },
		getProDetail(proId){
			this.$router.push({ path: "goodDetail", query: { id: proId } });
		}
	}
}
</script>

<style scoped lang="scss">
  .collectTab{
		padding-top: 1.45rem;
	}
	.articlesList{
	  background: #fff;
	  width: 100%;
		li{
		  padding: .3rem 2%;
		  border-bottom: 1px dotted #ccc;	
			.article_title{
			  font-size: .5rem;
			  color: #505b63;
			}
			.article_img{
			  height: 10rem;  
			}
			.article_publishDate{
			  font-size: .4rem;
			}
		}
	}
	.goodsCollect{
		ul{
			li{
				border-bottom: 1px solid #d1d1d1;
				padding: 0.4rem 2%;
				.goodsTitle{
					font-size: .4rem;
					margin: .3rem 0;
					em{
						float: right;
					}
				}
			}
		}
	}
</style>