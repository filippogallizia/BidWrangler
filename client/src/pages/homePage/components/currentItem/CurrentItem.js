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
			<StyledItemName>{itemName && itemName.toUpperCase()}</StyledItemName>

			<StyledInfosContainer>
				{item.bider_name && (
					<StyledInfoAndLabel>
						Bidder: {item.bider_name.toUpperCase()}
					</StyledInfoAndLabel>
				)}

				<StyledInfoAndLabel>
					Current Price: {item.current_price} $
				</StyledInfoAndLabel>

				<StyledInfoAndLabel>Ask Price: {item.ask_price} $</StyledInfoAndLabel>
			</StyledInfosContainer>
		</StyledCurrentItemContainer>
	);
};

export default CurrentItem;
