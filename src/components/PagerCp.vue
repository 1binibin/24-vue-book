<template>
  <section class="wrapper list-wrapper">
    <TableCp />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import TableCp from "./inc/TableCp";

export default {
  name: "PagerCp",
  components: { TableCp },
  computed: {
    ...mapGetters(["GET_BOOKS"]),
  },
  watch: {
    GET_BOOKS: function (v) {
      console.log(v);
    },
  },
  created() {
    console.log(this);
    this.$store.dispatch("ACT_BOOKS");
  },
};
</script>

<style lang="scss" scoped>
.list-wrapper {
}
</style>
