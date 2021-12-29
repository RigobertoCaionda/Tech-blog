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
	.social-media {
		width: 40px;
		height: 40px;
		margin-right: 25px;

		&: last-child {
			margin-right: 0;
		}

		&: hover {
			svg.MuiSvgIcon-root {
				fill: #187888;
			}
		}

	}
`;