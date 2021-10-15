<template>
  <section class="wrapper list-wrapper"></section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ListCp",
  components: {},
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

<style lang="scss" scoped></style>
