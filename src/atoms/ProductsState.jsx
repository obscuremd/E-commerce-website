import axios from "axios";
import { selector } from "recoil";

export const ProductState = selector({
    key: 'products',
    get: async()=>{
        const res = await axios.get('https://fakestoreapi.com/products/')

        return res.data
    }
})

export const FetchProducts =async()=>{
    const res = await axios.get('https://fakestoreapi.com/products/')

    return res.data
}