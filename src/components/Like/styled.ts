import styled from 'styled-components';

export const Like = styled.button<{color: string}>`
	background-color: transparent;
	border: 0;
	color: ${props => props.color};
	margin-right: 10px;
	font-size: 1rem;
	cursor: pointer;
`;