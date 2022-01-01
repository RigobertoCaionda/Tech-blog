import styled from 'styled-components';

export const Container = styled.div`
	padding-top: 40px;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-shadow: 0 0 9px #1b1b1b;
	border-radius: 10px;
	height: 200px;
	padding: 20px;

	.button-groups {
		display: flex;
		justify-content: space-between;
		button {
			margin-right: 10px;
			padding: 7px 30px;
			border: 1px solid #1b1b1b;
			background-color: #1b1b1b;
			color: #f1f1f1;
			font-size: 1rem;
			border-radius: 5px;
			cursor: pointer;
			&: hover {
				background-color: transparent;
				color: #1b1b1b;
			}
		}

		button: last-child {
			margin-right: 0;
		}
	}

	.paragraphs {
			p {
			margin-bottom: 20px;
			font-size: 1.1rem;
		}
	}
`;