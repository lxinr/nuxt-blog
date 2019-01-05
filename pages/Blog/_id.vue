<template lang="pug">
  v-content.px-0.py-0(v-scroll="onScroll")
    v-parallax.par-h(height="auto" :src="bImg")
      v-layout(
        align-center
        column
        justify-center
      )
        h1.txt-h1.font-500.mb-3 {{title}}
        h4.txt-h4.font-500.mb-5 {{subTitle}}
        h4.txt-h4.font-500.font-weight-light.en-font {{`Posted by ${author} on ${date}`}}
    .blog-container(v-html="content")
    v-fab-transition
      v-btn.btm(color="blue-grey darken-2" v-show="show" dark fixed right bottom fab small open-on-hover @click="$vuetify.goTo(0)")
        v-icon expand_less
</template>

<script>
import { fetchDetail } from '~/apis'
import { format } from 'date-fns'

export default {
  async asyncData({$axios, params, error}) {
    let res = res = await fetchDetail($axios, params.id)
    let { data = {} } = res || {}
    const { create_time = '', subTitle = '', title = '', author = '', bImg = '' } = data || {}
    let formatCon = data.content && data.content.replace('<table>', '<div class="table-responsive"><table>')
    formatCon = formatCon.replace('</table>', '</table></div>')
    return { content: formatCon, create_time, subTitle, title, author, bImg }
  },
  data() {
    return {
      offsetTop: 0
    }
  },
  computed: {
    show() {
      return this.offsetTop > 120
    },
    date() {
      const { create_time } = this
      return create_time && format(create_time, 'MMMM D, YYYY')
    }
  },
  head () {
    return {
      title: `${this.title} | LiuX's Blog`,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  methods: {
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    }
  }
}
</script>

<style lang="scss">
.btm {
  bottom: 48px !important;
}
</style>





