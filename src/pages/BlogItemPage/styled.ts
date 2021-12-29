import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 80px;

	.prev-and-next {
		margin-bottom: 30px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 15px;

		.prev, .next {
			color: #757575;
			font-size: 1.3rem;
		}

		a {
			box-shadow: 0px 1px 3px hsl(0deg 0% 7% / 12%);
			padding: 30px;
			text-decoration: none;
			border-radius: 3px;
			transition: box-shadow 0.3s linear;

			small {
				color: #757575;
			}

			h3 {
				font-weight: 400;
				margin-top: 15px;
				color: #1b1b1b;
			}
		}

		a: hover {
		box-shadow: 0px 1px 3px #187888;
	}
	}

	.dateCreated {
		margin-bottom: 30px;
		small {
			color: #757575;
		}
	}

	.people-comments {

		h2 {
			margin-bottom: 20px;
			font-weight: 400;
			color: #757575;
		}

		.wrapper {
			margin-bottom: 30px;
			border-bottom: 1px solid #f1f1f1;
			padding-bottom: 5px;
		}
		.links {
			a {
				margin-right: 10px;
				text-decoration: none;
				color: #757575;
			}
			a: hover {
				color: #0000ee;
			}
		}

		.comment {
			color: #757575;
			max-width: 500px;
			margin-bottom: 15px;
		}

		.person-info {
			display: flex;
			align-items: center;
			margin-bottom: 10px;

			.photo {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				background-color: #1b1b1b;
				margin-right: 10px;
			}

			span {
				font-size: 1.3rem;
			}
		}
	}

	.comments-area {
		display: flex;
		align-items: flex-end;
		margin-bottom: 40px;
		textarea {
			flex: 1;
			margin-right: 20px;
			border-radius: 5px;
			height: 50px;
			padding: 5px;
			font-size: 1rem;
		}
		button {
			padding: 8px;
			cursor: pointer;
			border: 0;
			background-color: #1b1b1b;
			color: #fff;
			font-size: 1rem;
			border-radius: 5px;
		}
		button: hover {
			opacity: 0.9;
		}
	}

	.text {
		margin-bottom: 40px;
		p {
			margin-bottom: 30px;
			line-height: 30px;
			text-align: justify;
			font-size: 1.20rem;
			color: #1b1b1b;
		}
	}

	.subject {
		margin-bottom: 30px;
		a {
			color: #1b1b1b;
			text-decoration: none;
			font-size: 0.9rem;
		}
		a: hover {
			color: #187888;
		}
	}

	.desc {
		margin-bottom: 30px;
		p {
			line-height: 30px;
			color: #757575;
			font-weight: 400;
			font-size: 1.3rem;
			text-align: justify;
		}
	}

	.title {
		margin-bottom: 20px;
		h1 {
			color: #1b1b1b;
			font-size: 2.5rem;
			font-weight: 400;
		}
	}

	.goBack {
		margin-bottom: 30px;
		a {
			text-decoration: none;
			color: #187888;
		}
		a: hover {
			border-bottom: 2px solid #187888;
		}
	}
`;