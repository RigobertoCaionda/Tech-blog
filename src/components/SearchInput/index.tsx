import { useState } from 'react';
import * as C from './styled';
import SearchIcon from '@material-ui/icons/Search';

const Page = () => {
	const [cb1, setCb1] = useState(false);
	const [cb2, setCb2] = useState(false);
	const [search, setSearch] = useState('');

	const handleInputChange1 = () => {
		if (cb1 === false) {
			setCb2(false);
			setCb1(true);
		} else {
			setCb1(false);
		}
	}

	const handleInputChange2 = () => {
		if (cb2 === false) {
			setCb1(false);
			setCb2(true);
		} else {
			setCb2(false);
		}
	}

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
						<input type="checkbox" onChange={handleInputChange1} checked={cb1} />
					</label>

					<label>
						mais curtidas
						<input type="checkbox" onChange={handleInputChange2} checked={cb2} />
					</label>
				</div>

			</C.Container>
		);
}
export default Page;