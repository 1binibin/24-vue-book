<template>
  <div class="info-wrap" :style="style">
    <div class="title">{{ title }}</div>
    <div class="content">
      <img :src="content" :alt="title" class="img" />
    </div>
  </div>
</template>

<script>
import mixinInfo from "@/components/mixins/mixininfo";

export default {
  name: "InfoImg",
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
    .img {
      max-width: 120px;
    }
  }
}
</style>
