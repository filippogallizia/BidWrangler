import styled from 'styled-components';

import Button from '../Button';

import { BtnSecondaryProps } from './BtnSecondary.js';

export const BtnSecondaryStyled = styled(Button)`
color: ${(props) =>
	props.theme.default.colors.brandColors.secondary.secondary02};
padding: 0.5rem;
border-radius: ${(props) =>
	props.theme.default.global.border.borderRadius.pill};
border: none;
box-shadow: ${({ theme }) =>
	`0 0 0 ${theme.default.global.border.borderWidths.thin} ${theme.default.colors.brandColors.secondaryRgba.secondary02}`};
background-color: inherit;

&:hover {
    background-color: ${({ theme }) =>
			theme.default.colors.brandColors.secondary.secondary03};
    color: ${({ theme }) => theme.default.colors.baseColors.light.darkest};c
}
    
&:focus {
    background-color: ${({ theme }) =>
			theme.default.colors.brandColors.secondary.secondary03};
    box-shadow: ${({ theme }) =>
			`0 0 0 ${theme.default.global.border.borderWidths.thin} ${theme.default.colors.brandColors.primaryRgba.primaryPure}`};
    color: ${({ theme }) => theme.default.colors.baseColors.light.darkest};
}

&:active {
    background-color: ${({ theme }) =>
			theme.default.colors.brandColors.secondary.secondary03};
    box-shadow: ${({ theme }) =>
			`0 0 0 ${theme.default.global.border.borderWidths.hairline} ${theme.default.colors.brandColors.secondaryRgba.secondary01}`};
    color: ${({ theme }) => theme.default.colors.baseColors.light.darkest};
}

&:disabled {
    color: ${({ theme }) => theme.default.colors.baseColors.dark.opaque}; 
    box-shadow: ${({ theme }) =>
			`0 0 0 ${theme.default.global.border.borderWidths.thin} ${theme.default.colors.baseColors.darkRgba.lightest}`};
}
`;
