<template lang="pug">
  v-content.px-0.py-0
    .par-h.about-header
      h1.txt-h1.font-600.txt-white About
    .about-container.bg-default
      .about-content
        .txt-h2 这是我的个人介绍
        .dotted-line
        .about-info
          p.mb-2 来自于非著名阿卡林省江西的一个十八线小县城。从2016年毕业至今一直从事前端开发工作。
          p.mb-2 开发过包括旅游、社群运营、金融证券各类的产品。
          p.mb-2 平时自己也会写一些包括博客系统、web音乐播放器、小程序等项目。  
          p.mb-2 使用nodejs来实现数据接口、数据爬取等。
          p.mb-2 数据库使用mongodb以及redis，不过都仅限于基本使用，特别是redis。
          p.mb-2 主要写vue项目，但偶尔也用react写写小项目。
          p.mb-2 偶尔刷刷leetcode，充实自己的同时也虐虐自己。
          p.mb-2 日常学习数据结构、算法、http、设计模式等基础知识。
          p.mb-2 喜欢打打羽毛球，爬山什么的。最近突然有了去健身的想法。
          .mb-3.mt-4
            p.mb-3 【联系方式】
            p.mb-2  email：
              a(href="javascript:void(0)") lx_ms@sina.com
            p.mb-2  github：
              a(href="https://github.com/lxinr") https://github.com/lxinr
          .mb-3.mt-5 ~~
          .mb-3.mt-4 ~~~
          .mb-3.mt-4 ~~ over ~~
</template>

<style lang="scss" scoped>
.about-header {
  width: 100%;
  background: url('https://file.lxinr.top/2019/0403/1554302211784.jpg') no-repeat center;
  background-size: cover;
  background-attachment: scroll;
  display: flex;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: rgba(0, 0, 0, 0.3);
  }
  h1 {
    width: 100%;
    text-align: center;
    position: relative;
    font-size: 50px;
    z-index: 3;
  }
}

.about-container {
  width: 100%;
  /* background: url('https://file.lxinr.top/2019/0403/1554302275906.jpg') no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  position: relative; */
  /* &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(211,211,211, 0.8);
  } */
  .about-content {
    height: 100%;
    position: relative;
    z-index: 3;
    margin: 0 auto;
    background: #fff;
    box-sizing: border-box;
    padding: 30px;
  }
}

.dotted-line {
  width: 100%;
  height: 2px;
  background-image: linear-gradient(to right, #ccc 0%, #ccc 50%, transparent 50%);
  background-size: 8px 2px;
  background-repeat: repeat-x;
  margin: 10px 0;
}

.about-info {
  /* margin-top:  */
}
.mrg-bt {

}
</style>
