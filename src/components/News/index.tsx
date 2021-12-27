import * as C from './styled';
import { NewListItem } from '../../types/NewListItem';
type Props = {
	item: NewListItem
}

const Page = ({item}: Props) => {
	return (
		<C.Container href={`/blog/${item.id}`}>
			<div className="date-created">
				<small>28 mai, 2021. Leitura de 7 min</small>
			</div>

			<div className="title">
				<h1>{item.title}</h1>
			</div>

			<div className="desc">
				<p>{item.desc}</p>
			</div>
			<div className="subject">{item.subject.join(', ')}</div>
		</C.Container>
		);
}
export default Page;