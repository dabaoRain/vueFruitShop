<template>
  <div class="articles">
	 <h3 class="articles_header">健康水果</h3>

	 <ul class="articlesList">
	   <li v-for="(article,index) in articlesLoad" :key="index" @click="goArticleDetail(article.id)">
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
	 <HomeFooter></HomeFooter>
  </div>
</template>

<script>
 import { mapState } from 'vuex'
import { Icon } from 'vant';
import HomeFooter from '../../common/FooterBar'
export default{
  data(){
    return{
	    articlesLoad:[]
	  }
  },
  components:{
    HomeFooter
  },
  computed:{
	  ...mapState([
	  	'articles'
	  ])
  },
	created(){
	  this.getArticles()  	
	},
  methods:{
		getArticles(){
			 console.log(this.articles);
			 if(this.articles.length !==0){
			   	this.articlesLoad = this.articles;
			 }else{
				this.$http.get("../../../../static/fruit.json").then((res)=>{
					this.articlesLoad = res.data.data.articles;
					this.$store.dispatch('getArticle',res.data.data.articles);
				})  
			 }
		},
	 goArticleDetail(id){
	    this.$router.push({	
				path:"articledetail",
				query:{
				  id:id
			  }
	    })
	 }
  }
}
</script>

<style scoped lang="scss">
  .articles_header{
	 width: 100%;
	 height: 1.45rem;
	 line-height: 1.45rem;
	 font-size: 0.45rem;
	 text-align: center;
	 background: #fff;
	 position: fixed;
  }
  .articlesList{
	 padding-top: 1.45rem;
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
</style>