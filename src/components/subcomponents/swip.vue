<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in images" v-bind:key="index">
                <a href="#">
                    <img v-bind:src="item.src" :class="{full: isfull}">
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props: ["images","isfull"]
}
</script>


<style lang="scss" scoped>
.mint-swipe {
    text-align: center;
  height: 150px;
    img {
      height: 100%;
    }
}
.full {
    width: 100%;
}


</style>

