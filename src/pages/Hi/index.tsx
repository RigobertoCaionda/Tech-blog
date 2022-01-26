import { useEffect } from 'react';
import { PageContainer } from '../../app.styled';
import * as C from './styled';
import ME_INFO from '../../components/Me.Info';
const Page = () => {

	useEffect(() => {
		document.title = 'Tech Blog | Sobre';
	}, []);

	return (
			<PageContainer>
				<C.Container>
					<ME_INFO data={{title: 'Olá', paragraphs: ['Sou Desenvolvedor Full stack, com bacharelato concluído em engenharia informática. Sou uma pessoa completamente apaixonada por tecnologia, principalmente pela área de programação de software.', 
					'Sou uma pessoa super curiosa e estou sempre disposto a aprender coisas novas.']}} />
					<p className="text second">Criei este blog a fim de compartilhar tutoriais e novidades 
					sobre tecnologias, se você tem alguma dica ou alguma coisa para ensinar sobre
					tecnologias, se cadastre e adicione o seu conteúdo!</p>
				</C.Container>
			</PageContainer>
		);
}
export default Page;