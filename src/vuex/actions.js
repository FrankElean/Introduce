/**
Vuex数据流在整个应用中是单向的，正如 Flux 最初所定义的那样：

    用户在组件中的输入操作触发 action 调用；
    Actions 通过分发 mutations 来修改 store 实例的状态；
    Store 实例的状态变化反过来又通过 getters 被组件获知。

用于用户分发mutation的事件。可能有些人会疑惑为什么要多写这个文件来分发mutation的事件，是应为我们的mutation必须是同步执行，如果在mutation中进行回调，根本就无法确定到底什么时候能执行那个回调函数。而在action中进行事件的分发就可以进行异步操作
对于调用异步API的结果必须通过mutations来处理, 而不是依赖回调或者是传递回调来处理结果
基本原则：actions除了分发mutations应尽量避免其它副操作*/

// 修改用户状态为登录
export const isLogin = ({dispatch}) => {
	
	   dispatch('ISLOGIN')
}
// 修改用户状态为登出
export const loginOut = ({dispatch}) => {
	
	   dispatch('ONLOGIN')
}

// 设置用户登录信息
export const setUserInfo = ({dispatch}, id, token) => {
	
	   dispatch('SETUSERINFO', id, token)
}


// 设置Toast提示内容
export const setToastContent = ({dispatch}, content) => {
	
       dispatch('SETTOASTCONTENT', content)	
}

// 设置Toast是否显示
export const setToastShow = ({dispatch}, status) => {
	
       dispatch('SETTOASTSHOW', status)	
}