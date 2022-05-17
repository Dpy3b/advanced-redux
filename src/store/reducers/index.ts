import { todoReducer } from './todoReducer';
import { userReducer } from './userReducer';
import { combineReducers, Dispatch } from 'redux';

export const rootReducer = combineReducers({
	user: userReducer,
	todo: todoReducer,
});

// получаем тип нашего редюсера с помощью тайпскриптовского ReturnType
export type RootState = ReturnType<typeof rootReducer>;
