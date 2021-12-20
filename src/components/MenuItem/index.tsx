import * as C from './styled';
import { MouseEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
type Props = {
	link: string,
	text: string
}

const Page = ({link, text}: Props) => {
	const navigate = useNavigate();
	const location = useLocation();
	let isActive = location.pathname === link;

	const handleLinkClick = (e: MouseEvent) => {//Dentro do mouseEvent tem o click tmbm
		e.preventDefault();
		navigate(link);
	}
	return (
			<C.LinkArea href={link} onClick={handleLinkClick} active={isActive}>{text}</C.LinkArea>
		);
}
export default Page;