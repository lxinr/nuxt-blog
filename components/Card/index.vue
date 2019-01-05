<template lang="pug">
  v-layout.pt-5(justify-center)
    v-flex.mt-3(xs10 sm8 set-sm3 flex-column)
      v-card(
        flat
        hover
        @click.prevent="btn"
      )
        v-img(
          class="white--text"
          :aspect-ratio="8"
          :src="data.listImg"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        )
          v-container(fill-height fluid)
            v-layout(fill-height column)
              v-flex.flex.space-between.flex-column(xs12 align-start flexbox) 
                .font-weight-light.font-italic.headline.full-w {{data.title}}
                .en-font.text-xs-right.full-w {{`Posted by ${data.author} on ${date}`}}
        v-card-title(primary-title)
          .mb-0 {{data.subTitle}}
        v-card-actions.flex-end
          v-btn(flat color="orange") 阅读全文
</template>

<script>
import { format } from 'date-fns'

export default {
  props: {
    data: {
      type: Object,
      default: (() => ({}))
    }
  },
  data() {
    return {
      reviews: 413,
      value: 4.5,
      card_text:
        "补充在实际使用中利用css实现的一些功能的方法"
    }
  },
  computed: {
    date() {
      const { create_time } = this.data
      return create_time && format(create_time, 'MMMM D, YYYY')
    }
  },
  methods: {
    btn() {
      const { title } = this.data
      this.$router.push(`/blog/${title}`)
    }
  },
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
.flex-end {
  justify-content: flex-end;
}
.space-between {
  justify-content: space-between
}
.full-w {
  width: 100%;
}
</style>
