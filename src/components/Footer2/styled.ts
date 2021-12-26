import styled from 'styled-components';

export const FooterArea = styled.footer`
	display: flex;
	position: sticky;
	bottom: 0;
	align-items: center;
	justify-content: center;
	padding: 10px 0;
	border-top: 1px solid #f1f1f1;
	z-index: 5;
	background-color: #fff;
	.github {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: #1b1b1b;
		margin-right: 25px;
		&: last-child {
			margin-right: 0;
		}
	}
`;