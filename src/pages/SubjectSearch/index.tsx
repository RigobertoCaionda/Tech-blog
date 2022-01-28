import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PageContainer, PageTitle } from '../../app.styled';
import { NewsListType } from '../../types/NewsListType';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import NewsItem from '../../components/News';
import * as C from './styled';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import api from '../../api';
import axios from 'axios'; 

const Page: React.FC = () => {
	
	const [newsList, setNewsList] = useState<NewsListType[]>([]);
	const [postsTotal, setPostsTotal] = useState(0);
	const [loading, setLoading] = useState(true);
	const [pageCount, setPageCount] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	let queryString: string[] = [];
	let offset = (currentPage - 1) * 4;

	const useQueryString = () => {
		 return new URLSearchParams(useLocation().search);
	}

	const query = useQueryString();

		const getPosts = async () => {
			try {
				let { 
					data: { 
						data: { postData, total } 
					} 
				} = await api.get(`/blog/search?subject=${query.get('subject')}&${queryString.join('&')}`);
				setLoading(false);
				setNewsList(postData);
				setPostsTotal(total);
			}
			catch (e) {		 
				if (axios.isAxiosError(e)) {
				let axiosError = e.response?.data.data.error;
				console.log(axiosError);
			}
			}
		}

		useEffect(() => {
			queryString.push('limit=4');
			queryString.push(`offset=${offset}`);
			queryString.push('sort=desc');

			getPosts();
		}, [currentPage]);

		useEffect(()=> {
		if (newsList.length > 0){
			setPageCount(Math.ceil(postsTotal / newsList.length));
		} else {
			setPageCount(0);
		}
	},[postsTotal]);

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
					<PageTitle>Assunto: {query.get('subject')}</PageTitle>

					{newsList.length === 0 && !loading &&
						<div className="no-post-available">Nenhum resultado encontrado</div>
					}

					{newsList.length > 0 &&
						newsList.map((item: any, key) => (
								<NewsItem key={key} item={item} link={`/blog/${item._id}`} />
							))
					}

					{newsList &&
						newsList.length > 0 &&
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
				</C.Container>
			</PageContainer>
		);
}
export default Page;