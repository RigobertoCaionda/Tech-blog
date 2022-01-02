import * as C from './styled';
import MenuItem from '../MenuItem';
const Page = () => {
	let logged = true;

	const handleDarkLightMode = () => {
		alert('escuro - claro');
	}

	return (
			<C.Container>
				<div className="logo-area"><MenuItem link="/" text="Tech Blog" /></div>

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
					<button onClick={handleDarkLightMode}>dark / light</button>
				</C.MenuArea>	
			</C.Container>
		);
}
export default Page;