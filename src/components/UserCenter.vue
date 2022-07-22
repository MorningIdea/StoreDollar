<template>
  <div class="parentDiv">
      <h2>User Center</h2>
      <p>welcome，{{user}}</p>
      <ul id="example-1">
          <li v-for="item in $store.state.dataList">
              <span>{{ item.title }}</span><i>{{ item.dates }}</i><em>{{ item.url }}</em>
          </li>
      </ul>
      <p><a href="javascript:void(0);" @click="logout">退出</a></p>
      <p></p><p></p><p></p>
  </div>
</template>
<script>
  export default {
      data(){
          return{
              list:[]
          }
      },
      mounted: function () {
        this.$store.dispatch("showDataList"); //send ajax
      },
      computed:{
        user:function (){
          return sessionStorage.getItem("userName")
        }
      },
      methods:{
        logout(){
          this.$store.dispatch("logout")
        }
      }
  }
</script>
<style>
     *{ padding: 0; margin: 0; font-size: 14px;}
     ul,li,ol{ list-style: none}
     i,em{ font-style: normal}
     h3{ font-size: 22px; padding-bottom: 20px;}
    .parentDiv{ padding: 20px;}
     #example-1{ padding: 20px 0;}
     #example-1 li{ text-indent:5px; line-height: 35px; background: #eee;}
    #example-1 li span, #example-1 li i{ display: inline-block; margin-right: 10px;}
</style>
