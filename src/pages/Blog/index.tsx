import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../../app.styled';
import * as C from './styled';
import SearchInput from '../../components/SearchInput';
import NewsItem from '../../components/News';
import { NewListItem } from '../../types/NewListItem';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Page = () => {

	const [newsList, setNewsList] = useState<NewListItem[]>([
			{
				id: 0,
				title: '',
				dateCreated: new Date(),
				subject: [],
				text: [],
				desc: '',
				views: 0,
				likes: 0,
				likedByUsers: [],
				userLiked: false,
				commentsList: [],
				totalComments: 0,
				userData: {}
			},
			{
				id: 0,
				title: '',
				dateCreated: new Date(),
				subject: [],
				text: [],
				desc: '',
				views: 0,
				likes: 0,
				likedByUsers: [],
				userLiked: false,
				commentsList: [],
				totalComments: 0,
				userData: {}
			},
			{
				id: 0,
				title: '',
				dateCreated: new Date(),
				subject: [],
				text: [],
				desc: '',
				views: 0,
				likes: 0,
				likedByUsers: [],
				userLiked: false,
				commentsList: [],
				totalComments: 0,
				userData: {}
			},
			{
				id: 0,
				title: '',
				dateCreated: new Date(),
				subject: [],
				text: [],
				desc: '',
				views: 0,
				likes: 0,
				likedByUsers: [],
				userLiked: false,
				commentsList: [],
				totalComments: 0,
				userData: {}
			},
			{
				id: 0,
				title: '',
				dateCreated: new Date(),
				subject: [],
				text: [],
				desc: '',
				views: 0,
				likes: 0,
				likedByUsers: [],
				userLiked: false,
				commentsList: [],
				totalComments: 0,
				userData: {}
			},
			{
				id: 0,
				title: '',
				dateCreated: new Date(),
				subject: [],
				text: [],
				desc: '',
				views: 0,
				likes: 0,
				likedByUsers: [],
				userLiked: false,
				commentsList: [],
				totalComments: 0,
				userData: {}
			},
			{
				id: 0,
				title: '',
				dateCreated: new Date(),
				subject: [],
				text: [],
				desc: '',
				views: 0,
				likes: 0,
				likedByUsers: [],
				userLiked: false,
				commentsList: [],
				totalComments: 0,
				userData: {}
			},
			{
				id: 0,
				title: '',
				dateCreated: new Date(),
				subject: [],
				text: [],
				desc: '',
				views: 0,
				likes: 0,
				likedByUsers: [],
				userLiked: false,
				commentsList: [],
				totalComments: 0,
				userData: {}
			},
			{
				id: 0,
				title: '',
				dateCreated: new Date(),
				subject: [],
				text: [],
				desc: '',
				views: 0,
				likes: 0,
				likedByUsers: [],
				userLiked: false,
				commentsList: [],
				totalComments: 0,
				userData: {}
			},
			{
				id: 0,
				title: '',
				dateCreated: new Date(),
				subject: [],
				text: [],
				desc: '',
				views: 0,
				likes: 0,
				likedByUsers: [],
				userLiked: false,
				commentsList: [],
				totalComments: 0,
				userData: {}
			}
		]);
	return (
			<PageContainer>
				<C.Container>
					<SearchInput />
					{newsList.length > 0 &&
						newsList.map((i,k)=>(
								<NewsItem key={k} item={i} link={`/blog/${i.id}`} />
							))
					}

					<div className="pagination">
						<div className="prev">
							<Link to="/prev">
								<ArrowBackIcon style={{ fontSize: '0.8rem' }} />Anterior
							</Link>
						</div>

						<div className="current">1 de 6</div>

						<div className="next">
							<Link to="/next">
								<ArrowForwardIcon style={{ fontSize: '0.8rem' }} />Próxima
							</Link>
						</div>
					</div>
				</C.Container>
			</PageContainer>
		);
}
export default Page;