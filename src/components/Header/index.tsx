import * as C from './styled';
import { Link } from 'react-router-dom';
import MenuItem from '../MenuItem';
const Page = () => {
	let logged = false;
	return (
			<C.Container>
				<div className="logo-area"><Link to="">Tech Blog</Link></div>

				<C.MenuArea>
					<MenuItem link="/about" text="quem somos" />
					<MenuItem link="/blog" text="blog" />
					{!logged &&
						<MenuItem link="/signin" text="entrar" />
					}
					{!logged &&
						<MenuItem link="/signup" text="cadastrar" />
					}
					{logged &&
						<MenuItem link="/add" text="adicionar" />
					}
					{logged &&
						<MenuItem link="/my-account" text="minha conta" />
					}
				</C.MenuArea>	
			</C.Container>
		);
}
export default Page;