import { Navigate } from 'react-router-dom';
import { ReactElement } from 'react';
import { isLogged } from '../helpers/AuthHandler';

const PrivateMethod = ({ children }: { children: ReactElement }) => {
	const token = isLogged();
	return !token ? <Navigate to="/signin" /> : children;
}
export default PrivateMethod;