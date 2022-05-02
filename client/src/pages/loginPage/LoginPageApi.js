import axios from 'axios';
import { apiUrl } from '../../shared/constant/environment';

class LoginPageApi {
	async createUser(userName) {
		try {
			const r = await axios.post(`${apiUrl}/users`, { name: userName });
			console.log(r, 'r');
		} catch (error) {
			console.log(error, ' err');
		}
	}

	async getUser() {
		try {
			const r = await axios.get(`${apiUrl}/users`);
			console.log(r, 'r');
		} catch (error) {
			console.log(error, ' err');
		}
	}
}

export default new LoginPageApi();
