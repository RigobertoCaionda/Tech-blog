import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 30px;

	.search-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 50px; 
		margin-left: -50px;
		border-left: 1px solid #f1f1f1;
		cursor: pointer;
		&: hover {
			svg.MuiSvgIcon-root {
				fill: #187888;
			}
		}
	}
`;
export const InputArea = styled.input`
	padding: 0 15px;
	font-size: 1.1rem;
	width: 100%;
	height: 50px;
	border-radius: 3px;
	border: 1px solid #f1f1f1;
	::placeholder, ::-webkit-input-placeholder {
		color: #757575;
	}
	:-ms-input-placeholder {
		color: #757575;
	}
`;