const actions={
	
	//水果数据
	setFruit({commit},data){
		commit('SET_FRUIT',data)
	},
	//地址列表
	setAddresslist({commit},data){
		commit('SET_ADDRESSLIST',data)
	},
	
    //添加到购物车
    addCar({commit},data){
        commit('ADD_CARTS',data)
    },
	//购物车结算
	setOrders({commit},data){
		commit('SET_ORDERS',data)
	},
	//全部订单
	getAllOrders({commit},data){
		commit('GET_ORDERS',data)
	},
	
	//当前订单
	setCurrentorder({commit},data){
		commit('SET_CURRENTORDER',data)
	},
	//设置当前导航索引
	setIndex({commit},data){
		commit('SET_INDEX',data)
	},
	
	//设置当前地址编辑对象
	setAddressedit({commit},data){
		commit('SET_ADDRESSEDIT',data)  
	},
	//设置当前收货地址
	defaultAddress({commit},data){
		commit('DEFAULT_ADDRESS',data)  
	},
	//新增时清空当前编辑地址，避免新增输入框里面有编辑地址时的内容
	emptyAddress({commit}){
		commit('EMPTY_ADDRESS')  
	},
	//获取全部文章
	getArticle({commit},data){
    commit('GET_ARTICLE',data)
  },
  //文章收藏
  setArticle({commit},data){
    commit('SET_ARTICLE',data)
  },
	
	//文章点赞
	praiseArticle({commit},data){
		commit('SET_ARTICLE',data)
	},
	//商品收藏
	collectGoods({commit},data){
			commit('COLLECT_GOODS',data)
	}
}

export default actions