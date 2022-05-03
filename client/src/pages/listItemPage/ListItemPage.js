import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	StyledListItemPageContainer,
	StyledListItemButton
} from './ListItemPageStyles';
import Title from '../../components/title/Title';
import ListItemPageApi from './ListItemPageApi';
import InputLabel from '../../components/inputLabel/InputLable';
import RotuesPath from '../../shared/routes/RotuesPath';

const ListItemPage = () => {
	const [itemInfo, setItemInfo] = useState({ name: '', ask_price: 0 });
	const navigate = useNavigate();

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
			await ListItemPageApi.createItem(
				itemInfo.name,
				Number(itemInfo.ask_price)
			);
			navigate(RotuesPath.HOME);
		} catch (error) {}
	};

	return (
		<StyledListItemPageContainer>
			<Title titleText={'List auction item'} />
			<InputLabel
				label="Item name"
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
