<template>
			<input class="calendar-value" type="text" @click="showCalendar" v-model="value" placeholder="请输入日期">
    		<calendar :show.sync="show" :value.sync="value" :x="x" :y="y" :begin="begin" :end="end" :range="range"></calendar>
	
</template>

<script>
import uiCalendar from '../components/calendar'

module.exports = {
        name: 'calendars',
        data: function() {
                return {
                        show: false,
                        type: "time", //date datetime
                        value: "2015-12-11",
                        begin: "2018-12-20",
                        end: "2018-12-25",
                        x: 0,
                        y: 0,
                        range: false, //是否多选
                }
        },
        methods: {
                showCalendar: function(e) {
                        e.stopPropagation();
                        var that = this;
                        that.show = true;
                        that.x = e.target.offsetLeft;
                        that.y = e.target.offsetTop + e.target.offsetHeight + 8;
                        var bindHide = function(e) {
                                e.stopPropagation();
                                that.show = false;
                                document.removeEventListener('click', bindHide, false);
                        };
                        setTimeout(function() {
                                document.addEventListener('click', bindHide, false);
                        }, 500);
                }
        },
        components: {
                calendar: uiCalendar
        }
}
</script>
<style>
.calendar-value{
        width: 100%;
		height: 40px;
		padding: 0 16px;
		border: 1px solid #eee;
		outline:none
}
</style>