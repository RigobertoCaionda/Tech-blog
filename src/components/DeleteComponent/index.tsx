import { PageContainer, PageTitle } from '../../app.styled';
import { Container, Card } from './styled';

type Props = {
	data: {
		key: string,
		title: string,
		paragraphs: string[]
	}
}

const Page: React.FC<Props> = ({ data }) => {

	const handleClick = (response: 'yes' | 'no' | 'cancel') => {
		switch(response) {
			case 'yes':
				switch(data.key) {
					case 'delete-account':
						alert('quer apagar a conta');
					break;

					case 'activate-account':
						alert('quer ativar a conta');
					break;

					case 'delete-comment':
						alert('quer apagar comentario');
					break;
				}
			break;

			case 'no':
				switch(data.key) {
					case 'delete-account':
						alert('nao quer apagar a conta');
					break;

					case 'activate-account':
						alert('nao quer ativar a conta');
					break;

					case 'delete-comment':
						alert('nao quer apagar comentario');
					break;
				}
			break;

			case 'cancel':
				switch(data.key) {
					case 'delete-account':
						alert('cancelou na eliminacao da conta');
					break;

					case 'activate-account':
						alert('cancelou na ativacao da conta');
					break;

					case 'delete-comment':
						alert('cancelou na eliminacao de comentario');
					break;
				}
			break;
		}
	}

	return (
			<PageContainer>
				<Container>
					<PageTitle>{data.title}</PageTitle>

					<Card>

						<div className="paragraphs">
							{data.paragraphs.length > 0 &&
								data.paragraphs.map((item, key) => (
										<p key={key}>{item}</p>
									))
							}
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