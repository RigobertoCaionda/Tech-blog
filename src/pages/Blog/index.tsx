import { PageContainer } from '../../app.styled';
import * as C from './styled';
import SearchInput from '../../components/SearchInput';
import NewsItem from '../../components/News';
const Page = () => {
	return (
			<PageContainer>
				<C.Container>
					<SearchInput />
					<NewsItem />
					<NewsItem />
					<NewsItem />
					<NewsItem />
					<NewsItem />
					<NewsItem />
					<NewsItem />
					<NewsItem />
					<NewsItem />
					<NewsItem />
					<div className="pagination">
						<div>Anterior</div>
						<div>1 de 6</div>
						<div>Proxima</div>
					</div>
				</C.Container>
			</PageContainer>
		);
}
export default Page;