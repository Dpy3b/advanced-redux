import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/user';

const UserList: FC = () => {
	/* const {users, error, loading} = useTypedSelector(state => state.user); */
	const { users, error, loading } = useTypedSelector(state => state.user);
	const { fetchUsers } = useActions(); // наш волшебный хук возвращает экшн криейтор(ы)

	useEffect(() => {
		fetchUsers(); // ! экшн криэйтор сам прокидывается в дипатч, ахренеть
	}, []);

	if (loading) {
		return <h1>Идет загрузка...</h1>;
	}
	if (error) {
		return <h1>{error}</h1>;
	}

	return (
		<div>
			{users.map(user => (
				<div key={user.id}>{user.name}</div>
			))}
		</div>
	);
};

export default UserList;
