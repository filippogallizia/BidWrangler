import React from 'react';
import {
	StyledListItemPageContainer,
	StyledListItemButton
} from './ListItemPageStyles';

import InputLabel from '../../components/inputLabel/InputLable';

const ListItemPage = () => {
	return (
		<StyledListItemPageContainer>
			<InputLabel label="name" />

			<InputLabel label="Ask price" />

			<StyledListItemButton>List Item</StyledListItemButton>
		</StyledListItemPageContainer>
	);
};

export default ListItemPage;
