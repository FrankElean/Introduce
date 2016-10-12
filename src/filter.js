// CMD方式定义模块   可通过require调用

// 判断发帖时间与现在时间的间隔
exports.getLastTime = (servertime) => {
		// let oldtime = creatTime.substring(0, 10);
		// let newtime = new Date();
		let lasttime = new Date(servertime);
		let newtime = (new Date() - lasttime)/1000;
		let year = Math.floor(newtime/3600/24/30/12);
		let month = Math.floor(newtime/3600/24/30);
		let day = Math.floor(newtime/3600/24);
		let hours = Math.floor(newtime/3600);
		let mins = Math.floor(newtime/60);
		let str = '';
		if(hours < 60){
			str = mins + '秒钟前';
		}else if(hours === 0){
			str = mins + '分钟前';
		}else if(day === 0){
			str = hours + '小时前';
		}else if(month === 0){
			str = day + '天前';
		}else if(year === 0){
			str = month + '月前';
		}else {
			str = year + '年前';
		}
		return str;
}