import { FormEvent, useState } from 'react';
import { PageContainer, PageTitle } from '../../app.styled';
import { Container } from './styled';

const Page: React.FC = () => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [disabled, setDisabled] = useState(false);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setDisabled(true);
	}

	return (
			<PageContainer>
				<Container>
					<PageTitle>Cadastrar usuário</PageTitle>
					<form onSubmit={handleSubmit}>
						<div className="input-area">
							<label>Nome Completo</label>
							<input type="text" placeholder="exemplo: rigoberto caionda" 
								disabled={disabled} value={name} 
									onChange={e => setName(e.target.value)} />
						</div>

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

						<div className="input-area">
							<label>Confirmar Senha</label>
							<input type="password" placeholder="Repita a senha" disabled={disabled} 
							value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
						</div>

						<div className="input-area">
							<label>Foto de perfil</label>
							<input type="file" disabled={disabled} />
						</div>

						<div className="input-area button">
							<button disabled={disabled}>Cadastrar</button>
						</div>
					</form>
				</Container>
			</PageContainer>
		);
}
export default Page;