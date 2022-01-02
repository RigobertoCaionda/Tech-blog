import * as C from './styled';

type Props = {
	data: {
		title: string,
		paragraphs: string[]
	}
}

const Page: React.FC<Props> = ({ data }) => {
	return (
		<C.Container>
			<h1>{data.title}!</h1>
		<div className="text">
			{data.paragraphs.length > 0 &&
				data.paragraphs.map((item, key) => (
						<p key={key}>{item}</p>
					))
			}
		</div>
		</C.Container>
		);
}
export default Page;