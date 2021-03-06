import Vuex from 'vuex';
import INoteSet from '../../classes/INoteSet';
import Scale from '../../classes/Scale';

const state = {
	key: <string> 'C',
	mode: <string> 'browser',
	notesPicked: <INoteSet | null> null,
	scale: <Scale | null> null,
	scales: <Map<string, Scale> | null> null
};

const getters = {
	key: (state: any) => state.key,
	mode: (state: any) => state.mode,
	notesPicked: (state: any) => state.notesPicked,
	scale: (state: any) => state.scale,
	scales: (state: any) => state.scales
};

const mutations = {
	updateKey: (state: any, key: string) => state.key = key,
	updateMode: (state: any, mode: string) => state.mode = mode,
	updateNotesPicked: (state: any, notesPicked: INoteSet) => state.notesPicked = notesPicked,
	updateScale: (state: any, scale: Scale) => state.scale = scale,
	updateScales: (state: any, scales: Map<string, Scale>) => state.scales = scales
};

const actions = {
	// updateTunings(context: any, tunings: any) {
	// 	context.commit('updateTunings', tunings);
	// },
	// updateScales(context: any, scales: [Scale]) {
	// 	context.commit('updateScales', scales);
	// },
	// updateScale(context: any, scale: Scale) {
	// 	context.commit('updateScale', scale);
	// }
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
};
