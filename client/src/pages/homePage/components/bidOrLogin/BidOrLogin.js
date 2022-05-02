import React from 'react';
import { useUserContext } from '../../../../userContext/useUserContext';
import { updateUserInStorage } from '../../../loginPage/helpers/helpers';
import { fetchAndSetItem } from '../../helpers/helpers';
import { StyledBidButton } from '../../HomePage.styles';
import HomePageApi from '../../HomePageApi';
import { useNavigate } from 'react-router-dom';
import RotuesPath from '../../../../shared/routes/RotuesPath';

const BidOrLogin = ({ setItem, newBidValue, item }) => {
	const user = useUserContext();
	const navigate = useNavigate();

	const USER_IS_LOGGED = Boolean(user.user);
	const IS_BID_POSSIBLE = newBidValue && newBidValue > item.current_price;

	const updateCurrentPrice = async () => {
		try {
			await HomePageApi.updateCurrentPrice(item.id, newBidValue, user.user);
			fetchAndSetItem(setItem);
			updateUserInStorage(undefined, newBidValue);
		} catch (error) {}
	};

	return (
		<>
			{USER_IS_LOGGED && (
				<StyledBidButton
					disabled={!IS_BID_POSSIBLE}
					onClick={updateCurrentPrice}
				>
					Bid
				</StyledBidButton>
			)}

			{!USER_IS_LOGGED && (
				<StyledBidButton onClick={() => navigate(RotuesPath.LOGIN)}>
					Log in
				</StyledBidButton>
			)}
		</>
	);
};

export default BidOrLogin;
