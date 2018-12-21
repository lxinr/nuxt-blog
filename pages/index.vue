<template lang="pug">
  v-content.px-0.py-0.fade-out(v-scroll="onScroll")
    v-toolbar(fixed inverted-scroll scroll-off-screen :scroll-threshold="80" app)
      v-toolbar-side-icon.hidden-md-and-up
      v-spacer
      v-toolbar-items.hidden-sm-and-down
        v-btn.h3(flat @click="$vuetify.goTo(8800)") HOME
        v-btn.h3(flat) TAGS
    .banner.site-banner
      .tit LiuX Blog
      .avatar.elevation-10
    v-container.px-0.py-0(fill-height fluid)
      v-layout(fill-height column)
        v-flex(xs12)
        v-flex(xs12)
        v-flex(xs12)
        v-flex(xs12)
      v-layout(fill-height column)
        v-flex(xs12)
        v-flex(xs12)
        v-flex(xs12)
        v-flex(xs12)
</template>

<script>
export default {
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
  .banner {
    background-attachment: fixed;
  }
  .banner .tit {
    font-size: 5em
  }
  .site-banner {
    height: 68vh;
  }
}

@media only screen and (min-width: 1024px) {
  .avatar {
    width: 88px;
    height: 88px;
    bottom: -44px;
    margin-left: -44px;
  }
  .banner {
    background-attachment: fixed;
  }
  .banner .tit {
    font-size: 6em
  }
  .site-banner {
    height: 86vh;
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
