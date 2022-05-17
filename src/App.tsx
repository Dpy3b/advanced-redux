import React from 'react';
import TodoList from './components/TodoList';
import UserList from './components/UserList';
import './App.scss';
function App() {
	return (
		<div className='App'>
			<UserList />
			<hr></hr>
			<TodoList />
		</div>
	);
}

export default App;
