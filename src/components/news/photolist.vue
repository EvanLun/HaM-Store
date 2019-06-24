<template>
    <div>
        <div class="mui-content">
			<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							耐克
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							李宁
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							万斯
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							阿迪
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							MAC
						</a>
                        <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							迪奥
						</a>
                        <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							圣罗兰
						</a>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
    data: function(){
        return {
			list: [
				{img_url: require('../../images/menu1.jpg')},
				{img_url: require('../../images/menu2.jpg')}
			]
        };
    },
    mounted() {
    	mui(".mui-scroll-wrapper").scroll({
    	  deceleration: 0.0005 
    	});
  	},
  	methods: {

  	}
}
</script>


<style scoped>
    .mui-content {
        height: 38px;
    }
    * { 
        touch-action: none;
    }
	.container ul li{
		list-style: none;
	}
</style>


