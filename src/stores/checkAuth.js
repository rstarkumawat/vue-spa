import { defineStore } from 'pinia'

export const checkAuth = defineStore('checkAuth',{
    state:( )=>{
        return {
            isLogin:false,
        }
    },
    actions: {
        setIsLogin(payload){
            this.isLogin = payload
        }
    },
    persist:true
})