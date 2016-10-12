<script>

import Vue from 'vue'
const MINUTE = 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24
const WEEK = DAY * 7
const MONTH = DAY * 30
const YEAR = DAY * 365
const ZHCN = [
	  "%s 秒前",
	  "%s 分钟前",
	  "%s 小时前",
	  "%s 天前",
	  "%s 周前",
	  "%s 月前",
	  "%s 年前"
]
let locales = {
		'en-US': ZHCN,
		'zh-CN': ZHCN,
		'zh-TW': ZHCN
 }



function pluralOrSingular(data, locale) {
        const count = Math.round(data)
        if (Array.isArray(locale)) {
                return count > 1 ? locale[1].replace(/%s/, count) : locale[0].replace(/%s/, count)
        }
        return locale.replace(/%s/, count)
}

function formatTime(time) {
        const d = new Date(time)
        return d.toLocaleString()
}

const time = {
        name: 'mc-time',
	   
	    props: {
	            since: {
						required: true,
						coerce(val) {
								return new Date(val).getTime()
						}
				},
				locale: {
				
				        type: String,
						default: 'zh-CN'
				},
				maxTime: Number,
				autoUpdate: Number,
				format: Function
	    },
	   
	    template: '<span v-text="timeago"></span>',
		
		data() {
				return {
						now: new Date().getTime()
				}
		},
		
		computed: {
				currentLocale() {
						const current = locales[this.locale || locale]
						if (!current) {
								return locales[locale]
						}
						return current
				},
				timeago() {
						const seconds = this.now / 1000 - this.since / 1000
		
						if (this.maxTime && seconds > this.maxTime) {
								clearInterval(this.interval)
								return this.format ? this.format(this.since) : formatTime(this.since)
						}
		
						const ret = seconds < MINUTE ? pluralOrSingular(seconds, this.currentLocale[0]) : seconds < HOUR ? pluralOrSingular(seconds / MINUTE, this.currentLocale[1]) : seconds < DAY ? pluralOrSingular(seconds / HOUR, this.currentLocale[2]) : seconds < WEEK ? pluralOrSingular(seconds / DAY, this.currentLocale[3]) : seconds < MONTH ? pluralOrSingular(seconds / WEEK, this.currentLocale[4]) : seconds < YEAR ? pluralOrSingular(seconds / MONTH, this.currentLocale[5]) : pluralOrSingular(seconds / YEAR, this.currentLocale[6])
		
						return ret
				}
		},
		
		ready() {
				if (this.autoUpdate) {
						this.update()
				}
		},
		
		methods: {
				update() {
						const period = this.autoUpdate * 1000
						this.interval = setInterval(() => {
								this.now = new Date().getTime()
						}, period)
				}
		}
}
const timeage = Vue.extend(time)
export default timeage

//global registe Vue.component('view-time', viewTime)
</script>


<style lang="scss">

</style>