<template>
<div>
  <!--面包屑导航-->
  <div class="breadcrumb">
    <div class="container">
      <h2>
        <a href="">首页</a>&gt;<a href="">产品中心</a>
      </h2>
    </div>
  </div>
  <!--页面主体-->
  <div class="main container">
    <div class="pl_header">
      <!--<router-link :to="product/1" class="cur">净美仕净化器</router-link><router-link :to="product/2">净美仕滤网</router-link>-->
    </div>
    <!-- 产品列表-->
    <ul class="product_list clearfloat">
      <li v-for="item in productList.data">
      <a href=""><img :src="'../static/'+item.pic" alt=""/></a>
      <div class="pdlist_text clearfloat">
      <h3>
      <p>{{item.title1}}</p>
      <span>{{item.title2}}</span>
      </h3>
      <router-link :to="'/productdetail/'+item.pid" >查看详情</router-link>
      </div>
      </li>

    </ul>
    <!-- 分页导航-->

    <div class="pages">
      <a  v-if="productList.pageNum>1" @click.prevent="loadPlist(productList.pageNum-1,productList.pageSize)">上一页</a>
      <a  v-if="productList.pageNum-2>=1"  @click.prevent="loadPlist(productList.pageNum-2,productList.pageSize)">{{productList.pageNum-2}}</a>
      <a v-if="productList.pageNum-1>=1" @click.prevent="loadPlist(productList.pageNum-1,productList.pageSize)">{{productList.pageNum-1}}</a>
      <a  class="cur">{{productList.pageNum}}</a>
      <a  v-if="productList.pageNum<=productList.pageCount-1"  @click.prevent="loadPlist(productList.pageNum+1,productList.pageSize)">{{productList.pageNum+1}}</a>
      <a v-if="productList.pageNum<=productList.pageCount-2"  @click.prevent="loadPlist(productList.pageNum+2,productList.pageSize)">{{productList.pageNum+2}}</a>
      <a v-if="productList.pageNum<productList.pageCount"  @click.prevent="loadPlist(productList.pageNum+1,productList.pageSize)">下一页</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data:function () {
    return {

      productList:{//首页获取商品列表信息
      }

    }
  },
  mounted:function(){
    this.loadPlist(1,10);

  },
  methods: {
    loadPlist:function (pageNum,pageSize) {

      let url='http://127.0.0.1:8080/product/select?pageNum='+pageNum+'&pageSize='+pageSize;
      this.$http.get(url).then((result)=> {
        this.productList =result.body; //this值得是VM对象
        // console.log(result);

      })

    },
  }
}
</script>

<style></style>
