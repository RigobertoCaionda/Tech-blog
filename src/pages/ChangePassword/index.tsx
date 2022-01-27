import { FormEvent, useState, ChangeEvent, useRef, useEffect } from 'react';
import { PageContainer, PageTitle, ErrorMessage, SuccessMessage } from '../../app.styled';
import { Container } from './styled';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../api';
import axios from 'axios';

const Page: React.FC = () => {

	const navigate = useNavigate();
	const [password, setPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [disabled, setDisabled] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	useEffect(() => {
		document.title = 'Tech Blog | Minha Conta | Editar usuário | Trocar senha';
	}, []);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError('');
		setDisabled(true);
			if (newPassword.length < 8) {
				setDisabled(false);
				return setError('A nova senha precisa ter no mínimo 8 caracteres');
			}
			try {
				const body = {
					knownPassWord: password,
					password: newPassword,
					confirmPassword
				};
			const {
				data: { 
					data: { status } 
				}
			} = await api.post('/user/editProfile', body);
			if (status) {
				setSuccess('Senha alterada com sucesso');
			} 
		} catch(e) {
			if (axios.isAxiosError(e)) {
				let axiosError = e.response?.data.data.error;
				switch(axiosError) {
					case 'token é necessário':
					case 'this token is not valid':
					case 'Esse usuário não existe':
						navigate('/signin');
						break;
					default:
					setError(axiosError);
				}
			}
		} 
		setDisabled(false);
	}

	return (
			<PageContainer>
				<Container>
					<PageTitle>Trocar senha</PageTitle>
					<form onSubmit={handleSubmit}>

						{error !== '' &&
							<ErrorMessage>{error}</ErrorMessage>
						}
						{success !== '' &&
							<SuccessMessage>{success}</SuccessMessage>
						}

						<div className="input-area">
							<label>Senha</label>
							<input type="password" placeholder="Senha atual" 
								disabled={disabled} value={password} 
									onChange={e => setPassword(e.target.value)} />
						</div>

						<div className="input-area">
							<label>Nova Senha</label>
							<input type="password" placeholder="Nova Senha" 
								disabled={disabled} value={newPassword} 
									onChange={e => setNewPassword(e.target.value)} />
						</div>

						<div className="input-area">
							<label>Confirmar Senha</label>
							<input type="password" placeholder="Confirmar Senha" 
								disabled={disabled} value={confirmPassword} 
									onChange={e => setConfirmPassword(e.target.value)} />
						</div>

						<div className="input-area button">
							<button disabled={disabled}>Trocar</button>
						</div>
					</form>
				</Container>
			</PageContainer>
		);
}
export default Page;