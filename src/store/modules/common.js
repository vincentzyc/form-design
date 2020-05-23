const state = {
  pageData: {
    list: [],
    title: "云忆网络",
    statsCode: "",
    theme: "theme1",
    fixedBottom: [],
    fixedCustom: [],
    style: {
      backgroundColor: "#fff",
      backgroundImage: "",
    }
  },
  dragWg: {},
  selectWg: {},
  selectWgIndex: null,
  selectWginList: [],
  configTab: 'page',
  wgCollapse: "base",
  predefineColors: [
    '#000000',
    '#666666',
    '#cccccc',
    '#ffffff',
    'rgba(255, 255, 255, 0)',
    '#ff0000',
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585'
  ]
}

// const actions = {

// }

// const getters = {
//   selectTheme: state => state.selectTheme
// }

const mutations = {
  setDragWg(state, payload) {
    state.dragWg = payload;
  },
  setPageData(state, payload) {
    if (!payload.fixedBottom) payload.fixedBottom = [];
    if (!payload.fixedCustom) payload.fixedCustom = [];
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