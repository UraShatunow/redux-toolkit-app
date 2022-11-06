import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement, removeLastTodo, addTodo } from './toolkitRedux/toolkitSlice';

const addAsyncTodo = () => {
	return async dispatch => {
		setTimeout(() => {
			dispatch(addTodo("ASYNC TODO"))
		}, 2000)
	}
}

function App() {
	const count = useSelector((state => state.toolkit.count));
	const todos = useSelector((state => state.toolkit.todos));
	const dispatch = useDispatch();

	return (
		<div className='App'>

			<h1 className='title'>Счетчик {count}</h1>

			<button className='button' onClick={() => dispatch(increment())}>Инкремент</button>
			<button className='button' onClick={() => dispatch(decrement())}>Декремент</button>
			<button className='button' onClick={() => dispatch(removeLastTodo())}>Удалить последний туду</button>
			<button className='button' onClick={() => dispatch(addTodo(prompt()))}>Добавить туду</button>
			<button className='button' onClick={() => dispatch(addAsyncTodo())}>Добавить АСИНК ТУДУ</button>

			<ul>
				{todos.map((todo) => {
					return (
						<li className='li' key={todo}>{todo}</li>
					)
				})}
			</ul>

		</div>
	);
}

export default App;
