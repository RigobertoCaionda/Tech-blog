import { useState } from 'react';
import * as C from '../../app.styled';
import * as D from './styled';
import { Link } from 'react-router-dom';
import NewsItem from '../../components/News';
import ME_INFO from '../../components/Me.Info';
import { NewListItem } from '../../types/NewListItem';

const Page = () => {
	// eslint-disable-next-line
	const [lastNews, setLastNews] = useState<NewListItem[]>([
			{
				id: 9,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk',
				views: 230,
				likes: 110,
				userId: 10
			},
			{
				id: 10,
				title: 'React.js, Angular ou Vue.js?',
				dateCreated: new Date(),
				subject: ['desenvolvimento', 'junior', 'programacao', 'marketing'],
				text: ['eu amo ddfddsdssddsds', 'dsdsfdsffdssfsdxddd', 'fsdsgrfddfdsfdf', 'sfsdffddsffds'],
				desc: 'gghhgjhkjk',
				views: 221,
				likes: 221,
				userId: 14
			}
		]);
	return (
			<C.PageContainer>
				<D.Container>
					<div className="en"><Link to="/">Ver em Português</Link></div>
					<ME_INFO data={{title: 'Hello', paragraphs: ["I'm a Full stack developer, i have a bachelor's degree in computer science. I am a person completely in love with technology, mainly by the area of software programming.", 
					'I am a super curious person and i am always ready to learn new things.']}} />
					<div className="last-updates">
						<h3>Últimas do blog</h3>
						<div className="last-updates-area">
							{lastNews.length > 0 &&
								lastNews.map((i,k)=>(
										<NewsItem key={k} item={i} link={`/blog/${i.id}`} />
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