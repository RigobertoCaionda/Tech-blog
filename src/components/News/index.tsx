import * as C from './styled';
import { NewListItem } from '../../types/NewListItem';
import { dateFormatter } from '../../helpers/dateHelpers';
type Props = {
	item: NewListItem
	link: string
}

const Page = ({ item, link }: Props) => {
	
	return (
		<C.Container href={link}>
			<div className="date-created">
				<small>{dateFormatter(item.dateCreated)}</small>
			</div>

			<div className="title">
				<h1>{item.title}</h1>
			</div>

			<div className="desc">
				<p>{item.desc}</p>
			</div>
			<div className="subject">{item.subject.join(', ')}</div>

			<div className="views-and-likes">
				<small>{item.likes} likes</small>
				<small>{item.views} visualizações</small>
			</div>
		</C.Container>
		);
}
export default Page;