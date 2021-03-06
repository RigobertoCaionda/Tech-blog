import styled from 'styled-components';

export const Container = styled.div`
	padding: 50px 0;

	.delete-post {
		display: flex;
		justify-content: flex-end;
		a {
			padding: 5px 10px;
			border: 1px solid #1b1b1b;
			background-color: #1b1b1b;
			text-decoration: none;
			color: #f1f1f1;
			border-radius: 5px;
			cursor: pointer;
			&: hover {
				background-color: transparent;
				color: #1b1b1b;
			}
		}
	}

	form {

		.input-area.button {
			display: flex;
			align-items: center;
			button {
				padding: 7px 60px;
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
			margin-bottom: 25px;

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

				textarea {
					height: 200px;
					width: 100%;
					padding: 10px;
					border-radius: 5px;
					border: 1px solid #1b1b1b;
					font-size: 1rem;
					resize: none;
				}

			.wrapper.first-wrapper {
				width: 745px;
			}

			.wrapper {
				display: flex;
				align-items: center;
				margin-bottom: 15px;

				textarea {
					height: 200px;
					resize: none;
				}

				input, textarea {
					width: 100%;
					padding: 10px;
					border-radius: 5px;
					border: 1px solid #1b1b1b;
					font-size: 1rem;
				}
			}
		}
	}

	@media (min-width: 768px) and (max-width: 1023px) {
		& {
			.input-area {
				.wrapper.first-wrapper {
					width: 667px !important;
				}
			}
		}
	}

	@media (max-width: 600px) {
		& {
			padding: 20px 0;

			.input-area {
				margin-bottom: 10px !important;

				textarea {
					width: 93% !important;
					height: 100px !important;
				}

				input {
					width: 93% !important;
				}
				.wrapper.first-wrapper {
					width: 100% !important;
				}
			}
		}
	}
`;