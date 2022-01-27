import styled from 'styled-components';

export const Container = styled.div`
	padding-top: 40px;

	.userData {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 10px;

		span {
			font-size: 1.5rem;
			margin-bottom: 5px;
		}

		img {
			width: 200px;
			height: 200px;
			border-radius: 50%;
		}
	}

	.pagination {
		display: flex;
		justify-content: space-between;

		.current {
			color: #757575;
			font-size: 0.9rem;
		}

		.prev, .next {
				color: #187888;
				text-decoration: none;
				font-size: 0.9rem;

				&: hover {
					border-bottom: 2px solid #187888;
			}
		}
	}

	.no-post-available {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 230px;
		font-size: 1.4rem;
		text-align: center;
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

	@media (max-width: 600px) {
		& {
			padding-top: 15px;

			.user-options {
				margin-top: 25px;

				a {
					padding: 5px;
					font-size: 0.9rem;

				}

				button {
					padding: 5px;
					font-size: 0.9rem;
				}
			}
		}
	}
`;