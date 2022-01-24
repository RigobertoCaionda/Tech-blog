import styled from 'styled-components';

export const Container = styled.div`
	padding-top: 40px;

	.no-post {
		text-align: center;
		font-size: 1.4rem;
	}

	.pagination {
		display: flex;
		justify-content: space-between;

		.current {
			color: #757575;
			font-size: 0.9rem;
		}
		.prev, .next {
				color: #187888;
				text-decoration: none;
				font-size: 0.9rem;

				&: hover {
					border-bottom: 2px solid #187888;
			}
		}
	}
`;