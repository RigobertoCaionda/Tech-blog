import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as C from './styled';
import { PageContainer } from '../../app.styled';
import { NewListItem } from '../../types/NewListItem';
import { dateFormatter } from '../../helpers/dateHelpers';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LinkIcon from '@material-ui/icons/Link';
import api from '../../api';
import axios from 'axios';

const Page = () => {
	const [blogItem, setBlogItem] = useState<NewListItem>({} as NewListItem);
	let { id } = useParams();

	useEffect(() => {
		const getPostInfo = async () => {
		try {
				let {data: json} = await api.get(`/blog/${id}`);
				setBlogItem(json.data);
			}
			catch (e) {		 
				if (axios.isAxiosError(e)) {
				console.log(e.response?.data.data.error);
			}
			}
		}
		getPostInfo();
	}, []);

	return (
		<PageContainer>
			<C.Container>
				<div className="goBack">
					<Link to="/blog"><ArrowBackIcon style={{ fontSize: '0.9rem' }} /> Voltar</Link>
				</div>

				<div className="dateCreated">
					{blogItem.dateCreated &&
						<small>{dateFormatter(blogItem.dateCreated)} às 19:05</small>
					}
					<div className="views-and-likes">
						<small>{blogItem.likes} curtidas</small>
						<small>{blogItem.views} visualizações</small>
					</div>
				</div>

				<div className="title">
					<h1>{blogItem.title}</h1>
				</div>

				<div className="desc">
					<p>{blogItem.desc}</p>
				</div>

				<div className="subject">
					<LinkIcon style={{ fontSize: '1rem' }}/>  
					{blogItem.subject &&
						blogItem.subject.map((item, key) => (
								<Link to={`/query=${item}`} key={key}>
									{key === (blogItem.subject.length - 1) ? `${item} ` : `${item}, `}
								</Link>
							))
					}
				</div>

				<div className="text">
					{blogItem.text &&
						blogItem.text.map((item, key) => (
								<p key={key}>{item}</p>
							))
					}
				</div>

			{/*Isto abaixo sera transformado num componente*/}

				<div className="prev-and-next">
					<div className="prev"><ArrowBackIcon style={{ fontSize: '1.1rem' }} />Anterior</div>
					<div className="next"><ArrowForwardIcon style={{ fontSize: '1.1rem' }} />Próximo</div>
					<Link to="/blog/10">
						<small>30 de abril de 2021</small>
						<h3>Collapse em 5 minutos sem Javascript</h3>
					</Link>

					<Link to="/blog/11">
						<small>30 de abril de 2021</small>
						<h3>React, Angular ou Vue - Qual Framework Javascript escolheria hoje?</h3>
					</Link>
				</div>
			{/*Isto abaixo sera transformado num componente*/}

				<div className="comments-area">
					<textarea placeholder="Comente este poste"></textarea>
					<button>comentar</button>
					<div className="like-button">
						<i className="fas fa-heart" title="curtir"></i>
					</div>
				</div>

				<div className="people-comments">
					<h2>Comentários</h2>

					{blogItem.commentsList &&
						blogItem.commentsList.map((item: any, key) => (
						<div className="wrapper">
						<div className="person-info">
							<div className="photo"></div> <span>{item.name}</span>
						</div>

						<div className="comment">{item.commentText}</div>

						<div className="links">
							<span>{item.likes} </span>
							<button title="Clique para gostar"><i className="fas fa-heart"></i></button>
							<Link to="/edit-comment/12">editar</Link>
							<Link to="/delete-comment/12">eliminar</Link>
							<small>{item.dateCreated}</small>
						</div>
					</div>
							))
					}

				</div>


			</C.Container>
		</PageContainer>
		);
}
export default Page;