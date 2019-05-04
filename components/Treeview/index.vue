<template lang="pug">
  dl.catalog-text
    dt(:class="`catalog-text-${data.depth}`" @click="$vuetify.goTo(data.top)") {{`${name}||${offset}`}}
    template(v-if="children")
      tree-content(v-for="(item, index) in children"  :key="index" :data="item")
</template>

<template lang="pug">
  ul.catalog-ul
    li(:class="[`catalog-text catalog-text-${item.depth}`, index === idx ? 'active' : '']" @click="btn(item.top, index)" v-for="(item, index) in data"  :key="index") {{item.text}}
</template>


<script>
import { mapState } from 'vuex'

export default {
  name: 'TreeView',
  components: {
    treeContent: () => import('./Treecontent.vue')
  },
  props: {
    data: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      isClick: false,
      idx: 0,
      toScroll: 0
    }
  },
  computed: {
    ...mapState(['scrollTop'])
  },
  watch: {
    scrollTop(top) {
      const { data, scrollTop, idx, isClick, toScroll } = this
      if (data && scrollTop && scrollTop > (data[0].top)) {
        this.idx = (toScroll && isClick) ? data.findIndex(item => item.top  === toScroll) : data.findIndex(item => item.top > scrollTop) - 1
      } else {
        this.idx = 0
      }
    }
  },
  methods: {
    btn(top, index) {
      this.isClick = true
      this.toScroll = top
      this.$vuetify.goTo(top)
      this.idx = index
      setTimeout(() => {
        this.isClick = false
      }, 600)
      // this.idx = index
    }
  }
}
</script>
