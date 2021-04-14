<template>
  <div class="ly_page">
    <!-- <a href="" class="el_randomBtn">Random</a> -->
    <div class="ly_cont">
      <div class="bl_quote_wrapper">
        <p class="bl_quote bl_quote__leftLine">
          “By the time Obama came into office, Washington had already agreed
          over a period of a few weeks to a $700 billion government infusion
          into the world banking system. Nothing of the sort had ever been done
          before, and it was done spit spot with very little national debate.”
        </p>
      </div>
      <!-- <div class="bl_author_wrapper">
        <div class="bl_author">
          <p class="bl_author_name">Bill Gates</p>
          <span class="bl_author_category">business</span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Random',
});
</script>

<style lang="scss">
.ly_page {
  height: 100vh;
}
.ly_cont {
  position: relative;
  height: 100%;
}
.bl_quote_wrapper {
  width: 820px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
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
</style>
