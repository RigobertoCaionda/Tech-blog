import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 30px;
`;
export const InputArea = styled.input`
	padding: 15px;
	font-size: 1.1rem;
	width: 100%;
	border-radius: 3px;
	border: 1px solid #f1f1f1;
	::placeholder, ::-webkit-input-placeholder {
		color: #757575;
	}
	:-ms-input-placeholder {
		color: #757575;
	}
`;