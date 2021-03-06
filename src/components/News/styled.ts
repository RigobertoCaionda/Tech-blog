import styled from 'styled-components';

export const Container = styled.a`
	display: block;
	margin-bottom: 25px;
	box-shadow: 0px 1px 3px hsl(0deg 0% 7% / 12%);
	padding: 25px;
	text-decoration: none;
	border-radius: 3px;
	transition: box-shadow 0.3s linear;

	&: hover {
		box-shadow: 0px 1px 3px #187888;
	}

	.views-and-likes {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 10px;

		small {
			color: #757575;
		}
	}

	.subject {
		color: #1b1b1b;
		font-weight: 300;
	}
	.desc {
		margin-bottom: 20px;
		p {
			color: #757575;
		}
	}
	.title {
		margin-bottom: 20px;
		h1 {
			font-weight: 400;
			color: #1b1b1b;
		}
	}
	.date-created {
		margin-bottom: 20px;
		small {
			color: #757575;
		}
	}

	@media (max-width: 600px) {
		& {
			padding: 10px;
			width: 90%;
			margin: 0 auto 25px auto;
			
			.date-created {
				margin-bottom: 10px;
			}

			.desc {
				margin-bottom: 10px;
			}

			.title {
				margin-bottom: 10px;

				h1 {
					font-size: 1.1rem;
				}
			}
		}
	}
`;