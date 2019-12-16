const state = {
  pageData: {
    list: [],
    title: "云忆网络",
    statsCode: "",
    theme: "theme1",
    style: {
      backgroundColor: "#fff",
      backgroundImage: "",
    }
  },
  selectWg: [],
  configTab: 'page',
  wgCollapse: "base"
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
  }
}

export default {
  state,
  mutations
}