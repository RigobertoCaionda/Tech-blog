import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styled';
import { PageContainer, PageTitle } from '../../app.styled';
import NewsItem  from '../../components/News';
import { NewListItem } from '../../types/NewListItem';

const Page: React.FC = () => {
	const [postList, setPostList] = useState<NewListItem[]>([
			{
				id: 9,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk'
			},
			{
				id: 10,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk'
			},
			{
				id: 7,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk'
			},
			{
				id: 6,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk'
			}
		]);
	return (
			<PageContainer>
				<C.Container>
					<PageTitle>Minhas postagens</PageTitle>
					{postList.length > 0 &&
						postList.map((item, key) => (
								<NewsItem key={key} item={item} />/*O link deve ja sair pronto daqui e a depender do link ele vai para o BlogItemPage ou na pagina de edicao do user*/
							))
					}

					<div className="user-options">
						<Link to="/edit-profile">Editar Perfil</Link>
						<button>sair da conta</button>
					</div>
				</C.Container>
			</PageContainer>
		);
}
export default Page;