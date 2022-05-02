import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { colors } from './colors';
import { global } from './global';

import { device } from './device';

const GlobalStylesComponent = createGlobalStyle`
html {
	@media ${device.phone} { 
		font-size: 12px;
	}

	@media ${device.laptop} { 
		font-size: 16px;
	}

}
body {
	margin: 0;
	padding: 0;
	font-family: ${(props) => props.theme.default.global.fonts.fontsFamily.base};
	font-size: ${(props) => props.theme.default.global.fonts.fontSize.md};
	font-weight: ${(props) => props.theme.default.global.fonts.fontsWeight.regular};
	line-height: ${(props) => props.theme.default.global.lineHeight.default};
	color: ${(props) => props.theme.default.colors.baseColors.dark.default};
	text-align: left;
	background-color: ${(props) =>
		props.theme.default.colors.backgroundColors.default};
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
`;

const GlobalStyles = ({ children }) => {
	const themes = {
		default: {
			global,
			colors
		}
	};

	return (
		<ThemeProvider theme={themes}>
			<GlobalStylesComponent />
			{children}
		</ThemeProvider>
	);
};

export default GlobalStyles;
