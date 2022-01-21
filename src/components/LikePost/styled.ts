import styled from 'styled-components';

export const LikePost = styled.i<{color: string}>`
	margin-left: 10px;
	cursor: pointer;
	font-size: 2rem;
	color: ${props => props.color};
`;