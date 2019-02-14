<template>
<div>
  <!--页面主体-->
  <div class="login_box">
    <div class="container">
      <div class="login">
        <h2>用户登录</h2>
        <dl class="clearfloat">
          <dt><span class="tips" id="uname_prompt_text"></span>用户名：</dt>
          <dd>
            <input type="text" id="uname" v-model="uname" placeholder="邮箱/手机号"/>
            <em class="icon_user"></em>
            <i class="icon_error" id="uname_prompt_icon"></i>
          </dd>
        </dl>
        <dl>
          <dt><span class="tips" id="pwd_prompt_text">请输入密码</span>密码：</dt>
          <dd>
            <input type="password" id="upwd" v-model="upwd" placeholder="密码"/>
            <em class="icon_pwd"></em>
            <i class="icon_error" id="pwd_prompt_icon"></i>
          </dd>
        </dl>
        <p><lable>
          <input type="checkbox"  v-model="checkedLog" />
          <span>自动登录</span>
        </lable></p>
        <button type="button" id="login" @click="login" >立 即 登 录</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
data:function () {
  return {
    uname:'',
    upwd:'',
    uid:'',
    isLogin:false,//是否登录
    checkedLog:false,//是否保存密码自动登录
  }
},
  methods:{

  login:function () {//登录
    // 正确的获取到用户名和密码
    var uname= this.uname;
    var upwd= this.upwd;

    // 发送请求
    this.$http.get('http://127.0.0.1:8080/user/login?uname='
      +this.uname+"&upwd="+this.upwd).then((result)=>{

      if(result.data.code==200){

        //判断复选框是否被勾选 勾选则调用配置cookie方法
        if(this.checkedLog=true){
          //传入账号名，密码，和保存天数4个参数
          this.setCookie(result.data.uname,result.data.upwd,result.data.uid,7);
        }else {
          //传入账号名，密码，和保存天数4个参数
          this.setCookie(result.data.uname,result.data.upwd,result.data.uid,0.5);
        }
        // 跳转到首页
        this.$router.push('/');
      }

    })

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

  },
//页面加载调用获取cookie值
  mounted:function () {
    this.getCookie()
  }



}
</script>

<style></style>
