<template>
  <div>
	 <ArticledetailHeader title="文章信息"></ArticledetailHeader>
	 <div class="articleDetail" v-for="(item,index) in currentArticle" :key="index">
		<div class="articleCon" v-html="item.con"></div>
		<div class="articleOperations">
			<div  @click="toggleCollect(item)">
				<van-icon name="icon3" :class="{'activeCollection':isCollected}"/> <span>收藏</span>
			</div>
			<div @click="givePraise(item)">
				<van-icon name="dianzan" :class="{'activePraise':isPraised}"/> <span v-show="collectNum===0?false:true">{{collectNum}}</span>
			</div>
		</div>
	 </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ArticledetailHeader from '../../common/header'
import { Icon } from 'vant';
export default{
  data(){
    return{
	  currentArticle:[],
	  isCollected:false,
		isPraised: false,
		collectNum:0
	 }
  },
  computed: {
  	...mapState([
  		"articles",
  	])
  },
  created(){
		var currentId = parseInt(this.$route.query.id);
		this.currentArticle = this.articles.filter((item)=>{
		  return item.id === currentId   
		});
		this.isCollected = this.currentArticle[0].isCollected;
		this.collectNum = this.currentArticle[0].collectNum;
  },
  components:{
	   ArticledetailHeader,
	   [Icon.name]:Icon
  },
  mounted(){
		console.log(this.articles);
  },
  methods:{
    toggleCollect(articleObj){
			this.isCollected = !this.isCollected
	    this.$store.dispatch('setArticle', articleObj);
	  },
		givePraise(articleObj){ 
		  this.$store.dispatch('praiseArticle', articleObj);
		 if(this.isPraised){
			  this.collectNum--
		 } else {
			 this.collectNum++
		 }
		 this.isPraised = !this.isPraised;
		}
  }
}
</script>

<style scoped lang="scss">
   .articleDetail{
	   padding-top: 1.45rem;
		 .articleCon{
		 	text-indent: 2em;
		 	font-size: .5rem;
		  padding: .3rem 4%;
		 }
   }
   .articleOperations{
      margin-bottom: 1.5rem;
	     display: flex;
      justify-content: center;
			div{
				width: 2.5rem;
				height: .6rem;
				border: 1px solid #25b5fe;
				border-radius: 30px;
				padding: .2rem 4%;
				font-size: .5rem;
				text-align: center;
				display: inline-block;
				margin: 0 2%;
			}
			ul{
				li{
					span{
						color: #25b5fe;

					}
				}
			}
   }
   .activeCollection{
	  color:red;   
   }
	 .activePraise{
		 color:red; 
	 }
</style>