import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () =>{
    const [state, setState] = useState(initialState);

    const addtoCart = (payload) => {
        setState({
            cart: [
                ...state.cart,
                payload
            ]
        });
    };

    return  {
        state,
        addtoCart
    }
}

export default useInitialState;
