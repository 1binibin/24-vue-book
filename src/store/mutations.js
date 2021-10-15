// 상태(History)를 관리 함 => state의 값을 변화 시킨다, 모든 데이터를 거쳐감
export default {
  MUT_BOOKS(state, v) {
    state.books = v;
  },
  MUT_BOOK(state, v) {
    state.book = v;
  },
  MUT_LOADING(state, v) {
    state.isLoading = v;
  },
};
