<template>
    <div>
        <h2>{{ a.title }}</h2>
        <div class="times">
            <span>{{ a.time }}</span>
            <span>{{ a.dian }}</span>
        </div>
        <div class="content">
            <p>{{ a.content }}</p>
        </div>
        <!-- 评论组件 -->
        <comment></comment>
    </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'
export default {
    data: function() {
        return {
            a:  {id: 1 , title: 'AJ1 赛文奥特们你们小时候看过没有？',time: '发布时间: 2019-6-19 9:15:36',dian:'点击 20 次 ',content: "赛文·奥特曼是特摄剧《赛文·奥特曼》中的主人公，来自M78星云·光之国的恒星观测员340号aa来自M78星云·光之国的恒星观测员340来自M78星云·光之国的恒星观测员340来自M78星云·光之国的恒星观测员340来自M78星云·光之国的恒星观测员340来自M78星云·光之国的恒星观测员340来自M78星云·光之国的恒星观测员340来自M78星云·光之国的恒星观测员340来自M78星云·光之国的恒星观测员340来自M78星云·光之国的恒星观测员340来自M78星云·光之国的恒星观测员340来自M78星云·光之国的恒星观测员340来自M78星云·光之国的恒星观测员340来自M78星云·光之国的恒星观测员340来自M78星云·光之国的恒星观测员340来自M78星云·光之国的恒星观测员340来自M78星云·光之国的恒星观测员340来自M78星云·光之国的恒星观测员340"},
        };
    },
    methods: {
        
    },
    components: {
        comment
    }
}
</script>

<style scoped>
    h2 {
        text-align: center;
        font-size: 16px;
        color: red;
        margin-bottom:30px; 
    }
    .times {
        font-size: 12px;
        color: blue;
        display: flex;
        justify-content: space-between;
        border-bottom:1px solid #000;
        padding-bottom:10px; 
    }
    .content p {
        text-indent: 2em;
    }
</style>

