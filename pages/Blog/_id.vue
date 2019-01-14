<template lang="pug">
  v-content.px-0.py-0(v-scroll="onScroll")
    v-parallax.par-h(height="auto" :src="blogContent.bImg")
      v-layout(
        align-center
        column
        justify-center
      )
        h1.txt-h1.font-500.mb-3 {{blogContent.title}}
        h4.txt-h4.font-500.mb-5 {{blogContent.subTitle}}
        h4.txt-h4.font-500.font-weight-light.en-font {{`${blogContent.author} on ${date}`}}
    .blog-container
      #blog-content.blog-content(v-html="blogContent.content")
      .blog-catalog.hidden-sm-and-down
        .catalog-content(:class="{'fixed-cata': fixedCata}")
          .catalog-list(v-if="blogContent.content && paraH")
            tree-view(:data="cataLog")
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
    // console.log(blogAllContent)
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
  background: transparent;
  /* position: relative; */
}
.blog-content {
  background: #fff;
  width: 100%;
  flex: 1;
  padding: 0 20px;
  padding-bottom: 20px;
  margin-right: 18px;
}
.blog-catalog {
  width: 200px;
  position: relative;
  /* position: relative; */
  /* overflow: auto; */
}
.catalog-content {
  overflow: auto;
  max-height: 90vh;
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
</style>





