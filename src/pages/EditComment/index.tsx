import { useState } from 'react';
import { PageContainer, PageTitle } from '../../app.styled';
import { Container } from './styled';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api';
import axios from 'axios';

const Page: React.FC = () => {

	const [textEdited, setTextEdited] = useState('');
	const [disabled, setDisabled] = useState(false);
	let { id, idPost } = useParams();
	let navigate = useNavigate();

	const handleButtonClick = async () => {
		setDisabled(true);
		try {
			let body = { commentId: id, commentText: textEdited };
			let { data: json } = await api.put(`/blog/${idPost}/editComment`, body);

			if (json.data.status) {
				navigate(`/blog/${idPost}`);
			}
		} catch(e) {
			if (axios.isAxiosError(e)) {
				let axiosError = e.response?.data.data.error;
				if (axiosError === 'token é necessário' || axiosError === 'this token is not valid'
					|| axiosError === 'Esse usuário não existe') {
					navigate('/signin');
					return;
				}
			}
		}
		setDisabled(false);
	}

	return (
		<PageContainer>
			<Container>
				<PageTitle>Editar Comentário</PageTitle>
				<div className="textarea">
					<textarea value={textEdited} onChange={e => setTextEdited(e.target.value)} 
						disabled={disabled}></textarea>
					<button onClick={handleButtonClick} disabled={disabled}>Atualizar</button>
				</div>
			</Container>
		</PageContainer>
		);
}
export default Page;