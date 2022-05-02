import axios from 'axios';
import { apiUrl } from '../../shared/constant/environment';

class ListItemPageApi {
	async createItem(name, ask_price) {
		return await axios.post(`${apiUrl}/items`, {
			name,
			ask_price,
			current_price: 0
		});
	}
}

export default new ListItemPageApi();
