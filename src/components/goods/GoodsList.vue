<template>
    <div class="goods-list">
        <!-- <div class="goods-item" v-for="(list , index) in goods" :key="index">
            <router-link :to="'/home/goodsinfo/' + list.id">
                <img :src="list.img_url">
                <h3>adidas</h3>
                <div class="info">
                    <p>
                        <span class="jia">{{list.price_new}}</span> <span class="old">{{list.price_old}}</span>
                    </p>
                    <p class="mai">
                        <span>热卖中</span> <span>剩100件</span>
                    </p>
                </div>
            </router-link>
        </div> -->
        <div class="goods-item" v-for="list in goods" :key="list.id" v-on:click="goInfo(list.id)">
            <router-link :to="'/home/goodsinfo/' + list.id">
                <img :src="list.img_url">
                <h3>adidas</h3>
                <div class="info">
                    <p>
                        <span class="jia">{{list.price_new}}</span> <span class="old">{{list.price_old}}</span>
                    </p>
                    <p class="mai">
                        <span>热卖中</span> <span>剩100件</span>
                    </p>
                </div>
            </router-link>
        </div>
    </div>
</template>


<script>
export default {
    data: function(){
        return {
            goods: [
                { id: 1 ,price_new: "￥1299",price_old: "￥1299" ,img_url: require('../../images/2.jpg')},
                { id: 2 ,price_new: "￥1299",price_old: "￥1299" ,img_url: require('../../images/1.jpg')},
                { id: 3 ,price_new: "￥1299",price_old: "￥1299" ,img_url: require('../../images/2.jpg')},
                { id: 4 ,price_new: "￥1299",price_old: "￥1299" ,img_url: require('../../images/1.jpg')},
                { id: 5 ,price_new: "￥1299",price_old: "￥1299" ,img_url: require('../../images/1.jpg')}
            ]
        }
    },
    methods: {
        //this.$router 是一个路由导航对象 可以实现路由的前进后退 可以用js实现
        //this.$route 是路由参数对象，所有路由中的参数，params和query都属于他
        goInfo: function(info_id) {
            this.$router.push('/home/goodsinfo/' + info_id);
            // 后退 this.$router.go(-1);
        }
    }
}
</script>


<style scoped>
    .goods-list {
        margin-bottom: 50px;
        display: flex;
        justify-content: space-between;
        /* 两端对齐 */
        /* 先变成弹性盒子 */
        flex-wrap: wrap;
        /* 弹性盒子换行 */
        padding: 7px;
    }
    .goods-item {
        width: 49%;
        border: 1px solid rgba(202, 196, 196, 0.87);
        margin-top: 7px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .goods-item img {
        width: 100%;
    }
    .info {
        background-color: rgb(199, 197, 197);
    }
    h3 {
        color: black;
    }
    p {
        margin: 0;
        padding: 5px;
    }
    .mai {
       display: flex;
       justify-content: space-between;
       font-size: 12px; 
    }
    .jia {
        color: red;
        font-weight: 700;
        padding-right: 6px; 
    }
    .old {
        margin-top: 6px;
        text-decoration: line-through;
    }
    
</style>
