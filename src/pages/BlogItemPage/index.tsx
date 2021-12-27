import { useParams } from 'react-router-dom';

const Page = () => {
	let { id } = useParams();
	return (
		<div>Ola Blog item de id {id}</div>
		);
}
export default Page;