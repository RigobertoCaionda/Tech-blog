import styled from 'styled-components';

export const LinkArea = styled.a<{active: boolean}>`
	text-decoration: none;
	color: ${props=>props.active ? '#a1ecf7' : '#e8e8e8'};
	font-size: 1rem;
	font-weight: 400;
	margin-right: 20px;
	padding: 0 5px 10px 5px;
	&: last-child {
		margin-right: 0;
	}
	&: hover {
		color: #a1ecf7;
		border-bottom: 2px solid #187888;
	}
	@media (max-width: 600px) {
		& {
			margin-right: 5px;
		}
	}
`;