import axios from 'axios';
import { apiUrl } from '../../shared/constant/environment';

class LoginPageApi {
	async updateUserBidValue(userId, bid_value) {
		return await axios.put(`${apiUrl}/users/${userId}`, {
			bid_value
		});
	}

	async createUser(name) {
		return await axios.post(`${apiUrl}/users`, {
			name,
			bid_value: 0
		});
	}

	async getUsers() {
		return await axios.get(`${apiUrl}/users`);
	}
}

export default new LoginPageApi();
