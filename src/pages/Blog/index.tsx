import { useState, useEffect } from 'react';
import { PageContainer } from '../../app.styled';
import { useNavigate } from 'react-router-dom';
import * as C from './styled';
import SearchInput from '../../components/SearchInput';
import NewsItem from '../../components/News';
import { NewsListType } from '../../types/NewsListType';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import api from '../../api';
import axios from 'axios'; 

const Page = () => {

	const navigate = useNavigate();
	const [newsList, setNewsList] = useState<NewsListType[]>([]);
	const [postsTotal, setPostsTotal] = useState(0);
	const [pageCount, setPageCount] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [q, setQ] = useState('');
	const [mostLiked, setMostLiked] = useState(false)
	const [mostViewed, setMostViewed] = useState(false);
	let queryString: string[] = [];
	let offset = (currentPage - 1) * 5;

		const getAllPosts = async () => {
			try {
				let {data: json} = await api.get(`/blog?${queryString.join('&')}`);
				setNewsList(json.data.postData);
				setPostsTotal(json.data.total);
			}
			catch (e) {		 
				if (axios.isAxiosError(e)) {
				console.log(e.response?.data.data.error);
			}
			}
		}

		useEffect(() => {
			queryString.push('limit=5');
			queryString.push(`offset=${offset}`);
			queryString.push('sort=desc');
			if (q) {
				queryString.push(`q=${q}`);
			}
			if (mostLiked) {
				queryString.push(`cat=mostLiked`);
			}

			if (mostViewed) {
				queryString.push(`cat=mostViewed`);
			}

			navigate(`/blog?${queryString.join('&')}`);
			getAllPosts();
		}, [q, currentPage, mostLiked, mostViewed]);

	useEffect(() => {
		document.title = 'Tech Blog | Blog';
	}, []);

	useEffect(()=>{
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
					<SearchInput setQ={setQ} setMostLiked={setMostLiked} 
						setMostViewed={setMostViewed} />
					{newsList &&
						newsList.length === 0 &&
						<div className="no-post">Nenhum post disponível</div>
					}

					{newsList &&
						newsList.length > 0 &&
						newsList.map((i: any, k)=>(
								<NewsItem key={k} item={i} link={`/blog/${i._id}`} />
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