<template>
      <div class="loginForm">
        <Loading v-if="$store.state.loadingStatus"></Loading>
        <h2>{{pageInfo}}</h2>
        <div>帐 号：<input type="text" class="iptUser" v-model="$store.state.user.userName"/></div>
        <div>密 码：<input type="password" class="iptUser" v-model="$store.state.user.passWord"/></div>
        <div class="tips">{{$store.state.tips}}</div>
        <div class="sub"><button @click="login" class="btn">登录</button></div>
      </div>
</template>

<script>
  import Loading from './Loading.vue'
  export default {
    name: 'Login',
    data(){
      return {
        pageInfo:"LOGIN PAGE",
      }
    },
    components:{
      Loading
    },
    methods: {
      login(){
          this.$store.dispatch("doLogin");
      }
    }
  }
</script>

<style>
  body{ font-size: 14px; padding: 0; margin: 0;}
  .iptUser{width: 300px; height: 30px; margin:20px 0; padding-left: 5px; font-size:16px; background: #fff; border: #ccc solid 1px; line-height: 30px;}
  .loginForm{ width:400px; height: 100%; margin:0 auto;}
  .tips{ padding: 10px 0; color: #f04d4e;}
  .sub{ width: 100%; text-align: center;}
  .btn{ width: 80px; height: 30px; margin: 20px auto;  background: #0a80db; cursor: pointer; border: none; color: #fff;}
</style>
