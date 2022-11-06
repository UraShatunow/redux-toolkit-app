import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
	count: 0,
	todos: ['снять видео', 'смонтировать видео', 'рассказать про toolkit'],
}

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');

export default createReducer(initialState, {
	[increment]: (state) => {
		state.count = state.count + 1
	},
	[decrement]: (state) => {
		state.count = state.count - 1
	}
})