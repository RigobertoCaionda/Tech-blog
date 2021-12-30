import { Navigate } from 'react-router-dom';
import { ReactElement } from 'react';

const PrivateMethod = ({ children }: { children: ReactElement }) => {
	const token = true;
	return !token ? <Navigate to="/signin" /> : children;
}
export default PrivateMethod;