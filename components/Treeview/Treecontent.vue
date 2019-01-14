<template lang="pug">
  dd.catalog-text
    a(href="javascript::" v-if="!children" :class="`catalog-text-${data.depth}`" @click="$vuetify.goTo(data.top)") {{name}}
    tree-view(v-else :data="data")
</template>

<script>
import treeView from './index.vue'
export default {
  name: 'TreeContent',
  components: {
    treeView
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    name() {
      return this.data && this.data.text
    },
    children() {
      return this.data && this.data.children
    }
  }
}
</script>
