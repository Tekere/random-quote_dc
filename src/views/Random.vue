<template>
  <Loading v-if="isLoading"></Loading>
  <div v-else class="ly_page">
    <div class="bl_randomBtn">
      <a href="" @click.prevent="getRandomQuote" class="bl_randomBtn_link"
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
      ></a>
    </div>
    <div class="ly_cont">
      <div class="bl_quote_wrapper">
        <p class="bl_quote bl_quote__leftLine">“{{ quote.quoteText }}”</p>
      </div>
      <router-link
        :to="{ path: '/author', params: { authorName: quote.quoteAuthor } }"
        class="bl_author_wrapper"
      >
        <div class="bl_author">
          <p class="bl_author_name">{{ quote.quoteAuthor }}</p>
          <span class="bl_author_category">{{ quote.quoteGenre }}</span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            color="#000000"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            style="color: rgb(0, 0, 0)"
          >
            <path
              fill-rule="evenodd"
              d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
              clip-rule="evenodd"
            ></path>
            <path
              fill-rule="evenodd"
              d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import Loading from '@/components/Loading.vue'

export default defineComponent({
  name: 'Random',
  components: {
    Loading,
  },
  data() {
    return {
      quote: '',
      isLoading: true,
    }
  },
  created() {
    this.getRandomQuote()
  },
  methods: {
    getRandomQuote(): void {
      this.isLoading = true
      axios
        .get('https://quote-garden.herokuapp.com/api/v3/quotes/random')
        .then((res) => {
          this.quote = res.data.data[0]
        })
        .then(() => {
          this.isLoading = false
        })
    },
  },
})
</script>

<style lang="scss">
.ly_page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.ly_cont {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  // box-align: center;
  align-items: center;
}
.bl_randomBtn {
  margin: 2rem 4rem 0 0;
  text-align: right;
  .bl_randomBtn_link {
    color: #000;
    text-decoration: none;
    svg {
      position: absolute;
    }
  }
}
.bl_quote_wrapper {
  width: 820px;
}
.bl_quote {
  font-size: 36px;
  line-height: 1.375;
  font-weight: 500;
}
.bl_quote__leftLine {
  padding-left: 6rem;
  border-left: 8px solid #f7df94;
}
.bl_author_wrapper {
  display: block;
  color: #000;
  text-decoration: none;
  margin-top: 2rem;
  padding: 4rem 2rem;
  width: 820px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: #333333;
    color: #fff;
    .bl_author svg {
      color: #fff !important;
    }
  }
  .bl_author {
    position: relative;
    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
    }
  }
  .bl_author_name {
    font-size: 24px;
    font-weight: bold;
  }
  .bl_author_category {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.87rem;
  }
}
</style>
