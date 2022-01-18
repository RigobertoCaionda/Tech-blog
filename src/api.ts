import axios from 'axios';
import Cookies from 'js-cookie';

let token: string = Cookies.get('token') as string;

const api = axios.create({
	baseURL: 'http://localhost:3001',
	headers: {
		authorization: `Bearer ${token}`
	}
});
export default api;

