<template lang="pug">
  v-footer.bg-default(height="auto")
    v-card.flex.bg-default(flat tile)
      v-card-actions.justify-center.pad-c-m.blue-grey--text.text--darken-2 Copyright © &nbsp;<strong>Liux's Blog</strong>&nbsp; 2019
</template>


<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    })
  }
</script>

<style lang="scss" scoped>
.pad-c-m {
  padding-top: 1.5em;
  padding-bottom: 1.5em;
}
</style>

