import { Link } from 'react-router-dom';
import { PageContainer, PageTitle } from '../../app.styled';
import { Container } from './styled';

const Page = () => {
	return (
		<PageContainer>
			<Container>
				<PageTitle>Oh, página não encontrada!</PageTitle>
				<Link to="/blog">Ver blog</Link>
			</Container>
		</PageContainer>
		);
}
export default Page;