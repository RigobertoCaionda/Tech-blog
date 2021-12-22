import styled from 'styled-components';

export const Container = styled.div`
	padding: 40px 0 0 0;
	.last-updates {
		.all-posts {
			display: flex;
			align-items: center;
			justify-content: center;
			a {
				padding: 7px 15px;
				text-decoration: none;
				color: #187888;
				border-radius: 20px;
				border: 1px solid #187888;
			}
			a: hover {
				background-color: #187888;
				color: #fff;
			}
		}
		h3 {
			color: #757575;
			font-weight: 300;
		}
		.last-updates-area {
			margin-top: 20px;
		}
	}
	.en {
		a {
			text-decoration: none;
			color: #187888;
		}
		a: hover {
			border-bottom: 2px solid #187888;
		}
	}
	.info {
			padding: 40px 0;
		h1 {
			color: #1b1b1b;
			font-weight: 400;
		}
	}
	.text p {
		margin: 30px 0;
		line-height: 30px;
		color: #1b1b1b;
		font-weight: 400;
		font-size: 1.1rem;
		text-align: justify;
	}
`;