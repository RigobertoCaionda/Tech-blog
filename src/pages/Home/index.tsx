import * as C from '../../app.styled';
import * as D from './styled';
import { Link } from 'react-router-dom';
import NewsItem from '../../components/News';

const Page = () => {
	return (
			<C.PageContainer>
				<D.Container>
					<div className="en"><Link to="/english">View in English</Link></div>
					<div className="info">
						<h1>Olá!</h1>
						<div className="text">
							<p>Sou Desenvolvedor Full stack, com bacharelato concluído em
							engenharia informática. 
							Sou uma pessoa completamente apaixonada por tecnologia, 
							principalmente pela área de programação de software. 
							</p>
							<p>Sou uma pessoa super curiosa e estou sempre disposto a aprender 
							coisas novas.</p>
						</div>
					</div>
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