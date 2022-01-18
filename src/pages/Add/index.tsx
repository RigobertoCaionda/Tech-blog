import { FormEvent, useState, useRef } from 'react';
import * as C from './styled';
import { PageContainer, PageTitle, ErrorMessage } from '../../app.styled';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import RemoveIcon from '@material-ui/icons/RemoveCircleOutline';
import api from '../../api';
import axios from 'axios';

const Page = () => {
	const navigate = useNavigate();
	const [subjectList, setSubjectList] = useState<string[]>([]);
	const [texts, setTexts] = useState<string[]>([]);
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const inputValuesS = useRef<string[]>([]);
	const inputValuesP = useRef<string[]>([]);
	const [disabled, setDisabled] = useState(false);
	const [error, setError] = useState('');

	const handleClick = () => {
		setSubjectList(state => [...state, '']);
		//setSubjectList([...subjectList, '']);alternativa ao codigo acima
		inputValuesS.current.push('');//So Garante que vai ficar vazia caso ele nao digite nada
	}

	const handleClickP = () => {
		setTexts(state => [...state, '']);
		inputValuesP.current.push('');
	}

	const handleButtonClick = async (e: FormEvent<HTMLButtonElement>) => {//HTMLButtonElement pq e onClick no botao e nao onSubmit
		e.preventDefault();
		setError('');
		setDisabled(true);

		try {
			let body = { title, desc, subject: inputValuesS.current, text: inputValuesP.current };
			let {data: json} = await api.post('/blog/add', body);
			if (json.id) {
				navigate(`/blog/${json.id}`);
				return;
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

	const handleRemoveClickS = () => {
		if (subjectList.length > 0) {
			let newSubjectList = subjectList.
			filter((item, key) => (key + 1) !== subjectList.length ? true : false);

			setSubjectList(newSubjectList);
			inputValuesS.current.pop();
		}
	}

	const handleRemoveClickP = () => {
		if (texts.length > 0) {
			let newTextList = texts.
			filter((item, key) => (key + 1) !== texts.length ? true : false);

			setTexts(newTextList);
			inputValuesP.current.pop();
		}
	}

	
	return (
			<PageContainer>
				<C.Container>
					<PageTitle>Adicionar conteúdo</PageTitle>
					<form method="POST">
						{error !== '' &&
							<ErrorMessage>{error}</ErrorMessage>
						}

						<div className="input-area">
							<label>Título</label>
							<input type="text" placeholder="Adicione o titulo..." value={title}
							onChange={e => setTitle(e.target.value)} disabled={disabled}/>
						</div>

						<div className="input-area">
							<label>Assuntos</label>
							<div className="wrapper first-wrapper">
								<input type="text" placeholder="clique no + para adicionar um assunto" 
								onChange={e => {
									inputValuesS.current[0] = e.target.value;
								}} disabled={disabled} />
								<AddIcon style={{ color: '#757575', cursor: 'pointer' }} 
									onClick={handleClick} />
								{subjectList.length > 0 &&
									<RemoveIcon style={{ color: '#757575', cursor: 'pointer' }} 
									onClick={handleRemoveClickS} />
								}
							</div>

							{subjectList.length > 0 &&
								subjectList.map((item, key) => (
								<div className="wrapper" key={key}>
									<input type="text" 
										placeholder="ex: typescript."  
										onChange={e => {
											inputValuesS.current[key+1] = e.target.value;
										}} disabled={disabled} />
									<AddIcon style={{ color: '#757575', cursor: 'pointer' }} 
										onClick={handleClick} />
									{subjectList.length > 0 &&
										<RemoveIcon style={{ color: '#757575', cursor: 'pointer' }} 
										onClick={handleRemoveClickS} />
									}
								</div>
									))
							}

						</div>

						<div className="input-area">
							<label>Parágrafos</label>
							<div className="wrapper first-wrapper">
								<textarea placeholder="clique no + para adicionar um parágrafo" 
								onChange={e => {
									inputValuesP.current[0] = e.target.value;
								}} disabled={disabled} ></textarea>
								<AddIcon style={{ color: '#757575', cursor: 'pointer' }} 
									onClick={handleClickP} />
									{texts.length > 0 &&
										<RemoveIcon style={{ color: '#757575', cursor: 'pointer' }} 
										onClick={handleRemoveClickP} />
									}
							</div>

							{texts.length > 0 &&
								texts.map((item, key) => (
								<div className="wrapper" key={key}>
									<textarea placeholder="Clique no + para adicionar um parágrafo"  
										onChange={e => {
											inputValuesP.current[key+1] = e.target.value;
										}} disabled={disabled}>
									</textarea>
									<AddIcon style={{ color: '#757575', cursor: 'pointer' }} 
										onClick={handleClickP} />
									{texts.length > 0 &&
										<RemoveIcon style={{ color: '#757575', cursor: 'pointer' }} 
										onClick={handleRemoveClickP} />
									}
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