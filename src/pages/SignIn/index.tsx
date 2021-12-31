import { FormEvent, useState } from 'react';
import { PageContainer, PageTitle } from '../../app.styled';
import { Container } from './styled';

const Page: React.FC = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [disabled, setDisabled] = useState(false);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setDisabled(true);
	}

	return (
			<PageContainer>
				<Container>
					<PageTitle>Fazer Login</PageTitle>
					<form onSubmit={handleSubmit}>
				
						<div className="input-area">
							<label>Email</label>
							<input type="email" placeholder="exemplo: rigobertocaionda98@gmail.com" 
								disabled={disabled} value={email} 
									onChange={e => setEmail(e.target.value)} />
						</div>

						<div className="input-area">
							<label>Senha</label>
							<input type="password" placeholder="8 caracteres no mínimo" 
								disabled={disabled} value={password} 
									onChange={e => setPassword(e.target.value)} />
						</div>

						<div className="input-area button">
							<button disabled={disabled}>Entrar</button>
						</div>
					</form>
				</Container>
			</PageContainer>
		);
}
export default Page;