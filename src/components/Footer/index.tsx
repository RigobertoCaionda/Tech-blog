import { FooterArea } from './styled';

const Page = () => {
	let date: Date = new Date();

	return (
		<FooterArea>
				©{date.getFullYear()} techblog - Todos os direitos reservados
		</FooterArea>
		);
}
export default Page;