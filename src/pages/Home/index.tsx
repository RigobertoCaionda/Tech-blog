import { useState } from 'react';
import * as C from '../../app.styled';
import * as D from './styled';
import { Link } from 'react-router-dom';
import NewsItem from '../../components/News';
import ME_INFO from '../../components/Me.Info';
import { NewListItem } from '../../types/NewListItem';

const Page = () => {
	const [lastNews, setLastNews] = useState<NewListItem[]>([
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
			}
		]);
	return (
			<C.PageContainer>
				<D.Container>
					<div className="en"><Link to="/english">View in English</Link></div>
					<ME_INFO />
					<div className="last-updates">
						<h3>Últimas do blog</h3>
						<div className="last-updates-area">
							{lastNews.length > 0 &&
								lastNews.map((i,k)=>(
										<NewsItem key={k} item={i} />
									))
							}
						</div>
						<div className="all-posts"><Link to="/blog">ver todos os posts</Link></div>
					</div>
				</D.Container>
			</C.PageContainer>
		);
}
export default Page;