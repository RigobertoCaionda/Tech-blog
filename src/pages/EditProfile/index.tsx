import { FormEvent, useState, ChangeEvent, useRef, useEffect } from 'react';
import { PageContainer, PageTitle, ErrorMessage, SuccessMessage } from '../../app.styled';
import { Container } from './styled';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../api';
import axios from 'axios';

const Page: React.FC = () => {

	const navigate = useNavigate();
	const imageRef = useRef<HTMLImageElement>(null);
	const fileRef = useRef<HTMLInputElement>(null);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [emailCheck, setEmailCheck] = useState('');
	const [gender, setGender] = useState('');
	const [password, setPassword] = useState('');
	const [disabled, setDisabled] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [file, setFile] = useState<File>();

	useEffect(() => {
		document.title = 'Tech Blog | Minha Conta | Editar usuário';

		const getUserInfo = async () => {
		try {
				let { 
					data: { data } 
				} = await api.get(`/user/me`);
				setName(data.name);
				setEmail(data.email);
				setEmailCheck(data.email);
				setGender(data.gender);
				if (imageRef.current) {
					imageRef.current.src = `http://localhost:3001/file/${data.image}`;
				}
			}
			catch (e) {		 
				if (axios.isAxiosError(e)) {
				let axiosError = e.response?.data.data.error;
				switch(axiosError) {
					case 'token é necessário':
					case 'this token is not valid':
					case 'Esse usuário não existe':
						navigate('/signin');
						break;
					default:
					console.log(axiosError);
				}
			}
			}
		}
		getUserInfo();
	}, []);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError('');
		setSuccess('');
		setDisabled(true);

		let errors: string[] = [];
		if (!name.trim()) errors.push('Digite um nome');
		if (!email.trim()) errors.push('Digite um email');
		if (!gender.trim()) errors.push('Digite um género');
		if (errors.length === 0) {
			const fData = new FormData();
			email === emailCheck ? fData.append('email', '') : fData.append('email', email); 
			fData.append('name', name);
			fData.append('gender', gender);
			fData.append('knownPassWord', password);
			fData.append('img', file ? file : '');

			try {
			
			let {
				data: { 
					data: { status } 
				}
			} = await api.post('/user/editProfile', fData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			});
			if (status) {
				setSuccess('Atualização feita com sucesso');
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
					<PageTitle>Editar usuário</PageTitle>
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

						{success !== '' &&
							<SuccessMessage>{success}</SuccessMessage>
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

						{email !== '' && email !== emailCheck &&
							<div className="input-area">
								<label>Senha</label>
								<input type="password" placeholder="Digite sua senha" 
									disabled={disabled} value={password} 
										onChange={e => setPassword(e.target.value)} />
							</div>
						}

						<div className="input-area">
							<label>Sexo</label>
							<select onChange={e=> setGender(e.target.value)} value={gender}>
								<option></option>
								<option>Masculino</option>
								<option>Feminino</option>
							</select>
						</div>

						<div className="input-area button">
							<button disabled={disabled}>Atualizar</button>
						</div>

						<div className="input-area change-password">
							<Link to="/change-password">trocar senha</Link>
						</div>
					</form>
				</Container>
			</PageContainer>
		);
}
export default Page;