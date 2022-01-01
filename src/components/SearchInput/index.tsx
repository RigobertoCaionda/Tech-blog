import { useState } from 'react';
import * as C from './styled';
import SearchIcon from '@material-ui/icons/Search';

const Page = () => {
	const [search, setSearch] = useState('');
	return (
			<C.Container>
				<div className="wrapper">
					<C.InputArea type="text" placeholder="Pesquisar..." value={search} 
					onChange={e => setSearch(e.target.value)} />
					<div className="search-icon">
						<SearchIcon style={ { color: '#757575', fontSize: '1.7rem' } } />
					</div>
				</div>

				<div className="search-options">
					<label>
						mais visualizadas
						<input type="checkbox" />
					</label>

					<label>
						mais curtidas
						<input type="checkbox" />
					</label>
				</div>

			</C.Container>
		);
}
export default Page;