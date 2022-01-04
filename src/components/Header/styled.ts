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
			display: block;
		}
	}

	@media (max-width: 600px) {
		& {
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			padding: 15px;
			.logo-area {
				a {
					font-size: 1.2rem;
				}
			}
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
		padding: 0 5px 10px 0;
		&: hover {
			color: #a1ecf7;
		}
	}

	@media (max-width: 600px) {
		& {
			display: flex;
			align-items: center;
		}
	}
`;