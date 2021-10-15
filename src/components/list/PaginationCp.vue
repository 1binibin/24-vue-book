<template>
  <section class="wrapper list-wrapper">
    <TableCp />
  </section>
</template>

<script>
import TableCp from "@/components/common/TableCp";

export default {
  name: "PaginationCp",
  components: { TableCp },
  props: ["page"],
  created() {
    this.$store.dispatch("ACT_BOOKS", 1);
  },
};
</script>

<style lang="scss" scoped></style>
