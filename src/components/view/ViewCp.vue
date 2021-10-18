<template>
  <section class="wrapper view-wrapper">
    <InfoTxt :title="title" :content="content" :styled="{ padding: '1em' }" />
    <InfoImg :title="title" :src="content" :styled="{ padding: '1em' }" />
  </section>
</template>

<script>
export default {
  name: "ViewCp",
};
</script>

<style lang="scss" scoped></style>
