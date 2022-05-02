import { createContext } from 'react';

const initialUser = {
	name: '',
	setUser: () => {}
};

export const UserContext = createContext(initialUser);
