import React from 'react';
import { useUserContext } from '../../../../userContext/useUserContext';
import { fetchAndSetItem } from '../../helpers/helpers';
import { StyledBidButton } from '../../HomePage.styles';
import HomePageApi from '../../HomePageApi';
import { useNavigate } from 'react-router-dom';
import RotuesPath from '../../../../shared/routes/RotuesPath';
import LoginPageApi from '../../../loginPage/LoginPageApi';

const BidOrLogin = ({ setItem, newBidValue, item, setNewBid }) => {
	const { user } = useUserContext();
	const navigate = useNavigate();

	const USER_IS_LOGGED = Boolean(user.name);
	const IS_BID_POSSIBLE = newBidValue && newBidValue > item.current_price;

	const updateCurrentPrice = async () => {
		try {
			await LoginPageApi.updateUserBidValue(user.id, newBidValue);
			await HomePageApi.updateCurrentPrice(item.id, newBidValue, user.name);
			fetchAndSetItem(setItem);
		} catch (error) {}
	};

	return (
		<>
			{USER_IS_LOGGED ? (
				<StyledBidButton
					disabled={!IS_BID_POSSIBLE}
					onClick={updateCurrentPrice}
				>
					Bid
				</StyledBidButton>
			) : (
				<StyledBidButton onClick={() => navigate(RotuesPath.LOGIN)}>
					Log in
				</StyledBidButton>
			)}
		</>
	);
};

export default BidOrLogin;
