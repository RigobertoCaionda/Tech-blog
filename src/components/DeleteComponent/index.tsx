import { PageContainer, PageTitle } from '../../app.styled';
import { Container, Card } from './styled';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api';
import axios from 'axios';
import { doLogout } from '../../helpers/AuthHandler';

type Props = {
	data: {
		key: string,
		title: string,
		paragraphs: string[]
	}
}

const Page: React.FC<Props> = ({ data }) => {
	const {id, idPost} = useParams();
	const navigate = useNavigate();

	const handleClick = async (response: 'yes' | 'no' | 'cancel') => {
		switch(response) {
			case 'yes':
				switch(data.key) {
					case 'delete-account':
						try {
							let { 
								data: {
									data: { status }
								}                                       
								 } = await api.delete('/user/deleteProfile');
							if (status) {
								doLogout();
								return navigate('/signin');
							}
						} catch (e) {
							if (axios.isAxiosError(e)) {
							let axiosError = e.response?.data.data.error;
							if (axiosError === 'token é necessário' || axiosError === 'this token is not valid'
								|| axiosError === 'Esse usuário não existe') {
								return navigate('/signin');
							}
						}
						}
					break;

					case 'delete-post':
							try {
							let { 
								data: {
									data: { status }
								}                                       
								 } = await api.delete(`/blog/${id}`);
							if (status) {
								return navigate(`/my-account?limit=4&offset=0&sort=desc`);
							}
						} catch (e) {
							if (axios.isAxiosError(e)) {
							let axiosError = e.response?.data.data.error;
							if (
								axiosError === 'token é necessário' || 
								axiosError === 'this token is not valid' || 
								axiosError === 'Esse usuário não existe'
								) {
								return navigate('/signin');
							}
						}
						}
					break;

					case 'delete-comment':
						try {
							let config = { data: { commentId: id } }; // Envia-se em data
							let { data: json } = await api.delete(`/blog/${idPost}/comment`, config);
							if (json.data.status) {
								return navigate(`/blog/${idPost}`);
							}
						} catch (e) {
							if (axios.isAxiosError(e)) {
							let axiosError = e.response?.data.data.error;
							if (axiosError === 'token é necessário' || axiosError === 'this token is not valid'
								|| axiosError === 'Esse usuário não existe') {
								return navigate('/signin');
							}
						}
						}
					break;
				}
			break;

			case 'no':
				switch(data.key) {
					case 'delete-account':
						return navigate('/my-account?limit=4&offset=0&sort=desc');

					case 'delete-post':
					return navigate(`/my-account?limit=4&offset=0&sort=desc`);

					case 'delete-comment':
						return navigate(`/blog/${idPost}`);
				}
			break;

			case 'cancel':
				switch(data.key) {
					case 'delete-account':
						return navigate('/my-account?limit=4&offset=0&sort=desc');

						case 'delete-post':
						return navigate(`/my-account?limit=4&offset=0&sort=desc`);

					case 'delete-comment':
						return navigate(`/blog/${idPost}`);
				}
			break;
		}
	}

	return (
			<PageContainer>
				<Container>
					<PageTitle>{data.title}</PageTitle>

					<Card>

						<div className="paragraphs">
							{data.paragraphs.length > 0 &&
								data.paragraphs.map((item, key) => (
										<p key={key}>{item}</p>
									))
							}
						</div>

						<div className="button-groups">

							<div className="wrapper">
								<button onClick={(e) => handleClick('yes')}>Sim</button>
								<button onClick={(e) => handleClick('no')}>Não</button>
							</div>

							<div className="cancel-button">
								<button onClick={(e) => handleClick('cancel')}>Cancelar</button>
							</div>
						</div>
					</Card>
				</Container>
			</PageContainer>
		);
}
export default Page;