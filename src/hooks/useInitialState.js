import { useState } from "react";

const initialState = {
    cart:[],

}

const useInitialState = () =>{
    const [state,setstate] = useState(initialState);

    const addtoCart = (payload) => {
        setstate({
            ...state,
            cart:[...state.cart,payload]
        });
       
 };
 return{
    state,
    addtoCart
 }
}

export default useInitialState;
