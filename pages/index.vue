<template lang="pug">
  v-content.px-0.py-0.fade-out(v-scroll="onScroll")
    v-toolbar.transparent(fixed flat dense scroll-off-screen :scroll-threshold="80")
      v-toolbar-side-icon.hidden-md-and-up.white--text
      v-toolbar-title.hidden-sm-and-down.white--text LiuX
      v-spacer
      v-toolbar-items.hidden-sm-and-down
        v-btn.h3.white--text(flat @click="$vuetify.goTo(8800)") HOME
        v-btn.h3.white--text(flat) TAGS
    v-toolbar(fixed dense inverted-scroll scroll-off-screen :scroll-threshold="80")
      v-toolbar-side-icon.hidden-md-and-up
      v-toolbar-title.hidden-sm-and-down LiuX
      v-spacer
      v-toolbar-items.hidden-sm-and-down
        v-btn.h3(flat @click="$vuetify.goTo(8800)") HOME
        v-btn.h3(flat) TAGS
    .banner.mb-5.site-banner
      .tit LiuX Blog
      .avatar.elevation-10
      .sub-info 这深夜一片寂静，是因为你还没听到声音
    v-container.px-0.py-5(fluid justify-center)
      v-hover 啊哈哈哈哈哈
      Card(v-for="index in 8" :key="index")  
    Footer
</template>

<script>
import Footer from '~/components/Footer'
import Card from '~/components/Card'
export default {
  components: {
    Footer,
    Card
  },
  data() {
    return {
      offsetTop: 0
    }
  },
  methods: {
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    }
  }
}
</script>


<style lang="scss" scoped>
.en-font {
  font-family: Lora,'Times New Roman',serif;
}
.transparent {
  background: transparent;
}
.fade-out {
  position: relative;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    animation: fade-out 2s ease-in-out 0s 1;
    z-index: 9999;
  }
}

.h3 {
  font-size: 16px;
}

.banner {
  position: relative;
  background-image: url("https://file.lxinr.top/blog/post-bg-2015.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: scroll;
  display: flex;
  align-items: center;
  .tit {
    width: 100%;
    text-align: center;
    font-family: Lora,'Times New Roman',serif;
    color: #fff;
    font-size: 3em;
    animation: fade-in 2.3s ease-in 0s 1;
  }
  .sub-info {
    width: 100%;
    position: absolute;
    bottom: -70px;
    text-align: center;
    font-size: 14px;
    animation: fade-in 2.3s ease-in 0s 1;
    font-style: italic;
  }
}
.show-icon {
  visibility: visible;
}
.site-banner {
  height: 250px;
}

.avatar {
  background: url('https://file.lxinr.top/2018/1221/1545370649843.jpg') no-repeat center;
  background-size: cover;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  bottom: -30px;
  left: 50%;
  margin-left: -30px;
  z-index: 1;
  animation: fade-in 2.3s ease-in 0s 1;
}

@media only screen and (min-width: 640px) {
  .avatar {
    width: 68px;
    height: 68px;
    bottom: -34px;
    margin-left: -34px;
  }
  .sub-info {
    bottom: -78px;
  }
  .site-banner {
    height: 320px;
  }

  .banner .tit {
    font-size: 4em
  }
}

@media only screen and (min-width: 768px) {
  .show-icon {
    visibility: hidden;
  }
  .avatar {
    width: 80px;
    height: 80px;
    bottom: -40px;
    margin-left: -40px;
  }
  .sub-info {
    bottom: -92px;
  }
  .banner {
    background-attachment: fixed;
  }
  .banner .tit {
    font-size: 5em
  }
  .site-banner {
    height: 65vh;
  }
}

@media only screen and (min-width: 1024px) {
  .avatar {
    width: 88px;
    height: 88px;
    bottom: -44px;
    margin-left: -44px;
  }
  .sub-info {
    bottom: -100px;
  }
  .banner {
    background-attachment: fixed;
  }
  .banner .tit {
    font-size: 6em
  }
  .site-banner {
    height: 80vh;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fade-out {
  0% {
    background: #fff;
    display: block;
    opacity: 1;
  }
  100% {
    background: transparent;
    display: none;
    opacity: 0;
  }
}
</style>
