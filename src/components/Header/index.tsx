import * as C from './styled';
import { Link } from 'react-router-dom';
import MenuItem from '../MenuItem';
const Page = () => {
	return (
			<C.Container>
				<div className="logo-area"><Link to="">Tech Blog</Link></div>

				<C.MenuArea>
					<MenuItem link="/hi" text="hi" />
					<MenuItem link="/blog" text="blog" />
					<MenuItem link="/signin" text="entrar" />
					<MenuItem link="/signup" text="cadastrar" />
				</C.MenuArea>	
			</C.Container>
		);
}
export default Page;