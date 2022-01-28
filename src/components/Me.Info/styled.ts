import styled from 'styled-components';

export const Container = styled.div`
	padding: 40px 0;

	h1 {
		color: #1b1b1b;
		font-weight: 400;
		text-align: center;
	}

	.text p {
		margin: 30px 0;
		line-height: 30px;
		color: #1b1b1b;
		font-weight: 400;
		font-size: 1.1rem;
		text-align: center;
	}

	@media (max-width: 600px) {
		& {
			width: 90%;
			margin: auto;
			padding: 10px 0;

			.text p {
				margin: 12px 0;
			}
		}
	}
`;