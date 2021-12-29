import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../../app.styled';
import * as C from './styled';
import SearchInput from '../../components/SearchInput';
import NewsItem from '../../components/News';
import { NewListItem } from '../../types/NewListItem';
const Page = () => {
	const [newsList, setNewsList] = useState<NewListItem[]>([
			{
				id: 1,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk'
			},
			{
				id: 2,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk'
			},
			{
				id: 3,
				title: 'React.js, Angular ou Vue.js e porque um desses e melhor que o outro?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk'
			},
			{
				id: 4,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk'
			},
			{
				id: 5,
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
				id: 8,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk'
			},
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
		]);
	return (
			<PageContainer>
				<C.Container>
					<SearchInput />
					{newsList.length > 0 &&
						newsList.map((i,k)=>(
								<NewsItem key={k} item={i} />
							))
					}

					<div className="pagination">
						<div className="prev"><Link to="/prev">Anterior</Link></div>
						<div className="current">1 de 6</div>
						<div className="next"><Link to="/next">Proxima</Link></div>
					</div>
				</C.Container>
			</PageContainer>
		);
}
export default Page;