<template>
  <Loading v-if="isLoading"></Loading>
  <div else class="">author</div>
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
      isLoading: true,
    }
  },
  // created() {},
  methods: {
    getAuthorQuote(authorName: string) {
      axios
        .get(
          `https://quote-garden.herokuapp.com/api/v3/quotes?author=${authorName}`
        )
        .then((res) => {
          console.log(res)
        })
        .then(() => {
          this.isLoading = false
        })
    },
  },
})
</script>

<style></style>
