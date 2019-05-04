<template lang="pug">
  .full-w.header-bar
    v-toolbar(fixed flat dense scroll-off-screen :color="toolbar.color" :inverted-scroll="toolbar.invertedScroll" :scroll-threshold="80" :class="{'transparent' : toolbar.transparent}" v-for="(toolbar, index) in toolbars" :key="index")
      v-menu(offset-y transition="scale-transition" origin="top left" nudge-bottom="5" nudge-right="30" min-width="100")
        v-toolbar-side-icon.hidden-md-and-up(:class="{'white--text' : toolbar.whiteText}" slot="activator")
        v-list.bg-lighten-5
          v-list-tile(v-for="(item, i) in toolbar.menu" :key="i")
            v-list-tile-title.txt-center(@click="$router.push(item.path)") {{item.tit}}
      v-toolbar-title.hidden-sm-and-down.pointer(:class="{'white--text' : toolbar.whiteText}" @click="$router.push('/')") LiuX
      v-spacer
      v-toolbar-items.hidden-sm-and-down
        v-btn.h3(:class="{'white--text' : toolbar.whiteText}" flat @click="$router.push(item.path)" v-for="(item, i) in toolbar.menu" :key="i") {{item.tit}}
</template>

<script>
import { menu } from '~/config'

export default {
  data() {
    return {
      toolbars: [
        {
          transparent: true,
          invertedScroll: false,
          whiteText: true,
          color: '',
          menu
        },
        {
          transparent: false,
          invertedScroll: true,
          whiteText: false,
          color: 'grey lighten-3',
          menu
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.header-bar {
  position: relative;
  z-index: 99;
}
</style>
