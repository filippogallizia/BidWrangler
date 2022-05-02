import styled from 'styled-components';

export const ButtonStyled = styled.button`
	cursor: pointer;
	font-family: ${({ theme }) => theme.default.global.fonts.fontsFamily.base};
	font-size: ${({ theme }) => theme.default.global.fonts.fontSize.md};
	font-weight: ${({ theme }) =>
		theme.default.global.fonts.fontsWeight.semibold};
	letter-spacing: ${({ theme }) => theme.default.global.letterSpacing.medium};
	line-height: ${({ theme }) => theme.default.global.lineHeight.medium};
	border: none;
`;

const Button = ({ ...props }) => {
	return <ButtonStyled {...props} />;
};

export default Button;
