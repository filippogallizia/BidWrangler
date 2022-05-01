import React, { useEffect, useState } from 'react';
import {
	StyledListItemPageContainer,
	StyledListItemButton
} from './ListItemPageStyles';

import ListItemPageApi from './ListItemPageApi';

import InputLabel from '../../components/inputLabel/InputLable';

const ListItemPage = () => {
	const [itemInfo, setItemInfo] = useState({ name: '', ask_price: 0 });
	const buttonIsDisabled = !itemInfo.name || !itemInfo.ask_price;

	const handleOnChangeName = (e) => {
		setItemInfo((prev) => ({
			name: e.target.value,
			ask_price: prev.ask_price
		}));
	};

	const handleOnChangeAskPrice = (e) => {
		setItemInfo((prev) => ({
			name: prev.name,
			ask_price: e.target.value
		}));
	};

	const handleSubmit = async () => {
		try {
			const response = await ListItemPageApi.createItem(
				itemInfo.name,
				Number(itemInfo.ask_price)
			);
			console.log(response, 'res');
		} catch (error) {
			console.log(error, 'rrooorr');
		}
	};

	console.log(itemInfo, 'itemfino');

	return (
		<StyledListItemPageContainer>
			<InputLabel
				label="name"
				value={itemInfo.name}
				onChange={handleOnChangeName}
			/>

			<InputLabel
				label="Ask price"
				value={itemInfo.ask_price}
				onChange={handleOnChangeAskPrice}
			/>

			<StyledListItemButton onClick={handleSubmit} disabled={buttonIsDisabled}>
				List Item
			</StyledListItemButton>
		</StyledListItemPageContainer>
	);
};

export default ListItemPage;
