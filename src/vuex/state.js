const state={
  fruitData:localStorage["fruitData"]?JSON.parse(localStorage["fruitData"]): [], //水果数据
	addressList:localStorage["addressList"]?JSON.parse(localStorage["addressList"]): [], //地址列表
	addressEdit:localStorage.getItem("addressEdit")?JSON.parse(localStorage.getItem("addressEdit")):{}, //当前编辑地址对象
	carts:localStorage["carts"]?JSON.parse(localStorage["carts"]): [], //购物车
	orders:localStorage["orders"]?JSON.parse(localStorage["orders"]): [], //本次结算订单
	ordersList:localStorage["ordersList"]?JSON.parse(localStorage["ordersList"]): [], //全部订单
	payStyles:[
	  {
		  id:"1",
	    name:"在线支付",
		  introduce:"支持支付宝支付、微信支付、银行卡支付、财付通等"
	  },
	  {
		  id:"2",
		  name:"蚂蚁花呗",
		  introduce:"花呗分期是花呗联合天猫淘宝推出的，面向互联网的赊购服务，通过支付宝轻松还款，0首付"
	  },
	  {
	    id:"3",
	    name:"货到付款",
		  introduce:"货到再付款，支持现金交易" 
	  }
	],
  currentOrder:localStorage.getItem("currentOrder")?JSON.parse(localStorage.getItem("currentOrder")):{}, //当前操作订单
	nowIndex:localStorage.getItem("nowIndex")?JSON.parse(localStorage.getItem("nowIndex")):0,
	articles:localStorage["articles"]?JSON.parse(localStorage["articles"]): [], //全部文章
	articlesCollect:localStorage["articlesCollect"]?JSON.parse(localStorage["articlesCollect"]): [], //收藏文章
	goodsCollect:localStorage["goodsCollect"]?JSON.parse(localStorage["goodsCollect"]): [], //收藏商品
}

export default state