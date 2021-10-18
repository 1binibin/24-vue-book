<template>
  <div class="info-wrap" :style="style">
    <div class="title">{{ title }}</div>
    <div class="content">{{ content }}</div>
  </div>
</template>

<script>
import mixinInfo from "@/components/mixins/mixininfo";

export default {
  name: "InfoTxt",
  mixins: [mixinInfo],
};
</script>

<style lang="scss">
.info-wrap {
  @include flex;
  .title {
    color: $primary-color;
    width: 20%;
  }
  .content {
    color: $dark-color;
    width: 80%;
  }
}
</style>
