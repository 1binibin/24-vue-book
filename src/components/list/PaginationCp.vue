<template>
  <section class="wrapper list-wrapper">
    <TableCp />
  </section>
</template>

<script>
import TableCp from "@/components/common/TableCp";

export default {
  name: "PagerCp",
  components: { TableCp },
  props: ["page"],
  created() {
    console.log(this);
    console.log(this.page);
    this.$store.dispatch("ACT_BOOKS", this.page);
  },
};
</script>

<style lang="scss" scoped></style>
