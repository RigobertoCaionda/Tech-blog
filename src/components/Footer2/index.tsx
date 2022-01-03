import { FooterArea } from './styled';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GithubIcon from '@material-ui/icons/GitHub';

const Page = () => {

	let text: string = "Conversar com Rigoberto Caionda"; 

	return (
		<FooterArea>
				<a href="https://linkedin.com" target="_blank"  rel="noreferrer" className="social-media">
					<LinkedInIcon style={{ color: '#1b1b1b', fontSize: '2rem' }}/>
				</a>
				<a href="https://www.facebook.com" target="_blank"  rel="noreferrer" className="social-media">
					<FacebookIcon style={{ color: '#1b1b1b', fontSize: '2rem' }}/>
				</a>
				<a href="https://github.com" target="_blank"  rel="noreferrer" className="social-media">
					<GithubIcon style={{ color: '#1b1b1b', fontSize: '2rem' }}/>
				</a>
				<a href={`https://api.whatsapp.com/send?phone=+244945041707&text=${text}`} 
					target="_blank"  rel="noreferrer" 
					className="social-media">
					<WhatsAppIcon style={{ color: '#1b1b1b', fontSize: '2rem' }}/>
				</a>
		</FooterArea>
		);
}
export default Page;