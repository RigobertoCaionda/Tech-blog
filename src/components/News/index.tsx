import * as C from './styled';
const Page = () => {
	return (
		<C.Container href="/blabla">
			<div className="date-created">
				<small>28 mai, 2021. Leitura de 7 min</small>
			</div>

			<div className="title">
				<h1>React, Angular ou Vue - Qual Framework JavaScript escolheria hoje? 🤔</h1>
			</div>

			<div className="desc">
				<p>Os Frameworks JavaScript mais relevantes do mercado já tem alguns anos de vida e hoje
				 podemos dizer que todos eles são muito bons e passaram com tranquilidade no filtro do 
				 tempo.</p>
			</div>
			<div className="subject">stack, framework, JavaScript</div>
		</C.Container>
		);
}
export default Page;