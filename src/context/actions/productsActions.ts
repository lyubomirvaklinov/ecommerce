import axios from 'axios';
import { API } from '../../api/api';

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API}/products`);

    return response.data;
  } catch (e) {
    console.log(e);
  }
};
