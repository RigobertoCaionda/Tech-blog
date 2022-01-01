import styled from 'styled-components';

export const Container = styled.div`
	padding-top: 40px;

	.activate-account {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 20px;
		a {
			text-decoration: none;
			font-style: italic;
			font-weight: bold;
			&: hover {
				text-decoration: underline;
			}
		}
	}

	.user-options {
		margin-top: 70px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		a {
			text-decoration: none;
			padding: 7px 30px;
			border: 1px solid #1b1b1b;
			background-color: #1b1b1b;
			color: #f1f1f1;
			font-size: 1rem;
			border-radius: 5px;
			&: hover {
				background-color: transparent;
				color: #1b1b1b;
			}
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