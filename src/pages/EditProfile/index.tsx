import { FormEvent, useState, ChangeEvent, useRef } from 'react';
import { PageContainer, PageTitle } from '../../app.styled';
import { Container } from './styled';

const Page: React.FC = () => {

	const imageRef = useRef<HTMLImageElement>(null);
	const fileRef = useRef<HTMLInputElement>(null);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [disabled, setDisabled] = useState(false);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setDisabled(true);
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;//Nao coloca aqui files[0], simplesmente verifica se files existe
		if (imageRef.current && files) {
			imageRef.current.src = URL.createObjectURL(files[0]);
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
							<img src="../logo192.png" ref={imageRef} alt="Profile Pic" 
								onClick={handleClick} title="clique para trocar a foto de perfil" />
						</div>

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
							<select>
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