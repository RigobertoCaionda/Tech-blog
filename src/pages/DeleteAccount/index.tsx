import { PageContainer, PageTitle } from '../../app.styled';
import { Container, Card } from './styled';

const Page: React.FC = () => {

	const handleClick = (response: string) => {
		switch(response) {
			case 'yes':
				alert('Aceitou apagar');
			break;

			case 'no':
				alert('Nao aceitou apagar');
			break;

			case 'cancel':
				alert('Cancelou');
			break;
		}
	}

	return (
			<PageContainer>
				<Container>
					<PageTitle>Eliminação da conta</PageTitle>

					<Card>

						<div className="paragraphs">
							<p>Você realmente deseja eliminar esta conta?</p>
							<p>Se clicar em sim, a sua conta será eliminada para sempre depois de 2
							 horas, se quiser reverter esta ação vá ao teu perfil e clique em reverter.</p>
						</div>

						<div className="button-groups">

							<div className="wrapper">
								<button onClick={(e) => handleClick('yes')}>Sim</button>
								<button onClick={(e) => handleClick('no')}>Não</button>
							</div>

							<div className="cancel-button">
								<button onClick={(e) => handleClick('cancel')}>Cancelar</button>
							</div>
						</div>
					</Card>
				</Container>
			</PageContainer>
		);
}
export default Page;