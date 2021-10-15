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
    <PagerCp :v="GET_BOOKS.pager" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TrCp from "@/components/common/TrCp.vue";
import PagerCp from "@/components/common/PagerCp.vue";

export default {
  name: "TableCp",
  components: { TrCp, PagerCp },
  computed: {
    ...mapGetters(["GET_BOOKS"]),
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
