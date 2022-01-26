import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as C from './styled';
import { PageContainer, PageTitle } from '../../app.styled';
import NewsItem  from '../../components/News';
import { NewListItem } from '../../types/NewListItem';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { doLogout } from '../../helpers/AuthHandler';
import api from '../../api';
import axios from 'axios';

const Page: React.FC = () => {
	const navigate = useNavigate();
	const [postList, setPostList] = useState<NewListItem[]>([]);
	const [postsTotal, setPostsTotal] = useState(0);
	const [idUser, setIdUser] = useState('');
	const [pageCount, setPageCount] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	let queryString: string[] = [];
	let offset = (currentPage - 1) * 4;

		const getUserPosts = async () => {
			try {
				const {
				data: {
					data: { postData, total, idUser: id }
				}
			} = await api.get(`/user/posts?${queryString.join('&')}`);
			setPostList(postData);
			setPostsTotal(total);
			setIdUser(id);
		} catch (e) {
			if (axios.isAxiosError(e)) {
				let axiosError = e.response?.data.data.error;
				switch(axiosError) {
					case 'token é necessário':
					case 'this token is not valid':
					case 'Esse usuário não existe':
						navigate('/signin');
						break;
					default:
					console.log(axiosError);
				}
			}
		}
		}

	useEffect(() => {
		document.title = 'Tech Blog | Minha Conta';
	}, []);

	useEffect(() => {
			queryString.push('limit=4');
			queryString.push(`offset=${offset}`);
			queryString.push('sort=desc');

			navigate(`/my-account?${queryString.join('&')}`);
			getUserPosts();
		}, [currentPage]);

	useEffect(()=>{
		if (postList.length > 0){
			setPageCount(Math.ceil(postsTotal / postList.length));
		} else {
			setPageCount(0);
		}
	},[postsTotal]);

	const handleLogout = () => {
		doLogout();
		window.location.href = '/';
	}

	const handleNextClick = () => {
		if (currentPage < pageCount) {
			setCurrentPage(currentPage + 1);
		}
	}

	const handlePrevClick = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	}

	return (
			<PageContainer>
				<C.Container>
					<PageTitle>Minhas postagens</PageTitle>

					{postList.length === 0 &&
						<div className="no-post-available">Você não tem nenhum post disponível</div>
					}

					{postList.length > 0 &&
						postList.map((item, key) => (
								<NewsItem key={key} item={item} link={`/blog/${(item as any)._id}/user/${(item as any)._id}`} />
							))
					}

					{postList &&
						postList.length > 0 &&
						<div className="pagination">
						<div className="prev" onClick={handlePrevClick}>
								<ArrowBackIcon style={{ fontSize: '0.8rem' }} />Anterior
						</div>

						<div className="current">{currentPage} de {pageCount}</div>

						<div className="next" onClick={handleNextClick}>
								<ArrowForwardIcon style={{ fontSize: '0.8rem' }} />Próxima
						</div>
					</div>
					}

					<div className="user-options">
						<Link to={`/edit-profile/${idUser}`}>Editar Perfil</Link>
						<Link to={`/delete-account/${idUser}`}>Eliminar conta</Link>
						<button onClick={handleLogout}>sair da conta</button>
					</div>
				</C.Container>
			</PageContainer>
		);
}
export default Page;