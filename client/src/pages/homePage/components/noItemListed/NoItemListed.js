import React from 'react';
import { StyledBidButton } from '../../HomePage.styles';
import { useNavigate } from 'react-router-dom';
import RotuesPath from '../../../../shared/routes/RotuesPath';

const NoItemListed = ({ setItem, newBidValue, item }) => {
	const navigate = useNavigate();

	return (
		<>
			<p>No item listed yet.</p>

			<StyledBidButton onClick={() => navigate(RotuesPath.LIST_ITEM)}>
				List one
			</StyledBidButton>
		</>
	);
};

export default NoItemListed;
