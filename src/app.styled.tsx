import styled from 'styled-components';

export const PageContainer = styled.div`
	width: 720px;
	margin: auto;

	@media (min-width: 768px) and (max-width: 1023px) {
		width: 640px;
	}

	@media (max-width: 600px) {
		& {
			width: 95%;
		}
	}
`;

export const PageTitle = styled.h1`
	text-align: center;
	color: #1b1b1b;
	padding-bottom: 30px; 

	@media (max-width: 600px) {
		font-size: 1.5rem;
	}
`;