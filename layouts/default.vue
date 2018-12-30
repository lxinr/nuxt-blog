<template>
  <v-app class="bg-default">
    <Header />
    <nuxt />
    <Footer />
  </v-app>
</template>

<script>
import Footer from '~/components/Footer'
import Header from '~/components/Header'
export default {
  components: {
    Footer,
    Header
  }
}
</script>
