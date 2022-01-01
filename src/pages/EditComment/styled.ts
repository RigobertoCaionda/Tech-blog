import styled from 'styled-components';

export const Container = styled.div`
	padding-top: 40px;
	.textarea {

		textarea {
			width: 100%;
			resize: none;
			border-radius: 5px;
			padding: 10px;
			font-size: 1rem;
			height: 150px;
		}

		button {
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
	}
`;