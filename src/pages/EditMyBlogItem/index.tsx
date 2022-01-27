import { FormEvent, useState, useRef, useEffect } from 'react';
import * as C from './styled';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PageContainer, PageTitle, ErrorMessage } from '../../app.styled';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import RemoveIcon from '@material-ui/icons/RemoveCircleOutline';
import api from '../../api';
import axios from 'axios';

type EditType = {
	title: string;
	desc: string;
	subject: string[];
	text: string[];
};
const Page = () => {

	const navigate = useNavigate();
	const { id } = useParams();
	const [subjectList, setSubjectList] = useState<string[]>([]);
	const [texts, setTexts] = useState<string[]>([]);
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const inputValuesS = useRef<string[]>([]);
	const inputValuesP = useRef<string[]>([]);
	const [disabled, setDisabled] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		document.title = 'Tech Blog | Minha Conta | Editar post';

		const getPostInfo = async () => {
		try {
				let {data: json} = await api.get(`/blog/${id}`);
				setTitle(json.data.title);
				setDesc(json.data.desc);
			}
			catch (e) {		 
				if (axios.isAxiosError(e)) {
				console.log(e.response?.data.data.error);
			}
			}
		}
		getPostInfo();
	}, []);

	const handleClick = () => {
		setSubjectList(state => [...state, '']);
		//setSubjectList([...subjectList, '']);alternativa ao codigo acima
		inputValuesS.current.push('');//So Garante que vai ficar vazia caso ele nao digite nada
	}

	const handleClickP = () => {
		setTexts(state => [...state, '']);
		inputValuesP.current.push('');
	}

	const handleRemoveClickS = () => {
		if (subjectList.length > 0) {
			let newSubjectList = subjectList
			.filter((item, key) => (key + 1) !== subjectList.length ? true : false)
			setSubjectList(newSubjectList);
			inputValuesS.current.pop();
		}
	}

	const handleRemoveClickP = () => {
		if (texts.length > 0) {
			let newTextList = texts
			.filter((item, key) => (key + 1) !== texts.length ? true : false);

			setTexts(newTextList);
			inputValuesP.current.pop();
		}
	}

	const handleButtonClick =  async (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setError('');
		setDisabled(true);
		try {
			let body = {} as EditType;
			if (title && title.trim() !== '') { body.title = title };
			if (desc && desc.trim() !== '') { body.desc = desc };
			if (inputValuesS.current.length > 0) { body.subject = inputValuesS.current };
			if (inputValuesP.current.length > 0) { body.text = inputValuesP.current };
			
			let {data: json} = await api.put(`/blog/${id}`, body);
			if (json.data.status) {
				return navigate(`/my-account?limit=4&offset=0&sort=desc`);
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
				<C.Container>
					<PageTitle>Editar conteúdo</PageTitle>
						<div className="delete-post">
							<Link to={`/delete-post/${id}`}>apagar post</Link>
						</div>
					{error !== '' &&
							<ErrorMessage>{error}</ErrorMessage>
						}
					<form method="POST">
						<div className="input-area">
							<label>Título</label>
							<input type="text" placeholder="Adicione o titulo..." value={title}
							onChange={e => setTitle(e.target.value)} disabled={disabled}/>
						</div>

						<div className="input-area">
							<label>Assuntos</label>
							<div className="wrapper first-wrapper">
								<input type="text" placeholder="ex: react.js." 
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
								<textarea placeholder="Clique no + para adicionar um parágrafo" 
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
										}} disabled={disabled} >
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