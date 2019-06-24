<template>
    <div>
        <!-- 搜索框 -->
        <div class="search">
            
            <input type="text" :value="commid" v-on:blur="lose" v-on:focus="acquire()">
            <span :class="taxon"></span>
        </div>
        <!-- home轮播图组件 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in images" v-bind:key="index">
                <a href="#">
                    <img v-bind:src="item.src">
                </a>
            </mt-swipe-item>
        </mt-swipe>
         <!-- home轮播图组件结束 -->
         <!-- 导航条组件开始 -->
		    <ul class="mui-table-view mui-grid-view mui-grid-9">
		        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/home/news">
		                <img src="../../images/menu1.jpg" alt="1">
		                <div class="mui-media-body">潮鞋资讯</div></router-link></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/home/photolist">
		                <img src="../../images/menu2.jpg" alt="1">
		                <div class="mui-media-body">Email</div></router-link></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                <img src="../../images/menu3.jpg" alt="1">
		                <div class="mui-media-body">Chat</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                <img src="../../images/menu2.jpg" alt="1">
		                <div class="mui-media-body">location</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                <img src="../../images/menu1.jpg" alt="1">
		                <div class="mui-media-body">Search</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                <img src="../../images/menu3.jpg" alt="1">
		                <div class="mui-media-body">Phone</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                <img src="../../images/menu2.jpg" alt="1">
		                <div class="mui-media-body">Phone</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                <img src="../../images/menu1.jpg" alt="1">
		                <div class="mui-media-body">Phone</div></a></li>        
		    </ul> 
         <!-- 导航条组件结束 -->
         <!-- 商品列表组件 -->
         <GoodsList></GoodsList>
    </div>
</template>

<script>
import GoodsList from '../goods/GoodsList.vue'
export default {
    data: function(){
      return {
          commid:"   搜索商品",
          taxon:'mui-icon mui-icon-search',
          images:[{src:require('../../images/timg.png')},{src:require('../../images/timg1.png')}]
      }
    },
    methods: {
      acquire: function(){
            this.commid = "";
            this.taxon = "";
      },
      lose: function(){
            this.commid = "         搜索商品";
            this.taxon = "mui-icon mui-icon-search";
      }
    },
    components: {
      GoodsList
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 30px;
    height: 30px;
  }

  .mui-media-body {
    font-size: 13px;
    
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
.search {
    background-color: #fff;
    height: 40px;
    position: relative;
}
.search input {
  background-color: #ddd;
  color: #bbb;
  font-size: 12px; 
  text-align: center;
  position: absolute;
  left: 1%;
  width: 98%;
  margin: 0;
  padding: 0;
  height: 30px;
  margin-top: 5px;
}
span.mui-icon.mui-icon-search::before {
  position: absolute;
  left: 40%;
  top: 28%;
  color: #aaa;
  font-size: 18px;
}
</style>

