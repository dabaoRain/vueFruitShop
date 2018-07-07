<template>
   <div class="homePage">
	  <HomeContainer></HomeContainer>
	  <HomeFooter></HomeFooter>
   </div>
</template>

<script>
import HomeContainer from './pages/HomeContainer'
import HomeFooter from '../../common/FooterBar'
export default{
   components:{
		 HomeContainer,
		 HomeFooter
   }
}
</script>

<style scoped>
	
</style>