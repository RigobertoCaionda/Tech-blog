import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styled';
import { PageContainer, PageTitle } from '../../app.styled';
import NewsItem  from '../../components/News';
import { NewListItem } from '../../types/NewListItem';
import { doLogout } from '../../helpers/AuthHandler';

const Page: React.FC = () => {
	// eslint-disable-next-line
	const [postList, setPostList] = useState<NewListItem[]>([
			{
				id: 9,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk',
				views: 500,
				likes: 40,
				userId: 12
			},
			{
				id: 10,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk',
				views: 1203,
				likes: 100,
				userId: 11
			},
			{
				id: 7,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk',
				views: 250,
				likes: 110,
				userId: 10
			},
			{
				id: 6,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk',
				views: 870,
				likes: 21,
				userId: 9
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
								<NewsItem key={key} item={item} link={`/blog/${item.id}/user/${item.userId}`} />
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
export default Page;