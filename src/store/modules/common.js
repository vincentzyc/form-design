// import api from "../../assets/js/api.js"

const state = {
	pageData: {
		list: [],
		formList: [],
		config: {}
	},
	selectWg: [],
	configTab: 'widget',
	selectTheme: ""
}

const actions = {
	// getBusinessTypeList({commit}) {
	//   api.vkcPost2("supermarketloan/crm/qualitycontrol/findAllBusinessTypes", "", res => {
	//     commit(types.BUSINESS_TYPE_LIST, res);
	//   });
	// }
}

// const getters = {
//   businessTypeList: state => state.businessTypeList
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
	setSelectTheme(state, payload) {
		state.selectTheme = payload;
	}
}

export default {
	state,
	actions,
	mutations
}