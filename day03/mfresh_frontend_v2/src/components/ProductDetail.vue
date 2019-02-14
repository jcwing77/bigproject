<template>
<div>
  <!--面包屑导航-->
  <div class="breadcrumb">
    <div class="container">
      <h2>
        <a href="">首页</a>&gt;<a href="">产品中心</a>&gt;<a href="">净美仕净化器</a>
      </h2>
    </div>
  </div>
  <!--页面主体-->
  <div class="main container">
    <div class="pd_info clearfloat">
      <div class="pdinfo_img">
        <img :src="'../static/'+productDetail.pic" alt=""/>
      </div>
      <div class="pdinfo_text">
        <h2>{{productDetail.title1}}</h2>
        <ul>
          <li>型号：{{productDetail.model}}</li>
          <li>功能：{{productDetail.func}}</li>
          <li>噪音：{{productDetail.noise}}</li>
          <li>风量：{{productDetail.wind}}</li>
          <li>适用对象：{{productDetail.applyTo}}</li>
          <li>适用面积：{{productDetail.size}}</li>
          <li>空气净化能效等级：{{productDetail.level}}</li>
        </ul>
        <p>价格：<span>¥</span><strong id="price">{{productDetail.price}}</strong></p>
        <a href="" id="addCart"><span class="icon_cart"></span>加入购物车</a>
      </div>
    </div>
    <div class="details_box">
      <h2 class="title">产品详情</h2>
      <div class="pd_details" v-html="productDetail.detail">
        <!--<p>家用除甲醛静音M-8088A，带大脑的空气净化器。家用除甲醛静音M-8088A，带大脑的空气净化器。家用除甲醛静音M-8088A，带大脑的空气净化器。家用除甲醛静音M-8088A，带大脑的空气净化器。家用除甲醛静音M-8088A，带大脑的空气净化器。家用除甲醛静音M-8088A，带大脑的空气净化器。家用除甲醛静音M-8088A，带大脑的空气净化器。</p>-->
       <!--<img src="../static/product-imgs/m8088a/01.jpg" alt=""/>-->
        <!--<img src="product-imgs/m8088a/02.jpg" alt=""/>-->
        <!--<img src="product-imgs/m8088a/03.jpg" alt=""/>-->
        <!--<img src="product-imgs/m8088a/04.jpg" alt=""/>-->
        <!--<img src="product-imgs/m8088a/05.jpg" alt=""/>-->
        <!--<img src="product-imgs/m8088a/06.jpg" alt=""/>-->

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
data:function () {
  return {
    pid:this.$route.params.num,
    productDetail:{
      // 商品详细
    }
  }
},
  mounted:function () {

    this.loadProductDetail();
  },
  methods:{
   loadProductDetail:function () {
// console.log(this.nid);
     let url='http://127.0.0.1:8080/product/detail/'+this.pid;
     this.$http.get(url).then(function (res) {
       this.productDetail =res.body; //this值得是VM对象
       console.log(res);

     })
   }
  }
  
}
</script>

<style>
  .productcontent{ width: 100%; margin-top: 20px;}
  .productcontent h1{text-align: center}

</style>
