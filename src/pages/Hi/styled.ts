import styled from 'styled-components';

export const Container = styled.div`
	.text {
		margin: 0 0 -40px 0;
		line-height: 30px;
		color: #1b1b1b;
		font-weight: 400;
		font-size: 1.1rem;
		text-align: justify;
	}

	@media (max-width: 600px) {
		& {
			.text.second {
				width: 90%;
			}

			.text {
				width: 100%;
				margin: 0 auto;
			}
		}
	}
`;