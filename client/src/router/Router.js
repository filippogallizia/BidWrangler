import React from 'react';
import RoutesPath from '../shared/routes/RotuesPath';
import LoginPage from '../pages/loginPage/LoginPage';
import ListItemPage from '../pages/listItemPage/ListItemPage';
import HomePage from '../pages/homePage/HomePage';
import {
	StyledBaseLayoutBody,
	StyledlMainContentContainer
} from './Router.styles';
import Header from '../components/header/Header';

import {
	useLocation,
	Routes,
	Route,
	Navigate,
	BrowserRouter,
	Outlet
} from 'react-router-dom';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					element={
						<StyledBaseLayoutBody>
							<Header />

							<StyledlMainContentContainer>
								<Outlet />
							</StyledlMainContentContainer>
							{/*<Footer />*/}
						</StyledBaseLayoutBody>
					}
				>
					<Route path={RoutesPath.LOGIN} element={<LoginPage />} />
					<Route path={RoutesPath.HOME} element={<HomePage />} />

					<Route path={RoutesPath.LIST_ITEM} element={<ListItemPage />} />
					<Route path="*" element={<HomePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
