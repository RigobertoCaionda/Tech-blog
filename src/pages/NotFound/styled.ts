import styled from 'styled-components';

export const Container = styled.div`
	padding: 50px 0;
	a {
		color: #e8e8e8;
		text-decoration: none;
		background-color: #1b1b1b;
		display: block;
		width: 150px;
		padding: 10px;
		text-align: center;
		border-radius: 5px;
		margin: auto;
		border: 1px solid #1b1b1b;
		&: hover {
			background-color: transparent;
			color: #1b1b1b;
		}
	}
`;