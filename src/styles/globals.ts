import { createGlobalStyle } from 'styled-components';
import { Colors } from '../theme';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}
	html, body, #root {
		min-height: 100%;
        div[role=navigation] {
          position: fixed !important;
        }
	}

	body {
		-webkit-font-smoothing: antialiased !important;
	}

	body, input, button {
		font: 14px Roboto, sans-serif;
	}
`;