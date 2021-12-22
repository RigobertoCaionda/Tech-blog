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
							<p>Meu nome é Rigoberto Caionda. Sou Desenvolvedor Full stack. 
							Sou apaixonado por projetos open source, 
							acredito que a disseminação de conhecimento e boas idéias inspira e melhora 
							o mundo.</p>
							<p>Atualmente estou trabalhando como Tech Lead na Juntos Somos Mais. 
							Sou criador da organização Front-end BR no Github. 
							Também sou um dos fundadores do Meetup CSS e ajudei a organizar 
							a Conferência CSS Brasil 2015.</p>
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