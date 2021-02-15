import axiox from 'axios'
import { CART_ADD_ITEM } from '../constants/cartConstants'

export const addToCart = (id,qty) => async (dispatch,getstate)=>{
    const {data} = await axiox.get(`/api/products/${id}`)

    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            product: data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            qty,
        },
    })

    localStorage.setItem('cartItems',JSON.stringify(getstate().cart.cartItems))
}