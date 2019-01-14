<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-actions class="grey darken-3 justify-center display-5">
        Copyright © &nbsp;<strong>Liux's Blog</strong>&nbsp; 2019
        <!-- &copy;2019&nbsp;&nbsp;—&nbsp;&nbsp;<strong>Liux's Blog</strong> -->
      </v-card-actions>
    </v-card>
  </v-footer>
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
