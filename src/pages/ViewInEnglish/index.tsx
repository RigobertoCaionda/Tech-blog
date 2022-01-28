import { useState, useEffect } from 'react';
import * as C from '../../app.styled';
import * as D from './styled';
import { Link } from 'react-router-dom';
import NewsItem from '../../components/News';
import ME_INFO from '../../components/Me.Info';
import { NewListItem } from '../../types/NewListItem';
import api from '../../api';
import axios from 'axios';

const Page: React.FC = () => {
	const [lastNews, setLastNews] = useState<NewListItem[]>([]);

	useEffect(() => {
		const getLastPosts = async () => {
			try {
				const {
					data: {
						data: { postData }
					}
				} = await api.get(`/blog?limit=2&sort=desc`);
				setLastNews(postData);
			} catch(e) {
				if (axios.isAxiosError(e)) {
					console.log(e.response?.data.data.error);
				}
			}
		}
		getLastPosts();
	}, []);

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
									<NewsItem key={k} item={i} link={`/blog/${(i as any)._id}`} />
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