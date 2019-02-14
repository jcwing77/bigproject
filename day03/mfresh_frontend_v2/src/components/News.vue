<template>
<div>
  <!--面包屑导航-->
  <div class="breadcrumb">
    <div class="container">
      <h2>
        <a href="">首页</a>&gt;<a href="">公司动态</a>
      </h2>
    </div>
  </div>
  <!--页面主体-->
  <div class="main container">
    <div class="news">
      <ul>
        <li v-for="n in newsList.data"><span>{{n.pubTime | mydate}}</span>
          <!--<router-link :to="'/news/newsdetail/'+n.nid"  >{{n.title}}</router-link>-->
          <router-link  :to="'/newsdetail/'+n.nid">{{n.title}}</router-link>
        </li>
      </ul>
    </div>
    <!-- 分页导航-->
    <div class="pages">
     <a  v-if="newsList.pageNum>1" @click.prevent="loadNews(newsList.pageNum-1,newsList.pageSize)">上一页</a>
      <a  v-if="newsList.pageNum-2>=1"  @click.prevent="loadNews(newsList.pageNum-2,newsList.pageSize)">{{newsList.pageNum-2}}</a>
    <a v-if="newsList.pageNum-1>=1" @click.prevent="loadNews(newsList.pageNum-1,newsList.pageSize)">{{newsList.pageNum-1}}</a>
      <a  class="cur">{{newsList.pageNum}}</a>
      <a  v-if="newsList.pageNum<=newsList.pageCount-1"  @click.prevent="loadNews(newsList.pageNum+1,newsList.pageSize)">{{newsList.pageNum+1}}</a>
      <a v-if="newsList.pageNum<=newsList.pageCount-2"  @click.prevent="loadNews(newsList.pageNum+2,newsList.pageSize)">{{newsList.pageNum+2}}</a>
      <a v-if="newsList.pageNum<newsList.pageCount"  @click.prevent="loadNews(newsList.pageNum+1,newsList.pageSize)">下一页</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
data:function () {
  return {
    newsList:{//首页获取新闻列表信息
    }
  }
},
  mounted:function(){
    this.loadNews(1,10);
  },
  methods: {
    loadNews:function (pno,pageSize) {

      let url='http://127.0.0.1:8080/news/select?pageNum='+pno+'&pageSize='+pageSize;
      this.$http.get(url).then(function (res) {
        this.newsList =res.body; //this值得是VM对象

      })
    },
  }
}
</script>

<style></style>
