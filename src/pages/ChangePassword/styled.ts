import styled from 'styled-components';

export const Container = styled.div`
	padding-top: 40px;

	form {

		.input-area.change-password {
			a {
				text-decoration: none;
				color: #757575;
				&: hover {
					color: blue;
				}
			}
		}

		.input-area.button {
			align-items: flex-end;

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

		.input-area {
			display: flex;
			flex-direction: column;
			margin-bottom: 10px;

			label {
				margin-bottom: 5px;
				color: #757575;
			}

			input {
				width: 100%;
				padding: 10px;
				border-radius: 5px;
				border: 1px solid #1b1b1b;
				font-size: 1rem;
			}

		}
	}

	@media (max-width: 600px) {
		& {
			padding-top: 20px;
			width: 90%;
			margin: auto;
		}
	}
`;