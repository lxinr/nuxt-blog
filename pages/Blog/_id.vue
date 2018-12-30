<template lang="pug">
  v-content.px-0.py-0(v-scroll="onScroll")
    v-parallax.par-h(height="auto" :src="bImg")
      v-layout(
        align-center
        column
        justify-center
      )
        h1.display-2.font-weight-thin.mb-3 {{title}}
        h4.subheading.mb-5 {{subTitle}}
        h4.subheading.font-weight-light.en-font {{`Posted by ${author} on ${date}`}}
    .blog-container(v-html="content")
    v-fab-transition
      v-btn.btm(color="blue-grey darken-2" v-show="show" dark fixed right bottom fab small open-on-hover @click="$vuetify.goTo(0)")
        v-icon expand_less
</template>

<script>
import { fetchDetail } from '~/apis'
import { format } from 'date-fns'

export default {
  async asyncData({$axios, params}) {
    // console.log('__a--555||--',  decodeURIComponent(params.id))
    let { content } = await fetchDetail($axios, params.id)
    const { create_time, subTitle, title, author, bImg } = content
    // console.log('rrr-----', content)
    let formatCon = content.content && content.content.replace('<table>', '<div class="table-responsive"><table>')
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
      title: this.title,
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





