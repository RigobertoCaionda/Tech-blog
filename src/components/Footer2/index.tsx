import { FooterArea } from './styled';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';

const Page = () => {
	return (
		<FooterArea>
				<a href="https://linkedin.com" className="social-media">
					<LinkedInIcon style={{ color: '#1b1b1b', fontSize: '2rem' }}/>
				</a>
				<a href="https://www.facebook.com" className="social-media">
					<FacebookIcon style={{ color: '#1b1b1b', fontSize: '2rem' }}/>
				</a>
				<a href="https://github.com" className="social-media">
					<GithubIcon style={{ color: '#1b1b1b', fontSize: '2rem' }}/>
				</a>
				<a href="https://instagram.com" className="social-media">
					<InstagramIcon style={{ color: '#1b1b1b', fontSize: '2rem' }}/>
				</a>
		</FooterArea>
		);
}
export default Page;