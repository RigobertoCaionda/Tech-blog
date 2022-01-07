import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	  font-family: 'Roboto', sans-serif;
	}

	html {
		height: 100%;
		overflow: hidden;
		position: relative;
	}

	body {
		height: 100%;
		overflow: auto;
		position: relative;
	}
`;