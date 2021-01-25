import { WishList } from './../../types/Wishlist';
import { API } from '../../api/api';
import axios from 'axios';

export const getWishlistContent = async () => {
  try {
    const response = await axios.get(`${API}/wishList`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const addToWishlist = async (prodID: number) => {
  try {
    await axios.post(`${API}/wishList/${prodID}`);
    return { success: true };
  } catch (e) {
    console.log(e);
  }
};

export const removeFromWishlist = async (prodID: number) => {
  try {
    await axios.delete(`${API}/wishList/${prodID}`);
    return { success: true };
  } catch (e) {
    console.log(e);
  }
};
