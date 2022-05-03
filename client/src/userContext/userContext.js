import { createContext } from 'react';

const initialUser = {
	user: { name: '', id: undefined },
	setUser: () => {}
};

export const UserContext = createContext(initialUser);
