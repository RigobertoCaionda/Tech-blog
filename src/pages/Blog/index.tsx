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
				id: 1,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk',
				views: 250,
				likes: 110,
				userId: 1
			},
			{
				id: 2,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk',
				views: 450,
				likes: 100,
				userId: 2
			},
			{
				id: 3,
				title: 'React.js, Angular ou Vue.js e porque um desses e melhor que o outro?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk',
				views: 0,
				likes: 0,
				userId: 3
			},
			{
				id: 4,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk',
				views: 30,
				likes: 20,
				userId: 4
			},
			{
				id: 5,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk',
				views: 250,
				likes: 110,
				userId: 5
			},
			{
				id: 6,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk',
				views: 50,
				likes: 10,
				userId: 6
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
				userId: 7
			},
			{
				id: 8,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk',
				views: 42,
				likes: 11,
				userId: 8
			},
			{
				id: 9,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk',
				views: 250,
				likes: 110,
				userId: 9
			},
			{
				id: 10,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk',
				views: 250,
				likes: 110,
				userId: 10
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