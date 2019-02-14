<template>
<div>
  <header class="header container">
    <h1 class="logo"><router-link to="/" class="link"></router-link></h1>
    <div class="h_con">
      <ul class="clearfloat">
        <li class="phone">4000-585-116</li>
        <!--<li><a href="#">中文</a></li>-->
        <!--<li><em>|</em></li>-->
        <!--<li><a href="#">English</a></li>-->
        <!--<li><a href="#" class="weixin"></a></li>-->
        <!--<li><a href="#" class="weibo"></a></li>-->
        <li  v-if="!isLogin"><router-link to="/login" class="h_login">登录</router-link></li>
        <li  v-if="!isLogin"><em>|</em></li>
        <li  v-if="!isLogin"><a href="register.html" class="h_register">注册</a></li>
        <li  v-if="isLogin" class="top_user"><a>{{uname}}1</a></li>
        <li  v-if="isLogin" class="top_quit"><a @click="clearCookie">退出</a></li>
      </ul>
      <div class="search clearfloat">
        <button type="button"></button>
        <input type="text"/>
      </div>
    </div>
  </header>
  <!--nav-->
  <nav class="navbar">
    <div class="container">
      <div class="nav">
        <ul>
          <li><router-link to="/" ><span class="icon_home"></span>首页</router-link></li>
          <li><router-link to="/about" >关于净美仕</router-link></li>
          <li><router-link to="/news" >公司动态</router-link ></li>
          <li class="nav_pd">
            <router-link to="/product">产品中心<span class="icon_pd"></span></router-link>
            <div class="pd_dropdown">
              <!--<router-link to="/product/select/1">净美仕净化器</router-link>-->
              <!--<router-link to="/product/select/2">净美仕滤网</router-link>-->
            </div>
          </li>
          <li><router-link to="/contact">联系我们</router-link></li>
        </ul>
      </div>
      <div class="s_cart">
        <a href="cart.html">
          <span class="icon_cart"></span>购物车(<strong id="cart_sum">0</strong>)<span class="icon_sj"></span>
        </a>
        <div class="cart_dropdown">
          <!--<h3>您的购物车为空~</h3>-->
          <ul>
            <!--<li>-->
            <!--<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
            <!--<div>-->
            <!--<span>-</span><input type="text" value="2"/><span>+</span>-->
            <!--</div>-->
            <!--<strong>¥1599.00</strong>-->
            <!--<em></em>-->
            <!--</li>-->
            <!--<li>-->
            <!--<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
            <!--<div>-->
            <!--<span>-</span><input type="text" value="2"/><span>+</span>-->
            <!--</div>-->
            <!--<strong>¥1599.00</strong>-->
            <!--<em></em>-->
            <!--</li>-->
          </ul>
          <div class="cd_js clearfloat">
            <span>共计：<strong>0.00</strong></span>
            <a href="#">结算</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
 data:function () {
   return{
     uid:null,
     uname:null,
     isLogin:false,
     // cartlist:{
     //   购物车列表
     // }
   }
 },
  methods:{
    //清除cookie
    clearCookie:function () {
      this.setCookie("","","",-1);//修改2值都为空，天数为负1天就好了
      this.isLogin=false;
    },
    //设置cookie
    setCookie:function(uname,upwd,uid,exdays) {
      var exdate=new Date();//获取时间
      exdate.setTime(exdate.getTime() + 24*60*60*1000*exdays);//保存的天数
      //字符串拼接cookie
      window.document.cookie="uname"+ "=" +uname+";path=/;expires="+exdate.toGMTString();
      window.document.cookie="upwd"+"="+upwd+";path=/;expires="+exdate.toGMTString();
      window.document.cookie="uid"+"="+uid+";path=/;expires="+exdate.toGMTString();

    },

    //读取cookie
    getCookie:function () {

      if (document.cookie.length>0) {
         this.isLogin=true;
        var arr=document.cookie.split('; ');//这里显示的格式需要切割一下自己可输出看下
        for(var i=0;i<arr.length;i++){
          var arr2=arr[i].split('=');//再次切割
          //判断查找相对应的值
          if(arr2[0]=='uname'){
            this.uname=arr2[1];//保存到保存数据的地方
          }else if(arr2[0]=='upwd'){
            this.upwd=arr2[1];
          }else if(arr2[0]=='uid'){
            this.uid=arr2[1];
          }
        }
      }
    },
    // loadCart:function () {
    //
    //   let url='http://127.0.0.1:8080/cart/select?userId='+this.uid;
    //   this.$http.get(url).then(function (res) {
    //     this.cartlist =res.body; //this值得是VM对象
    //     // console.log(res);
    //
    //   })
    // }

  },

  mounted:function () {
this.getCookie();

  },

}
</script>

<style scoped>

</style>
