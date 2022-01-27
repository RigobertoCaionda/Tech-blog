import { useLocation } from 'react-router-dom';
const Page: React.FC = () => {

	const useQueryString = () => {
		 return new URLSearchParams(useLocation().search);
	}

	const query = useQueryString();
	console.log(query.get('subject'));
	return (
			<div>Ola</div>
		);
}
export default Page;