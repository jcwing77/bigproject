<script src="../../../mfresh_backend/routes/news.js"></script>
<script src="../../../../mfresh_backend/11.js"></script>
<template>
<div>
  <div class="banner" @mouseover="stopPlay" @mouseout="Play">
    <!-- 练习：编写banner的html和css-->
    <!-- 图片列表-->
    <ul>
      <li v-for="(n,index) in banner"  :style ='{backgroundImage:n.backgroundImage}' :key="index" ><a href="#" class="link"></a></li>

    </ul>
    <!-- 左右箭头-->
    <span class="cut prev" @click="slidePrev"></span>
    <span class="cut next" @click="slideNext" ></span>
    <!-- 小圆点指示器-->
    <div class="indicator">

      <a v-for="(n,index) in banner"    @mouseover="showNext"></a>

    </div>
  </div>
  <!--main-->
  <div class="main container">
    <div class="ind_con1">
      <h2 class="title"><router-link to="/product" href="#" class="more">more</router-link>净美仕产品</h2>
      <ul class="clearfloat">
        <li><router-link to="/product/select/1"  class="link"><img src="../assets/images/01.jpg" alt=""/></router-link></li>
        <li><router-link to="/product/select/2"  class="link"><img src="../assets/images/02.jpg" alt=""/></router-link></li>
        <li><router-link to="/product/select/3"  class="link"><img src="../assets/images/03.jpg" alt=""/></router-link></li>
      </ul>
    </div>
    <div class="ind_con2 clearfloat">
      <div class="ind_about">
        <h2 class="title"><router-link  to="/about"  class="more">more</router-link>关于净美仕</h2>
        <p>北京净美仕环境科技有限公司自诞生起一直关注人类呼吸健康的问题，并专注于室内空气质量的研究与改善。2003年，非典来袭，环境安全威胁到了每个人的生命，全国陷入一片恐慌。净美仕肩负着为人类创造健康安全生活环境的使命应运而生。2012年7月，亿朗以“净美仕(Mfresh)”为品牌重塑，以崭新的面貌屹立在净化行业。
          <router-link to="/about" href="#">查看更多</router-link></p>
      </div>
      <div class="ind_news">
        <h2 class="title"><router-link to="/news"  class="more">more</router-link>公司动态</h2>
        <ul>
          <li v-for="n in newsList.data"><span>{{n.pubTime | mydate}}</span><router-link to="/detail">{{n.title}}</router-link></li>

        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>

  export default  {
  data:function(){
    return {
      $BANNERULLI:null,
      $INDICATOR:null,
      $BANNER:null,
      $INDICATORA:null,
      $FIESTA:null,
      $FIRSTBANNER:null,
       banner:[{ //轮播图
         backgroundImage: "url(" + require("../assets/images/banner_01.jpg") + ")"
       },
         {
           backgroundImage: "url(" + require("../assets/images/banner_02.jpg") + ")"
         },
         {
           backgroundImage: "url(" + require("../assets/images/banner_03.jpg") + ")"
         },
         {
           backgroundImage: "url(" + require("../assets/images/banner_04.jpg") + ")"
         }],
     cur:0,//当前显示的图片
    timer:0,//定时器
      number:null, //图片数量
      now:1,
      Index:null,
      autoplay:3000, //轮播切换时间
      productList:{//首页获取产品列表信息
      },
      newsList:{//首页获取新闻列表信息
      },
    }
  },
  mounted:function(){
    //banner图片轮播
    this.number=this.banner.length-1;
    this.$BANNERULLI =$(".banner ul li");
    this.$INDICATOR=$(".indicator a");
    this.$INDICATORA=$(".indicator>a");
    this.$BANNER =$(".banner");
    this.timer = setInterval(this.slideNext,this.autoplay);
    this.$FIESTA=$(".indicator>a:first").addClass("cur");
    this.$FIRSTBANNER =$(".banner ul li:first").css({'z-index':20}).stop().fadeIn();
    this.loadNews();

  },
  methods:{
    stopPlay:function(){
      clearInterval(this.timer);
    },
    Play:function(){
      this.timer=setInterval(this.slideNext,this.autoplay);
    },
    showNext:function(e){    //小圆点指示器
     this.now=$(e.target).index();//获取鼠标移入的是第几个a标记

      this.$INDICATORA.removeClass();//删除a标记中的class=cur
     $(e.target).addClass("cur");//为此a标记添加cur样式
      this.$BANNERULLI.eq(this.cur).css({'z-index':10}).stop().fadeOut();//隐藏当前的图片
      this.$BANNERULLI.eq(this.now).css({'z-index':20}).stop().fadeIn();//显示和a序列号一样的图片
      this.cur=this.now;//为变量cur重新赋值，以便于再次启用定时器的时候，从当前显示的图片开始播放
    },
    slideNext:function () { //下一个

      if(this.cur<this.number){
        this.$BANNERULLI.eq(this.cur).css({'z-index':10}).stop().fadeOut();
        this.$BANNERULLI.eq(this.cur+1).css({'z-index':20}).stop().fadeIn();
        this.$INDICATOR.removeClass().eq(this.cur+1).addClass("cur");
        this.cur+=1;

      }else{
        this.$BANNERULLI.eq(this.cur).css({'z-index':10}).stop().fadeOut();
        this.$BANNERULLI.eq(0).css({'z-index':20}).stop().fadeIn();
        this.$INDICATOR.removeClass().eq(0).addClass("cur");
        this.cur=0;

      }



    },
    slidePrev:function () {
      if(this.cur>0){
        this.$BANNERULLI.eq(this.cur).css({'z-index':10}).stop().fadeOut();
        this.$BANNERULLI.eq(this.cur -1).css({'z-index':20}).stop().fadeIn();
        this.$INDICATOR.removeClass().eq(this.cur-1).addClass("cur");
        this.cur-=1;
      }else{
        this.$BANNERULLI.eq(this.cur).css({'z-index':10}).stop().fadeOut();
        this.$BANNERULLI.eq(this.number).css({'z-index':20}).stop().fadeIn();
        this.$INDICATOR.removeClass().eq(this.number).addClass("cur");
        this.cur=this.number;
      }
    },
    loadNews:function () {

      let url='http://127.0.0.1:8080/news/select?pageNum=1&pageSize=4';
      this.$http.get(url).then(function (res) {
        this.newsList =res.body; //this值得是VM对象

      })
    },




  }
}
</script>

<style>
  @import "../assets/css/mycss.css";

</style>
