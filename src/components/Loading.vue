<template>
  <div class="ly_loading">
    <p class="bl_loading">loading...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Loading',
  props: {
    isLoading: Boolean,
  },
})
</script>

<style lang="scss">
.ly_loading {
  position: relative;
  height: 100vh;
}
.bl_loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
