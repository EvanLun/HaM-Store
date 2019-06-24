<template>
    <div>
        <h2 class="new_title">最新潮鞋资讯</h2>
        <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="(item,index) in news1" :key="index">
				<router-link :to="'/home/infos/' + item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<h3>{{ item.title }}</h3>
						<p class='mui-ellipsis'>
                            <span>{{ item.time }}</span>
                            <span>{{ item.number }}</span>
                        </p>
					</div>
				</router-link>
			</li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
           news1: [
               {id: 1 , time: '发表时间: 2019-6-18 21.35.18', title: 'AJ1 赛文奥特曼' , img_url: require('../../images/menu1.jpg') , number: '点击 13'},
               {id: 2 , time: '发表时间: 2018-6-18 21.35.18', title: 'AJ2 泰罗奥特曼' , img_url: require('../../images/menu2.jpg') , number: '点击 12'},
               {id: 3 , time: '发表时间: 2017-6-18 21.35.18', title: 'AJ3 艾迪奥特曼' , img_url: require('../../images/menu3.jpg') , number: '点击 11'},
               {id: 4 , time: '发表时间: 2016-6-18 21.35.18', title: 'AJ4 罗偶奥特曼' , img_url: require('../../images/menu2.jpg') , number: '点击 10'}
           ]
        }
    },
    methods: {
        
    }
}
</script>



<style scoped>
    .new_title {
        text-align: center;
    }
    .mui-ellipsis {
        color: blue;
        display: flex;
        font-size: 12px;
        justify-content: space-between;
    }
    .mui-media-body h3 {
        color: yellowgreen;
        font-size: 18px;
    }
    .mui-media-object .mui-pull-left {
        border: 1px solid red;
    }
</style>
