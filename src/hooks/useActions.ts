import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../store/action-creators'; // импортируем сюдам все экшн криэйторы // сосредотачиваем их в одном файле

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(ActionCreators, dispatch); // связываем экшн криэйторы с диспатчем, дипатч уже не понадобиться, вызываем экшн криейтор и он сам прокидывается в диспатч
};
