import React from 'react';
import styled from 'styled-components';

export const StyledLabelInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
`;

export const StyledLabel = styled.label``;
export const StyledInputItemName = styled.input`
	width: 100%;
	max-width: 11rem;
	padding: 12px 20px;
	border-style: solid;
	border-color: ${(props) =>
		props.theme.default.colors.brandColors.secondary.secondary02};
	margin: 8px 0;
	box-sizing: border-box;
	border-radius: ${(props) => props.theme.default.global.border.borderRadius.m};
`;

const InputLabel = ({ label, value, onChange, inputType }) => {
	return (
		<StyledLabelInputContainer>
			<StyledLabel htmlFor={label}>{label}</StyledLabel>
			<StyledInputItemName
				id={label}
				value={value}
				onChange={onChange}
				type={inputType ?? 'text'}
			/>
		</StyledLabelInputContainer>
	);
};

export default InputLabel;
