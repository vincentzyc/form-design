const state = {
  pageData: {
    list: [],
    formList: [],
    config: {}
  },
  selectWg: [],
  configTab: 'page',
  wgCollapse: "base",
  selectTheme: ""
}

// const actions = {

// }

// const getters = {
//   selectTheme: state => state.selectTheme
// }

const mutations = {
  setPageData(state, payload) {
    state.pageData = payload;
  },
  setSelectWg(state, payload) {
    state.selectWg = payload;
  },
  setConfigTab(state, payload) {
    state.configTab = payload;
  },
  setWgCollapse(state, payload) {
    state.wgCollapse = payload;
  },
  setSelectTheme(state, payload) {
    state.selectTheme = payload;
  }
}

export default {
  state,
  mutations
}