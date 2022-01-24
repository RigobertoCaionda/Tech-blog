import { FormEvent, useState } from 'react';
import { PageContainer, PageTitle, ErrorMessage } from '../../app.styled';
import { Container } from './styled';
import { doLogin } from '../../helpers/AuthHandler';
import api from '../../api';
import axios from 'axios';

const Page: React.FC = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [remmemberPassword, setRemmemberPassword] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError('');
		setDisabled(true);

		try {
			let body = { email, password };
			let { data: json } = await api.post('/user/signin', body);

			if (json.token) {
				doLogin(json.token, remmemberPassword);
				window.location.href = '/';
			} else {
				setError(json.data.error);
			}

		} catch(e) {
			if (axios.isAxiosError(e)) {
				setError(e.response?.data.data.error);
			}
		}
		setDisabled(false);
	}

	return (
			<PageContainer>
				<Container>
					<PageTitle>Fazer Login</PageTitle>
					<form onSubmit={handleSubmit}>
					{error !== '' &&
						<ErrorMessage>{error}</ErrorMessage>
					}
				
						<div className="input-area">
							<label>Email</label>
							<input type="email" placeholder="exemplo@gmail.com" 
								disabled={disabled} value={email} 
									onChange={e => setEmail(e.target.value)} />
						</div>

						<div className="input-area">
							<label>Senha</label>
							<input type="password" placeholder="8 caracteres no mínimo" 
								disabled={disabled} value={password} 
									onChange={e => setPassword(e.target.value)} />
						</div>

						<div className="keep-logged">
							<label>Lembrar de mim</label>
							<input type="checkbox" disabled={disabled} checked={remmemberPassword}
							onChange={e => setRemmemberPassword(!remmemberPassword)}/>
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