import styled from 'styled-components';

export const Container = styled.header`
	position: sticky;
	top: 0;
	background-color: #1b1b1b;
	min-height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 50px;
	.logo-area {
		a {
			font-size: 1.5rem;
			text-decoration: none;
		}
	}
`;
export const MenuArea = styled.nav`
	button {
		color: #e8e8e8;
		background-color: transparent;
		border: none;
		font-size: 1rem;
		cursor: pointer;
		font-weight: 400;
		padding: 0 5px 10px 5px;
		&: hover {
			color: #a1ecf7;
		}
	}
`;