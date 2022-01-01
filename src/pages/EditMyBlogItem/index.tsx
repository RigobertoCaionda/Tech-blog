import { useParams } from 'react-router-dom';

const Page: React.FC = () => {
	let { id, userId } = useParams();
	return (
		<div>Editar Perfil id do perfil - {id}, id do user: {userId} </div>
		);
}
export default Page;