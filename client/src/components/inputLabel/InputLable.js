import React from 'react';
import styled from 'styled-components';

export const StyledLabelInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
export const StyledInputItemName = styled.input`
	width: 100%;
	padding: 12px 20px;
	border: none;
	border-color: ${({ theme }) =>
		theme.default.colors.brandColors.secondaryRgba.secondary02};
	margin: 8px 0;
	box-sizing: border-box;
	border-radius: ${(props) => props.theme.default.global.border.borderRadius.m};
`;

export const StyledLabel = styled.label``;

const InputLabel = ({ label, value, onChange }) => {
	return (
		<StyledLabelInputContainer>
			<StyledInputItemName
				placeholder={label}
				value={value}
				onChange={onChange}
				type="text"
			/>
		</StyledLabelInputContainer>
	);
};

export default InputLabel;
