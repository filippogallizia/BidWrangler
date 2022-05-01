import React, { useState, useEffect } from 'react';
import CurrentItem from './components/CurrentItem/CurrentItem';
import { StyledBidButton, StyledHomePageContainer } from './HomePage.styles';
import HomePageApi from './HomePageApi';
import { getLastItemCreated } from './helpers/helpers';
import InputLabel from '../../components/inputLabel/InputLable';

const HomePage = () => {
	const [item, setItem] = useState({
		name: '',
		ask_price: '',
		current_price: '',
		id: undefined
	});
	const [newBidValue, setNewBid] = useState(0);

	const fetchAndSetItem = async () => {
		try {
			const itemsResponse = await HomePageApi.getItem();

			if (
				itemsResponse &&
				itemsResponse.data &&
				itemsResponse.data.length > 0
			) {
				const lastItemCreated = getLastItemCreated(itemsResponse.data)[0];
				setItem({
					name: lastItemCreated.name,
					ask_price: lastItemCreated.ask_price,
					current_price: lastItemCreated.current_price,
					id: lastItemCreated.id
				});
			}
		} catch (error) {}
	};

	useEffect(() => {
		fetchAndSetItem();
	}, []);

	const updateCurrentPrice = async () => {
		try {
			await HomePageApi.updateCurrentPrice(item.id, newBidValue);
			fetchAndSetItem();
		} catch (error) {}
	};

	return (
		<StyledHomePageContainer>
			<CurrentItem item={item} setItem={setItem} />
			<InputLabel
				value={newBidValue}
				onChange={(e) => setNewBid(e.target.value)}
				label="insert your bid"
			/>
			<StyledBidButton onClick={updateCurrentPrice}>Bid</StyledBidButton>
		</StyledHomePageContainer>
	);
};

export default HomePage;
