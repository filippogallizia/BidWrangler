import React from 'react';
import {
	StyledCurrentItemContainer,
	StyledItemName,
	StyledInfoAndLabel,
	StyledInfosContainer
} from './CurrentItem.styles';

const CurrentItem = ({ item }) => {
	const itemName = item.name;

	return (
		<StyledCurrentItemContainer>
			<StyledItemName>{itemName.toUpperCase()}</StyledItemName>

			<StyledInfosContainer>
				<StyledInfoAndLabel>
					Current Price: {item.current_price}$
				</StyledInfoAndLabel>

				<StyledInfoAndLabel>Ask Price: {item.ask_price}$</StyledInfoAndLabel>
			</StyledInfosContainer>
		</StyledCurrentItemContainer>
	);
};

export default CurrentItem;
