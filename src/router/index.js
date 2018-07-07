import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Detail from '@/components/detail/Detail'
import Car from '@/components/car/Car'
import Pay from '@/components/pay/Pay'
import PaySuccess from '@/components/pay/PaySuccess'
import Order from '@/components/order/Order'
import OrderDetail from '@/components/order/OrderDetail'
import My from '@/components/my/My'
import Article from '@/components/article/Article'
import ArticleDetail from '@/components/article/ArticleDetail'
import AddressList from '@/components/address/AddressList'
import AddressEdit from '@/components/address/AddressEdit'
import Collection from '@/components/collect/Collection'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
		{
		  path: '/goodDetail',
		  name: 'goodDetail',
		  component: Detail	
		},{
			path: '/car',
		  name: 'Car',
		  component: Car	
		},
		{
		  path: '/pay',
		  name: 'Pay',
		  component: Pay		
		},
		{
			path: '/paySuccess',
			name: 'PaySuccess',
			component: PaySuccess		
		},
		{
			path: '/order',
			name: 'Order',
			component: Order		
		},
		{
			path: '/orderDetail',
			name: 'OrderDetail',
			component: OrderDetail
		},
		{
			path: '/my',
			name: 'My',
			component: My
		},
		{
			path: '/article',
			name: 'Article',
			component: Article
		},
		{
			path: '/articledetail',
			name: 'ArticleDetail',
			component: ArticleDetail
		},
		{
			path: '/address',
			name: 'AddressList',
			component: AddressList
		},
		{
			path: '/addressEdit',
			name: 'AddressEdit',
			component: AddressEdit
		},
		{
			path: '/collect',
			name: 'Collection',
			component: Collection
		}
  ]
})
