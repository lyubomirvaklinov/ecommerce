import axios from 'axios';
import { API } from '../../api/api';

export const getBasketContent = async () => {
  try {
    const response = await axios.get(`${API}/basket`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const addToBasket = async (prodID: number) => {
  try {
    await axios.post(`${API}/basket/${prodID}`);
    return { success: true };
  } catch (e) {
    console.log(e);
  }
};

export const removeFromBasket = async (prodID: number) => {
  try {
    await axios.delete(`${API}/basket/${prodID}`);
    return { success: true };
  } catch (e) {
    console.log(e);
  }
};

export const increaseItemQty = async (prodID: number) => {
  try {
    await axios.patch(`${API}/basket/${prodID}/increase`);
    return { success: true };
  } catch (e) {
    console.log(e);
  }
};
