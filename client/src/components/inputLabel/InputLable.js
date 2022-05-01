import React from 'react';
import styled from 'styled-components';

export const StyledLabelInputContainer = styled.div`
	display: flex;
	gap: 0.5rem;
`;
export const StyledInputItemName = styled.input``;

export const StyledLabel = styled.label``;

const InputLabel = ({ label, value, onChange }) => {
	return (
		<StyledLabelInputContainer>
			<StyledInputItemName value={value} onChange={onChange} type="text" />
			<StyledLabel>{label}</StyledLabel>
		</StyledLabelInputContainer>
	);
};

export default InputLabel;
