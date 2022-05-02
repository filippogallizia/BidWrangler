import styled from 'styled-components';

export const StyledNavBarContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;
export const StyledNavButtonsContainer = styled.div`
	display: flex;
	gap: 3rem;
`;

export const StyledUserName = styled.p`
	font-weight: ${({ theme }) => theme.default.global.fonts.fontsWeight.bold};
`;

//export const StyledNavButton = styled(BtnSecondary)``;
export const StyledNavButton = styled.p`
	border-bottom: ${({ isSelected, theme }) =>
		isSelected &&
		`1px solid ${theme.default.colors.brandColors.secondary.secondaryPure}`};
	cursor: pointer;

	&:hover {
		color: ${({ theme }) =>
			theme.default.colors.brandColors.secondary.secondaryPure};
	}
`;
