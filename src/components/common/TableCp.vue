<template>
  <div class="tbl-wrap">
    <!-- table -->
    <table class="table">
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>저자</th>
          <th>요약설명</th>
          <th>표지</th>
          <th>등록일</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        <TrCp v-for="book in GET_BOOKS.books" :key="book.idx" :book="book" />
      </tbody>
    </table>
    <PagerCp :pager="GET_BOOKS.pager" v-show="isPager" />
  </div>
</template>

<script>
import TrCp from "@/components/common/TrCp.vue";
import PagerCp from "@/components/common/PagerCp.vue";

import { mapGetters } from "vuex";

export default {
  name: "TableCp",
  components: { TrCp, PagerCp },
  props: ["isPager"],
  computed: {
    ...mapGetters(["GET_BOOKS"]),
  },
  beforeUpdate() {
    this.$store.dispatch("ACT_LOADING", true);
  },
  updated() {
    console.log(this.GET_BOOKS.pager);
    this.$store.dispatch("ACT_LOADING", false);
  },
};
</script>

<style lang="scss" scoped>
.tbl-wrap {
  .table {
    text-align: center;
    th {
      background-color: $accent-color;
      color: $light-color;
      padding: 0.75em 0;
    }
  }
}
</style>
