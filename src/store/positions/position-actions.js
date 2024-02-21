export const ADD_POSITIONS = 'ADD_POSITIONS';

// Action Creator
export const addPositions = (positions) => ({
	type: ADD_POSITIONS,
	payload: positions,
});
