import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styled';
import { PageContainer, PageTitle } from '../../app.styled';
import NewsItem  from '../../components/News';
import { NewListItem } from '../../types/NewListItem';
import { doLogout } from '../../helpers/AuthHandler';

const Page: React.FC = () => {
	const [postList, setPostList] = useState<NewListItem[]>([
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
				userData: {},
				prevNextArray: []
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
				userData: {},
				prevNextArray: []
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
				userData: {},
				prevNextArray: []
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
				userData: {},
				prevNextArray: []
			}
		]);

	const handleLogout = () => {
		doLogout();
		window.location.href = '/';
	}

	return (
			<PageContainer>
				<C.Container>
					<PageTitle>Minhas postagens</PageTitle>

					{true &&
						<div className="activate-account">
							<Link to="/activate-account/12">ativar conta</Link>
						</div>
					}

					{postList.length > 0 &&
						postList.map((item, key) => (
								<NewsItem key={key} item={item} link={`/blog/${item.id}/user/${item.id}`} />
							))
					}

					<div className="user-options">
						<Link to="/edit-profile/12">Editar Perfil</Link>
						<Link to="/delete-account/12">Eliminar conta</Link>
						<button onClick={handleLogout}>sair da conta</button>
					</div>
				</C.Container>
			</PageContainer>
		);
}
export default Page; // era userId