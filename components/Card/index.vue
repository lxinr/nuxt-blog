<template lang="pug">
  v-layout.pt-5(justify-center)
    v-flex(xs12 sm8 set-sm3)
      v-hover
        v-card(
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 12 : 2}`"
          class="mx-auto"
        )
          v-img(
            class="white--text"
            height="150px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          )
            v-container(fill-height fluid)
              v-layout(fill-height column)
                v-flex.flex.space-between.flex-column(xs12 align-start flexbox) 
                  .font-weight-light.font-italic.headline.full-w Top 10 Australian beaches,Top 10 Australian beaches
                  .en-font.text-xs-right.full-w Posted by Liux on October 1, 2018
          v-card-title(primary-title)
            .mb-0 {{card_text}}
          v-card-actions
            v-btn(flat color="orange") 阅读全文
</template>


<script>
export default {
  data() {
    return {
      reviews: 413,
      value: 4.5,
      card_text:
        "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat."
    }
  }
}
</script>

<style lang="scss" scoped>
.en-font {
  font-family: Lora,'Times New Roman',serif;
  font-style: italic;
}
.flex {
  width: 100%;
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.space-between {
  justify-content: space-between
}
.full-w {
  width: 100%;
}
</style>
