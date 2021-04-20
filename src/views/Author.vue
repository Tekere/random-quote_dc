<template>
  <Loading v-if="isLoading"></Loading>
  <div else class="ly_page ly_page_author">
    <div class="bl_author_name_wrapper">
      <h1 class="bl_author_name">{{ $route.params.authorName }}</h1>
    </div>
    <div class="ly_cont ly_cont_author">
      <div class="bl_quotes_unit">
        <div
          v-for="quote in quotes"
          :key="quote.id"
          class="bl_quote_wrapper bl_quote_wrapper_author"
        >
          <p class="bl_quote bl_quote__leftLine">“{{ quote.quoteText }}”</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import Loading from '@/components/Loading.vue'
export default defineComponent({
  name: 'author',
  components: {
    Loading,
  },
  data() {
    return {
      quotes: [],
      isLoading: true,
    }
  },
  created() {
    this.getAuthorQuote(String(this.$route.params.authorName))
  },
  methods: {
    getAuthorQuote(authorName: string): void {
      axios
        .get(
          `https://quote-garden.herokuapp.com/api/v3/quotes?author=${authorName}`
        )
        .then((res) => {
          console.log(res)
          this.quotes = res.data.data.slice()
        })
        .then(() => {
          this.isLoading = false
        })
    },
  },
})
</script>

<style lang="scss">
.ly_page_author {
  height: auto;
  padding-top: 100px;
}
.bl_author_name_wrapper {
  width: 820px;
  margin: 0 auto 50px;
}
.bl_author_name {
  font-size: 24px;
  font-weight: bold;
  color: #666;
}
.bl_quotes_unit {
}
.bl_quote_wrapper_author {
  margin-bottom: 30px;
}
</style>
