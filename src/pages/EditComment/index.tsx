import { FormEvent, useState } from 'react';
import { PageContainer, PageTitle } from '../../app.styled';
import { Container } from './styled';

const Page: React.FC = () => {

	const [textEdited, setTextEdited] = useState('');
	const [disabled, setDisabled] = useState(false);

	const handleButtonClick = (e: FormEvent<HTMLElement>) => {
		e.preventDefault();
		setDisabled(true);
	}

	return (
		<PageContainer>
			<Container>
				<PageTitle>Editar Comentário</PageTitle>
				<div className="textarea">
					<textarea value={textEdited} onChange={e => setTextEdited(e.target.value)} 
						disabled={disabled}></textarea>
					<button onClick={handleButtonClick} disabled={disabled}>Atualizar</button>
				</div>
			</Container>
		</PageContainer>
		);
}
export default Page;