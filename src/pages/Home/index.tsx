import * as C from '../../app.styled';
import * as D from './styled';
import { Link } from 'react-router-dom';
import NewsItem from '../../components/News';
import ME_INFO from '../../components/Me.Info';

const Page = () => {
	return (
			<C.PageContainer>
				<D.Container>
					<div className="en"><Link to="/english">View in English</Link></div>
					<ME_INFO />
					<div className="last-updates">
						<h3>Últimas do blog</h3>
						<div className="last-updates-area">
							<NewsItem />
							<NewsItem />
						</div>
						<div className="all-posts"><Link to="/blog">ver todos os posts</Link></div>
					</div>
				</D.Container>
			</C.PageContainer>
		);
}
export default Page;