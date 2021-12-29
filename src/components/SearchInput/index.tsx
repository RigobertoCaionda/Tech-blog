import * as C from './styled';
import SearchIcon from '@material-ui/icons/Search';
const Page = () => {
	return (
			<C.Container>
				<C.InputArea type="text" placeholder="Pesquisar..." />
				<div className="search-icon">
					<SearchIcon style={ { color: '#757575', fontSize: '1.7rem' } } />
				</div>
			</C.Container>
		);
}
export default Page;