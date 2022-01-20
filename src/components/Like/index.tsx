import { useState } from 'react';
import * as C from './styled';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import axios from 'axios';

type Props = {
	color: string;
	title: string;
	commentId: string;
	postId: string;
};

const Page: React.FC<Props> = ({children, color, commentId, postId}) => {
	const [btnColor, setBtnColor] = useState(color);
	const navigate = useNavigate();

	const handleLikeClick = async () => {
		btnColor === '#f00' ? setBtnColor('#757575') : setBtnColor('#f00');
		let option = btnColor === '#f00' ? 'false' : 'true'; // Nessa linha aqui
		try {
			let body = { commentId, option };
			let {data: json} = await api.put(`/blog/${postId}/likeComment`, body);
			if (!json.data.status) {
				btnColor === '#f00' ? setBtnColor('#757575') : setBtnColor('#f00'); 
			} 

		} catch (e) {
			if (axios.isAxiosError(e)) {
				let axiosError = e.response?.data.data.error;
				if (axiosError === 'token é necessário' || axiosError === 'this token is not valid'
					|| axiosError === 'Esse usuário não existe') {
					navigate('/signin');
					return;
				}
				console.log(e.response?.data.data);
			}
		}
	}

	return (
		<C.Like color={btnColor} onClick={handleLikeClick}>{children}</C.Like>
		);
}
export default Page;