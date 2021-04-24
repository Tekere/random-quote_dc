<template>
  <Loading v-if="isLoading"></Loading>
  <div v-else class="ly_page ly_page_author">
    <div class="bl_randomBtn">
      <router-link to="/" class="bl_randomBtn_link"
        >random<svg
          stroke="currentColor"
          fill="none"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path></svg
      ></router-link>
    </div>
    <div class="bl_author_name_wrapper">
      <h1 class="bl_author_name">{{ $route.query.authorName }}</h1>
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
    <div class="bl_paginate_wrapper">
      <div class="bl_paginate">
        <a
          v-if="currentPage > 1"
          @click.prevent="prevPage"
          href=""
          class="bl_paginate_link prev"
          >←</a
        >
        <a
          v-for="num in maxPage"
          :key="num"
          @click.prevent="paginate(num)"
          href=""
          class="bl_paginate_link"
          :class="{ is_active: num == $route.query.page }"
          >{{ num }}</a
        >
        <a
          v-if="currentPage < maxPage"
          @click.prevent="nextPage"
          href=""
          class="bl_paginate_link next"
          >→</a
        >
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
  data(): {
    quotes: Array<any>
    isLoading: boolean
    currentPage: number
    maxPage: number
  } {
    return {
      quotes: [],
      isLoading: true,
      currentPage: 1,
      maxPage: 0,
    }
  },

  created() {
    this.getAuthorQuote(String(this.$route.query.authorName))
  },

  methods: {
    getAuthorQuote(authorName: string): void {
      this.isLoading = true
      axios
        .get(
          `https://quote-garden.herokuapp.com/api/v3/quotes?author=${authorName}&page=${this.currentPage}`
        )
        .then((res) => {
          this.maxPage = Number(res.data.pagination.totalPages)
          this.quotes = res.data.data.slice()
        })
        .then(() => {
          this.isLoading = false
        })
    },
    prevPage(): void {
      this.currentPage = Number(this.currentPage) - 1
      this.paginate(this.currentPage)
    },
    nextPage(): void {
      this.currentPage = Number(this.currentPage) + 1
      this.paginate(this.currentPage)
    },
    jumpPage(num: number) {
      this.currentPage = num
      this.paginate(num)
    },
    paginate(n: number) {
      this.$router.push({
        query: {
          authorName: String(this.$route.query.authorName),
          page: n,
        },
      })
      this.getAuthorQuote(String(this.$route.query.authorName))
    },
  },
})
</script>

<style lang="scss">
[v-cloak] {
  display: none;
}
.ly_page_author {
  height: auto;
  padding-bottom: 100px;
}
.bl_author_name_wrapper {
  width: 820px;
  margin: 100px auto 50px;
}
.bl_author_name {
  font-size: 24px;
  font-weight: bold;
  color: #666;
}
.bl_quotes_unit {
  padding-bottom: 100px;
}
.bl_quote_wrapper_author {
  margin-bottom: 30px;
}
.bl_paginate_wrapper {
  width: 820px;
  margin: 0 auto;
}
.bl_paginate_link {
  font-size: 20px;
  padding: 10px 15px;
  color: #000;
  text-decoration: none;
  border-radius: 3px;
  margin-right: 5px;
}
.bl_paginate_link.is_active {
  background-color: #000;
  color: #fff;
}
</style>
