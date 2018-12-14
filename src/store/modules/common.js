// import api from "@/assets/js/api.js"
import allWidget from '@/assets/json/all-widget.json'
import * as types from '../types'

const state = {
	basicComponents: allWidget.basicComponents,
	pageData: {
		list: [],
		config: {
			labelWidth: 100,
			labelPosition: 'top'
		},
	},
	selectWg: {}
}

const actions = {
	// getBusinessTypeList({commit}) {
	//   api.vkcPost2("supermarketloan/crm/qualitycontrol/findAllBusinessTypes", "", res => {
	//     commit(types.BUSINESS_TYPE_LIST, res);
	//   });
	// }
}

const mutations = {
	[types.PAGE_DATA](state, payload) {
		state.pageData = payload;
	},
	[types.SELECT_WG](state, payload) {
		state.selectWg = payload;
	}
}

export default {
	state,
	actions,
	mutations
}