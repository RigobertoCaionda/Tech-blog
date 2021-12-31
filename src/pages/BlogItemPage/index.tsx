import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as C from './styled';
import { PageContainer } from '../../app.styled';
import { NewListItem } from '../../types/NewListItem';
import { dateFormatter } from '../../helpers/dateHelpers';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LinkIcon from '@material-ui/icons/Link';

const Page = () => {
	const [blogItem, setBlogItem] = useState<NewListItem>({
				id: 10,
				title: 'Meu primeiro site feito em 2007',
				dateCreated: new Date(),
				subject: ['carreira', 'misc', 'programacao'],
				text: ['Depois de um tempo trabalhando com tecnologia a gente começa a perceber que o código escrito hoje eventualmente vai acabar sendo o código legado de amanhã, mesmo que tenham sido escritos seguindo os melhores padrões e abordagens sempre vão ter coisas que podem ser melhoradas.', 'Isso porque além da velocidade que as coisas mudam e novidades aparecem, a tendência é que a gente também fique cada vez melhor dia após dia fazendo com que projetos criados no passado muitas vezes pareçam muito piores do que na verdade eram.', 'Fora isso ainda tem outro fator que muitas vezes não levamos em consideração ao avaliar um código ou um projeto mais antigo:', 'Mas eu lembrava que tinha ido além, peguei umas noites e tentei fazer um projeto que pudesse servir como portfólio depois, então foram algumas noites trabalhando nisso com todo suporte do saudoso site do Maujor até que eu tivesse uma versão minimamente apresentável.', 'Então procurei por esse projeto por muito tempo em vão até que esses dias, vasculhando numa caixa de email antiga (que inclusive era a forma que a gente versionava arquivos no passado 😅) acabei encontrando.'],
				desc: 'Sempre tive curiosidade pra ver os primeiros projetos que trabalhei e depois de muito tempo procurando finalmente encontrei o primeiro site experimental que desenvolvi.',
				views: 73,
				likes: 34,
				userId: 12
			});
	let { id } = useParams();
	return (
		<PageContainer>
			<C.Container>
				<div className="goBack">
					<Link to="/blog"><ArrowBackIcon style={{ fontSize: '0.9rem' }} /> Voltar</Link>
				</div>

				<div className="dateCreated">
					<small>{dateFormatter(blogItem.dateCreated)}</small>
					<div className="views-and-likes">
						<small>{blogItem.likes} likes</small>
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
					{blogItem.subject.length > 0 &&
						blogItem.subject.map((item, key) => (
								<Link to={`/query=${item}`} key={key}>
									{key === (blogItem.subject.length - 1) ? `${item} ` : `${item}, `}
								</Link>
							))
					}
				</div>

				<div className="text">
					{blogItem.text.length > 0 &&
						blogItem.text.map((item, key) => (
								<p key={key}>{item}</p>
							))
					}
				</div>

			{/*Isto abaixo sera transformado num componente*/}

				<div className="prev-and-next">
					<div className="prev"><ArrowBackIcon style={{ fontSize: '1.1rem' }} />Anterior</div>
					<div className="next"><ArrowForwardIcon style={{ fontSize: '1.1rem' }} />Próximo</div>
					<Link to="/prev">
						<small>30 de abril de 2021</small>
						<h3>Collapse em 5 minutos sem Javascript</h3>
					</Link>

					<Link to="/next">
						<small>30 de abril de 2021</small>
						<h3>React, Angular ou Vue - Qual Framework Javascript escolheria hoje?</h3>
					</Link>
				</div>
			{/*Isto abaixo sera transformado num componente*/}

				<div className="comments-area">
					<textarea placeholder="Comente este poste"></textarea>
					<button>comentar</button>
				</div>

				<div className="people-comments">
					<h2>Comentários</h2>

					<div className="wrapper">
						<div className="person-info">
							<div className="photo"></div> <span>Rigoberto Caionda</span>
						</div>

						<div className="comment">
								Eu gosto muito desse assunto Eu gosto muito desse assunto Eu gosto muito desse assunto Eu gosto muito desse assunto!
						</div>

						<div className="links">
							<span>20 </span>
							<Link to="/like">Like</Link>
							<Link to="/edit-comment">Editar</Link>
							<Link to="/delete-comment">Eliminar</Link>
							<small>há 5 minutos</small>
						</div>
					</div>
					{/*O segundo wrapper representa o segundo comentario*/}
					<div className="wrapper">
						<div className="person-info">
							<div className="photo"></div> <span>Cristiano Ronaldo</span>
						</div>

						<div className="comment">
							Show de bola editor.
						</div>

						<div className="links">
							<span>50 </span>
							<Link to="/like">Like</Link>
							<Link to="/edit-comment">Editar</Link>
							<Link to="/delete-comment">Eliminar</Link>
							<small>há 14 horas</small>
						</div>
					</div>
				{/*Termino do segundo comentario*/}

			{/*Inicio do terceiro comentario*/}
				<div className="wrapper">
						<div className="person-info">
							<div className="photo"></div> <span>Lionel Messi</span>
						</div>

						<div className="comment">
							Simplesmente o melhor programador de Angola e um dos melhores do mundo no seu nivel.
						</div>

						<div className="links">
							<span>700 </span>
							<Link to="/like">Like</Link>
							<Link to="/edit-comment">Editar</Link>
							<Link to="/delete-comment">Eliminar</Link>
							<small>ontem às 18:25</small>
						</div>
					</div>
			{/*termino do terceiro comentario*/}

				</div>


			</C.Container>
		</PageContainer>
		);
}
export default Page;