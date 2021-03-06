import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 80px;

	.userData {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 20px;
		font-style: italic;

		span {
			margin: 0 5px;
			font-size: 1.3rem;
		}

		img {
			width: 150px;
			height: 150px;
			border-radius: 50%;
		}
	}

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
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 30px;

		small {
			font-size: 1.1rem;
		}

		.views-and-likes {
			small {
				font-size: 1rem;
				margin-right: 50px;
			}
			small: last-child {
				margin-right: 0;
			}
		}

		small {
			color: #757575;
		}
	}

	.people-comments {

		.view-prev {
			color: blue;
			cursor: pointer;
			margin-bottom: 5px;
		}

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
			display: flex;
			align-items: center;
			small {
				color: #757575;
				margin-right: 10px;
				font-size: 0.9rem;
			}
			small: last-child {
				margin-right: 0;
			}
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
				margin-right: 10px;

				img {
					width: 100%;
					border-radius: 50%;
				}
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
			resize: none;
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
		display: flex;
		align-items: center;
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

	@media (max-width: 600px) {
		& {
			margin-top: 35px;

			.goBack {
				margin-bottom: 10px;
			}

			.text {
				margin-bottom: 0;

				p {
					margin: 0 auto 10px auto;
					font-size: 1rem;
					width: 85%;
				}
			}

			.subject {
				width: 85%;
				margin: 0 auto 15px auto;
			}

			.desc {

				margin-bottom: 15px;
				p {
					width: 85%;
					margin: auto;
					font-size: 1rem;
				}
			}

			.comments-area {
				margin-bottom: 20px;
				
				button {
					padding: 5px;
					font-size: 0.9rem;
				}

				textarea {
					margin-right: 10px;
				}

				.like-button {

					i {
						font-size: 1.5rem;
					}
				}	
			}

			.people-comments {

				h2 {
					margin-bottom: 10px;
					font-size: 1.1rem;
				}

				.wrapper {
					margin-bottom: 10px;
					
					.comment {
						font-size: 0.9rem;
					}

					.person-info {
						margin-bottom: 5px;
						span {
							font-size: 1.1rem;
						}
					}
				}
			}

			.prev-and-next {
				width: 90%;
				margin: 0 auto 20px auto; 
				a {
					padding: 10px;

					h3 {
						font-size: 0.9rem;
					}
				}
			}

			.title {
				margin-bottom: 0;

				h1 {
					font-size: 1.2rem;
					font-weight: bold;
					text-align: center;
				}
			}

			.dateCreated {
				margin-bottom: 15px;
				flex-direction: column;
				justify-content: flex-start;

				.views-and-likes {
					margin-top: 5px;
				}
			}
		}
	}
`;