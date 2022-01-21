import { useState, useEffect } from 'react';
import * as C from './styled';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import axios from 'axios';

type Props = {
	colorBt: string;
	postId: string;
	setPostLikes: any;
	postLikes: number; 
};

const Page: React.FC<Props> = ({ colorBt, postId, setPostLikes, postLikes }) => {
	const [btnColor, setBtnColor] = useState(colorBt);
	const navigate = useNavigate();

	useEffect(() => {
		setBtnColor(colorBt);
	}, [colorBt]);

	const handleLikeClick = async () => {
		if (btnColor === '#f00') {
			setBtnColor('#757575');
			setPostLikes(postLikes - 1);
		} else {
			setBtnColor('#f00');
			setPostLikes(postLikes + 1);
		}
		
		try {
			let body = { option: btnColor === '#f00' ? false : true };
			let {data: json} = await api.put(`/blog/${postId}/like`, body);

		} catch (e) {
			if (axios.isAxiosError(e)) {
				let axiosError = e.response?.data.data.error;
				if (axiosError === 'token é necessário' || axiosError === 'this token is not valid'
					|| axiosError === 'Esse usuário não existe') {
					navigate('/signin');
					return;
				}
			}
		}
	}

	return (
		<C.LikePost className="fas fa-heart" color={btnColor} title="curtir" onClick={handleLikeClick}></C.LikePost>
		);
}
export default Page;