import * as C from './styled';
import MenuItem from '../MenuItem';
import { isLogged } from '../../helpers/AuthHandler';
const Page = () => {
	let logged: boolean = isLogged();

	const handleDarkLightMode = () => {
		alert('escuro - claro');
	}

	return (
			<C.Container>
				<div className="logo-area"><MenuItem link="/" text="Tech Blog" /></div>

				<C.MenuArea>
					<MenuItem link="/about" text="sobre" />
					<MenuItem link="/blog" text="blog" />
					{!logged &&
						<MenuItem link="/signin" text="entrar" />
					}
					{!logged &&
						<MenuItem link="/signup" text="cadastrar" />
					}
					{logged &&
						<MenuItem link="/add" text="novo" />
					}
					{logged &&
						<MenuItem link="/my-account" text="minha conta" />
					}
				</C.MenuArea>	
			</C.Container>
		);
}
export default Page;