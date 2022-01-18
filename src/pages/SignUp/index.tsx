import { FormEvent, useState, useRef, ChangeEvent } from 'react';
import { PageContainer, PageTitle, ErrorMessage } from '../../app.styled';
import { Container } from './styled';
import { doLogin } from '../../helpers/AuthHandler';
import api from '../../api';
import axios from 'axios';

const Page: React.FC = () => {

	const imageRef = useRef<HTMLImageElement>(null);
	const fileRef = useRef<HTMLInputElement>(null);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [disabled, setDisabled] = useState(false);
	const [error, setError] = useState('');
	const [gender, setGender] = useState('');
	const [file, setFile] = useState<File>();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError('');
		setDisabled(true);

		if (password !== confirmPassword) {
			setError('As duas senhas devem ser iguais!');
			setDisabled(false);
			return;
		}

		let errors: string[] = [];
		if (!name.trim()) errors.push('Digite um nome');
		if (!email.trim()) errors.push('Digite um email');
		if (!gender.trim()) errors.push('Digite um género');
		if (!password.trim()) errors.push('Digite uma senha');
		if (!confirmPassword.trim()) errors.push('Confirme sua senha');

		if (errors.length === 0) {
			const fData = new FormData();
			fData.append('name', name);
			fData.append('email', email);
			fData.append('gender', gender);
			fData.append('password', password);
			fData.append('confirmPassword', confirmPassword);
			fData.append('img', file ? file : '');

		try {
			let {data: json} = await api.post('/user/signup', fData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			});

			if (json.token) {
				doLogin(json.token);
				window.location.href = '/';
			} else {
				setError(json.data.error);
			}
		} catch(e) {
			if (axios.isAxiosError(e)) {
				setError(e.response?.data.data.error);
			}
		}
		} else {
			setError(errors.join("\n"));
		}
		setDisabled(false);
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;//Nao coloca aqui files[0], simplesmente verifica se files existe
		if (imageRef.current && files) {
			imageRef.current.src = URL.createObjectURL(files[0]);
			setFile(files[0]);
		}
	}

	const handleClick = () => {
		fileRef.current?.click();//Essa interrogacao e para fazer com que nao de o erro de object is possibly null
	}

	return (
			<PageContainer>
				<Container>
					<PageTitle>Cadastrar usuário</PageTitle>

					<form onSubmit={handleSubmit}>

						<div className="input-area profile-pic">
							<label>Foto de perfil</label>
							<input type="file" disabled={disabled} 
							onChange={(e) => handleChange(e)} ref={fileRef} accept="image/*" />
							<img src="/assets/default.jpg" ref={imageRef} alt="Profile Pic" 
								onClick={handleClick} title="clique para trocar a foto de perfil" />
						</div>

						{error !== '' &&
							<ErrorMessage>{error}</ErrorMessage>
						}
						
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
							<label>Sexo</label>
							<select onChange={e=>setGender(e.target.value)} disabled={disabled} >
								<option></option>
								<option>Masculino</option>
								<option>Feminino</option>
							</select>
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

						<div className="input-area button">
							<button disabled={disabled}>Cadastrar</button>
						</div>
					</form>
				</Container>
			</PageContainer>
		);
}
export default Page;