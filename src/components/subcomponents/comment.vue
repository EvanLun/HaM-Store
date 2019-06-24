<template>
    <div>
        <div class="comment">
            <h3>发表评论</h3>
            <textarea rows="4" cols="20" autofocus="autofocus" v-model="content"></textarea>
            <mt-button type="primary" class="mint-button mint-button--primary mint-button--large" v-on:click="add">提交评论</mt-button>
        </div>
        <div class="content" v-for="(list , index) in comments" :key="index">
            <div class="content_time">
                <span>第{{ list.id }}楼 </span><span>用户: {{ list.root }}</span> <span>发表时间: {{ list.time }}</span>
            </div>
            <div class="content_content">
                <span>{{ list.content }}</span>
            </div>
        </div>
        <mt-button class="mint-button mint-button--danger mint-button--large is-plain">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data: function() {
        return{
            id: 1,
            root: '',
            time: '',
            content: '',
            comments: [
                {id: 1 , root: '匿名用户',time: '2019-5-19 19:60:37' , content: '这他妈的也太假了！'}
            ]
        };
    },
    methods: {
        add: function(){
            var ids = this.id;
            ids++;
            this.id = ids; 
            var com = {id: this.id, root: '匿名用户', time: new Date(), content: this.content }
            this.comments.push(com);
        }
    }
}
</script>


<style scoped>
    textarea {
        margin-bottom: 0px;
    }
    .mt-button {
        width: 100%;
    }
    .content_time {
        background-color: #ccc;
        font-size: 12px;

    }
    .content_time span {
        display: inline-block;
        height: 20px;
        line-height: 20px;
    }
    .content_content span {
        display: inline-block;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        text-indent: 2em;
    }
</style>

