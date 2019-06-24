import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import ShopcarContainer from '../components/tabbar/ShopcarContainer.vue'
//news路由
import NewsList from '../components/news/NewsList.vue'
import NewsInfo from '../components/news/NewsInfo.vue'
import photolist from '../components/news/photolist.vue'
//subcomponents路由

//goods路由
import GoodsInfo from '../components/goods/GoodsInfo.vue'

Vue.use(VueRouter)
// 3. 创建路由对象
var router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/home' },
    {path: '/home', component: HomeContainer},
    {path: '/member', component: MemberContainer},
    {path: '/search', component: SearchContainer},
    {path: '/shopcar', component: ShopcarContainer},
    {path: '/home/news', component: NewsList},
    {path: '/home/infos/:id', component: NewsInfo},
    {path: '/home/photolist', component: photolist},
    {path: '/home/goodsinfo/:id', component: GoodsInfo}
  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router