export default {
  productions(state) {
    return state.productions;
  },
  hasProductions(state) {
    return state.productions && state.productions.length > 0;
  }
};
