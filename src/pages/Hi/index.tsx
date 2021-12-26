import { PageContainer } from '../../app.styled';
import * as C from './styled';
import ME_INFO from '../../components/Me.Info';
const Page = () => {
	return (
			<PageContainer>
				<C.Container>
					<ME_INFO />
					<p className="text">Criei este blog a fim de compartilhar tutoriais e novidades 
					sobre tecnologias, se você tem alguma dica ou alguma coisa para ensinar sobre
					tecnologias, se cadastre e adicione o seu conteúdo!</p>
				</C.Container>
			</PageContainer>
		);
}
export default Page;