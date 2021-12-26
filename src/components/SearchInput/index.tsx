import * as C from './styled';

const Page = () => {
	return (
			<C.Container>
				<C.InputArea type="text" placeholder="Pesquisar..." />
				<div style={{width: '30px', height: '30px', backgroundColor: '#000', marginLeft: -40}}>OI</div>
			</C.Container>
		);
}
export default Page;