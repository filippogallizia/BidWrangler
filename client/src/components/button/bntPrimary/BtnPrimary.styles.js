import styled from 'styled-components';

import Button from '../Button';

export const BtnPrimaryStyled = styled(Button)`
	background-color: ${({ theme }) =>
		theme.default.colors.brandColors.secondary.secondaryPure};
	color: white;
	padding: 1rem;
	border-radius: ${(props) =>
		props.theme.default.global.border.borderRadius.pill};
	border: none;
	box-shadow: ${({ theme }) =>
		`0 0 0 ${theme.default.global.border.borderWidths.thin} rgba(0,0,0, 0)`};

	&:hover {
		background-color: ${({ theme }) =>
			theme.default.colors.brandColors.secondary.secondary03};
	}

	&:focus {
		box-shadow: ${({ theme }) =>
			`0 0 0 ${theme.default.global.border.borderWidths.thin} ${theme.default.colors.brandColors.primaryRgba.primaryPure}`};
	}

	&:active {
		box-shadow: ${({ theme }) =>
			`0 0 0 ${theme.default.global.border.borderWidths.hairline} ${theme.default.colors.brandColors.secondaryRgba.secondary01}`};
	}

	&:disabled {
		background-color: ${({ theme }) =>
			theme.default.colors.baseColors.dark.lightest};
		color: ${({ theme }) => theme.default.colors.baseColors.dark.opaque};
	}
`;
