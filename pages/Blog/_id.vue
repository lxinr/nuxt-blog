<template lang="pug">
  v-content.px-0.py-0(v-scroll="onScroll")
    .par-h(:style="{backgroundImage: blogContent.bImg && `url(${blogContent.bImg})`}" :class="{'nobg': !blogContent.bImg}")
      .mask
      v-layout.blog-info(
        align-center
        column
        justify-center
      )
        h1.txt-h1.font-500.mb-3 {{blogContent.title}}
        h4.txt-h4.font-500.mb-5 {{blogContent.subTitle}}
        h4.txt-h4.font-500.font-weight-light.en-font {{`${blogContent.author} on ${date}`}}
    .blog-container
      .blog-content-box
        #blog-content.blog-content(v-html="blogContent.content")
        .blog-catalog.hidden-sm-and-down
          .catalog-content(:class="{'fixed-cata': fixedCata}")
            .catalog-list(v-if="blogContent.content && paraH")
              tree-view(:data="cataLog")
      .blog-other(flex)
        v-btn.btn(v-if="nextPreBtns" :to="nextPreBtns.gt && nextPreBtns.gt.path" :disabled="nextPreBtns.gt.disabled") {{`上一篇: ${nextPreBtns.gt.title}`}}
        v-btn.btn(v-if="nextPreBtns" :to="nextPreBtns.lt && nextPreBtns.lt.path" :disabled="nextPreBtns.lt.disabled") {{`下一篇: ${nextPreBtns.lt.title}`}}
    v-fab-transition
      v-btn.btm(color="blue-grey darken-2" v-show="show" dark fixed right bottom fab small open-on-hover @click="$vuetify.goTo(0)")
        v-icon mdi-arrow-up-thick
</template>

<script>
import { fetchDetail } from '~/apis'
import { format } from 'date-fns'
import { mapState } from 'vuex'
import treeView from '~/components/Treeview'

export default {
  async asyncData({$axios, params, error, redirect, store}) {
    const { blogAllContent = {} } = store && store.state
    console.log(blogAllContent[params.id])
    if(blogAllContent[params.id]) {
      store.commit('setContent', blogAllContent[params.id])
      return
    }
    let res = await fetchDetail($axios, params.id)
    let { data = {} } = res || {}
    const { content, title } = data || {}
    if(!content || !title) redirect('/404')
    if (content) store.commit('setAllBlogContent', { title: params.id, data })
  },
  components: {
    treeView
  },
  data() {
    return {
      offsetTop: 0,
      paraH: 0,
      cataLog: [],
      tree: []
    }
  },
  computed: {
    ...mapState(['blogContent']),
    show() {
      return this.offsetTop > 120
    },
    fixedCata() {
      if (this.paraH < (this.offsetTop + 50)) return true
      return false
    },
    date() {
      const { blogContent } = this
      return blogContent.createTime && format(blogContent.createTime, 'MMMM D, YYYY')
    },
    nextPreBtns() {
      const { blogContent = {} } = this
      const { gtBlog, ltBlog } = blogContent
      if (blogContent && blogContent.title) {
        let gt = {
          title: gtBlog && gtBlog.title || '没有了',
          path: gtBlog && `/blog/${gtBlog.title}`,
          disabled: !gtBlog
        }
        let lt = {
          title: ltBlog && ltBlog.title || '没有了',
          path: ltBlog && `/blog/${ltBlog.title}`,
          disabled: !ltBlog
        }
        return { lt, gt }
      } else {
        return null
      }
    }
  },
  head () {
    return {
      title: `${this.blogContent && this.blogContent.title} | LiuX's Blog`
    }
  },
  mounted() {
    this.paraH = document.getElementsByClassName('par-h')[0] && document.getElementsByClassName('par-h')[0].clientHeight || 0
    const anchors = new AnchorJS()
    anchors.add()
    this.formatScrollTop()
  },
  methods: {
    formatScrollTop() {
      const { catalog = [] } = this.blogContent || {}
      this.cataLog = catalog.map(item => {
        let element = document.getElementById(this.urlify(item.text))
        item.top = element && element.offsetTop - 50
        return item
      })
    },
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      this.$store.commit('setScrollTop', this.offsetTop)
    },
    urlify(text) {
      let nonsafeChars = /[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\\n\t\b\v]/g
      let urlText = ''
      urlText = text.trim().replace(/\'|\"|\=/gi, '').replace(nonsafeChars, '-').replace(/-{2,}/g, '-').substring(0, 64).replace(/^-+|-+$/gm, '').toLowerCase()
      return urlText
    }
  }
}
</script>

<style lang="scss">
.btm {
  bottom: 48px !important;
}

:target:before {
    content: "";
    display: block;
    margin-top: -60px;
    height: 60px;
    width: 1px;
}
.blog-container {
  display: flex;
  flex-direction: column;
  background: transparent;
  /* position: relative; */
}
.blog-content-box {
  width: 100%;
  display: flex;
}
.blog-other {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 60px 0 10px;
  .btn {
    margin: 0 30px;
  }
}
.blog-content {
  background: #fff;
  width: 100%;
  flex: 1;
  padding: 0 20px;
  padding-bottom: 20px;
  overflow: hidden;
  box-sizing: border-box;
}
.blog-catalog {
  width: 200px;
  position: relative;
  margin-left: 18px;
  overflow: hidden;
}
.catalog-content {
  overflow: auto;
  max-height: 70vh;
  width: 200px;
  position: absolute;
  top: 15px;
}
.catalog-list {
  overflow: auto;
  position: relative;
}

.fixed-cata {
  position: fixed;
  top: 63px;
}

.par-h {
  color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: rgba(223, 223, 223, 0.15)
  }
  .blog-info {
    width: 100%;
    box-sizing: border-box;
    padding: 0 60px;
    z-index: 3;
  }
  &.nobg {
    color: inherit;
    background: #fff;
    .mask {
      display: none;
    }
    .blog-info {
      
    }
  }
}
</style>





