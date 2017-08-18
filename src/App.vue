<template>
  <div>
  <div id="box-z">
    <header id="top">
      <div class="new-img">
        <ul>
          <li><a href="javascript:;"><img src="../src/assets/new-weibo.png" height="35" width="35" alt=""></a></li>
          <li id="weibo1"><a href="javascript:;"><img src="../src/assets/new-weixin.png" height="35" width="35" alt=""></a></li>
          <li id="login"><a href="javascript:;"><img src="../src/assets/new-person.png" height="35" width="35" alt=""></a>
          <div id="login1">
            <router-link to="/share">登录</router-link>
            <router-link to="/share">注册</router-link>
          </div>
          </li>
          <li><a href="javascript:;"><img src="../src/assets/rexian.png" height="35" width="175" alt=""></a></li>
        </ul>
        <div id="weibo">
          <img src="../src/assets/weiboerweima.png" height="113" width="113" alt="">
        </div>
      </div>
      <div class="new-logo">
        <div class="header-logo">
          <h1><a href="javascript:;"><img src="../src/assets/logo (2).png" height="55" width="244" alt=""></a></h1>
        </div>
        <ul class="header-nav">
          <li><router-link to="/index">首页</router-link></li>
          <li id="about-o">
            <router-link to="/about">关于我们</router-link>
              <div id="pin-trust">
                <router-link to="/extend">品牌传承</router-link>
              </div>
            </li>
          <li id="about-t"><router-link to="/product">产品系列</router-link>
          </li>
          <li><router-link to="/wisdom">安满智慧+</router-link></li>
          <li id="welfare"><router-link to="/welfare">安满福利+</router-link>
            <div id="share">
                <router-link to="share">满分享</router-link>
            </div>
          </li>
        </ul>
        <div class="header-buy"><a href="javascript:;"><img src="../src/assets/buynow.png" height="39" width="112" alt=""></a></div>
      </div>
    </header>
  </div>
    <div>
      <router-view></router-view>
    </div>
    <footer>
      <div class="footer-img">
      <img src="../src/assets/back2.png" height="34" width="34" alt="">
      </div>
      <div class="footer-p">
        <p>安满支持并提倡母乳是0-6月婴儿最理想的食品，在母乳不足或无母乳时请向医护专业人员咨询</p>
        <ul class="footer-ul">
          <li><a href="javascript:;">隐私条例和声明</a></li>
          <li><a href="javascript:;">恒天然集团</a></li>
          <li><a href="javascript:;">安满全球</a></li>
          <li><a href="javascript:;">联系我们</a></li>
        </ul>
      </div>
      <div class="footer-icp">沪ICP备案号：沪ICP备 12041915号-3<img src="../src/assets/icon-foot.png" height="20" width="19" alt="">沪公安机关备案号：31010102003291</div>
    </footer>
  </div>
</template>
<script>
export default{
  created () {
      $(function (){
      $('#weibo1').hover(function (){
        $('#weibo').show();
      },function (){
        $('#weibo').hide();
      });
      $('#login').hover(function (){
        $('#login1').show();
      },function (){
        $('#login1').hide();
      });
      $('#about-o').hover(function (){
        $('#pin-trust').show();
      },function (){
        $('#pin-trust').hide();
      });
      $('#about-t').hover(function (){
        $('#mam-b').show();
      },function (){
        $('#mam-b').hide();
      });
      $('#welfare').hover(function (){
        $('#share').show();
      },function (){
        $('#share').hide();
      })
  })
  }
}


</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
body{
  background: #EEEEEE;
}
#box-z{
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: fixed;
  z-index: 10000;
}
header{
  width: 1300px;
  height: 145px;
  background: #232E64;
  margin: 0 auto;
  overflow: hidden;
  .new-img{
    width: 100%;
    overflow: hidden;
    ul{
      width: 390px;
      overflow: hidden;
      float: right;
      li{
          margin: 0 10px;
          padding-top: 20px;
          float: left;
      }
    }
  };
  #weibo{
    position: absolute;
    right: 320px;
    top: 70px;
    display: none;
    z-index: 999;
  }
  #login1{
    width: 70px;
    height: 60px;
    line-height: 30px;
    background: white;
    border-radius: 5px;
    text-align: center;
    position: absolute;
    right: 237px;
    top: 57px;
    display: none;
    z-index: 999;
  }
  #login1 a{
    display: block;
    text-decoration: none;
  }
  #pin-trust{
    width: 160px;
    border: 1px solid blue;
    position: absolute;
    left: 450px;
    top: 115px;
    display: none;
    z-index: 999;
  }
  #share{
    width: 160px;
    border: 1px solid blue;
    position: absolute;
    right: 290px;
    top: 115px;
    display: none;
    z-index: 999;
  }
  #pin-trust a,#mam-b a,#share a{
    display: block;
    line-height: 50px;
    text-align: center;
    background: white;
    color: blue;
    width: 100%;
  }
  #pin-trust a:hover,#mam-b a:hover,#share a{
    background: #F5F5F5;
    color: #D2A42A;
  }
  #mam-b{
    width: 160px;
    border: 1px solid blue;
    position: absolute;
    left: 600px;
    top: 115px;
    display: none;
    z-index: 99;
  }
  .new-logo{
    overflow: hidden;
    .header-logo,.header-nav,.header-buy{
      float: left;
    }
    .header-logo{
      width: 244px;
      margin-left: 61px;
    }
    .header-nav li:first-child{
      margin-left: 70px;
    }
    .header-nav li{
      margin: 0 30px;
      margin-top: 26px;
      float: left;
        color: white;
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
        padding-bottom: 5px;
        a{
        color: white;
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
        padding-bottom: 5px;
                &:hover{
          color: #55BAE8;
          cursor: pointer;
            }
        }
    }
    .header-buy{
      width: 115px;
      margin-top: 20px;
      margin-left: 80px;
    }
  }
}
footer{
  width: 1300px;
  height: 260px;
  margin: 0 auto;
  background: #FFFFFF;
  text-align: center;

  ul{
    width: 324px;
    overflow: hidden;
    text-align: center;
    margin: 0 auto;
   li{
    margin: 0 auto;
    float: left;
    a{
      margin: 0 auto;
      text-align: center;
      }
    }
  };
  .footer-img{
    padding-top: 24px;
    margin-bottom: 20px;
    color: blue;
    img{
      margin-bottom: 10px;
    }
  };
  .footer-p{
    font-size: 15px;
    ul{
      li{
        margin: 15px 3px;
        
        a{
          color: black;
          text-decoration: none;
          &:hover{
            border-bottom: 1px solid black;
          }
        }
      }
    }
  };
  .footer-icp{
    img{
      vertical-align: middle;
      margin: 0 10px;
    }
  }
}
</style>
