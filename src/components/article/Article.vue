<template>
  <div class="articles">
	 <ArticleHeader title="健康水果"></ArticleHeader>

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
import ArticleHeader from '../../common/header';
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
    HomeFooter,
		ArticleHeader
  },
  computed:{
	  ...mapState([
	  	'articles',
			'nowIndex'
	  ])
  },
	created(){
	  this.getArticles();
    this.$store.dispatch('setIndex', 1);
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

<style scoped>
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
  }
  .articlesList li{
     padding: .3rem 2%;
	 border-bottom: 1px dotted #ccc;
  }
  .articlesList li .article_title{
	 font-size: .5rem;
	 color: #505b63;
  }
  .articlesList li .article_img{
	 height: 10rem;  
  }
  .articlesList li .article_publishDate{
  font-size: .4rem;
  }
</style>