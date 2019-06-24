<template>
    <div>
       
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <!-- 轮播图组件开始 -->
					<swip :images="images" :isfull="false"></swip>
                    <!-- 轮播图组件结束 -->
				</div>
			</div>
		</div>
        
        <!-- 商品购买区域 -->
        <div class="mui-card">
			<div class="mui-card-header">万斯 （15W）周年庆典 经典黑白</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					市场价 ： <del class="old">￥155</del>&nbsp;&nbsp; 销售价 ：<span class="new">￥366</span><br><br>
                    <span class="number">购买数量：</span>
                    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
					    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="jian" v-bind:disabled="numbers === 0">-</button>
					    <input id="test" class="mui-input-numbox" type="number"  v-bind:value="numbers" />
					    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="jia">+</button>
				    </div>
                    <br><br>
                    <mt-button type="primary">立即购买</mt-button>
                    <mt-button type="danger" >加入购物车</mt-button>
				</div>
			</div>
		</div>
        <!-- 商品购买区域结束 -->
        <div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号：SD0123456789</p>
                    <p>库存情况：45件</p>
                    <p>上架时间: 2019-6-22 21:30:22</p>
				</div>
			</div>
			<div class="mui-card-footer">
                <mt-button type="primary" class="mint-button mint-button--primary mint-button--large is-plain">图文介绍</mt-button>
                <br><br>
                <mt-button type="danger" class="mint-button mint-button--danger mint-button--large is-plain">商品评论</mt-button>
            </div>
		</div>

    <br><br>
    </div>
</template>

<script>
import swip from '../subcomponents/swip.vue'
export default {
    data: function(){
        return{
            images:[{src:require('../../images/menu3.jpg')},{src:require('../../images/menu2.jpg')}],
            numbers: 0,
            bollflag: false
        }
    },
    components: {
        swip
    },
    methods: {
        jian: function(){
            
            this.numbers--;
        },
        jia: function(){
            this.numbers++;
        }
    }
}
</script>

<style>
    div.mui-numbox {
        height: 20px;
    }
    .new {
        font-weight: 700;
        color: red;
        font-size: 20px;
    }
    .mui-card-footer {
        display: block;
    }
</style>
