import { FormEvent, useState, useRef } from 'react';
import * as C from './styled';
import { PageContainer, PageTitle } from '../../app.styled';
import AddIcon from '@material-ui/icons/AddCircleOutline';

const Page = () => {
	const [subjectList, setSubjectList] = useState<string[]>([]);
	const [texts, setTexts] = useState<string[]>([]);
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const inputValuesS = useRef<string[]>([]);
	const inputValuesP = useRef<string[]>([]);
	const [disabled, setDisabled] = useState(false);

	const handleClick = () => {
		setSubjectList(state => [...state, '']);
		//setSubjectList([...subjectList, '']);alternativa ao codigo acima
		inputValuesS.current.push('');//So Garante que vai ficar vazia caso ele nao digite nada
	}

	const handleClickP = () => {
		setTexts(state => [...state, '']);
		inputValuesP.current.push('');
	}

	const handleButtonClick = (e: FormEvent<HTMLButtonElement>) => {//HTMLButtonElement pq e onClick no botao e nao onSubmit
		e.preventDefault();
		setDisabled(true);
		let data = {
			title,
			subjects: inputValuesS.current,
			texts: inputValuesP.current,
			desc
		}

		console.log(data);
	}
	
	return (
			<PageContainer>
				<C.Container>
					<PageTitle>Editar conteúdo</PageTitle>
					<form method="POST">
						<div className="input-area">
							<label>Título</label>
							<input type="text" placeholder="Adicione o titulo..." value={title}
							onChange={e => setTitle(e.target.value)} disabled={disabled}/>
						</div>

						<div className="input-area">
							<label>Assuntos</label>
							<div className="wrapper">
								<input type="text" placeholder="ex: desenvolvimento, TI, junior, etc." 
								onChange={e => {
									inputValuesS.current[0] = e.target.value;
								}} disabled={disabled} />
								<AddIcon style={{ color: '#757575', cursor: 'pointer' }} 
									onClick={handleClick} />
							</div>

							{subjectList.length > 0 &&
								subjectList.map((item, key) => (
								<div className="wrapper" key={key}>
									<input type="text" 
										placeholder="ex: desenvolvimento, TI, junior, etc."  
										onChange={e => {
											inputValuesS.current[key+1] = e.target.value;
										}} disabled={disabled} />
								</div>
									))
							}

						</div>

						<div className="input-area">
							<label>Parágrafos</label>
							<div className="wrapper">
								<textarea placeholder="Clique no + para adicionar um parágrafo" 
								onChange={e => {
									inputValuesP.current[0] = e.target.value;
								}} disabled={disabled} ></textarea>
								<AddIcon style={{ color: '#757575', cursor: 'pointer' }} 
									onClick={handleClickP} />
							</div>

							{texts.length > 0 &&
								texts.map((item, key) => (
								<div className="wrapper" key={key}>
									<textarea placeholder="Clique no + para adicionar um parágrafo"  
										onChange={e => {
											inputValuesP.current[key+1] = e.target.value;
										}} disabled={disabled} >
									</textarea>
								</div>
									))
							}

						</div>

						<div className="input-area">
							<label>Descrição</label>
							<textarea placeholder="Adicione uma descrição..." value={desc} 
							onChange={e => setDesc(e.target.value)} disabled={disabled} ></textarea>
						</div>

						<div className="input-area button">
							<button onClick={handleButtonClick} disabled={disabled}>Enviar</button>
						</div>

					</form>
				</C.Container>
			</PageContainer>
		);
}
export default Page;