export const initialState ={
    basket: []
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET': return {...state, basket: [...state.basket, action.payload]}
        case 'REMOVE_FROM_BASKET': {
            let tempArray = state.basket.filter(i => i.title !== action.payload.title);
            return {...state, basket: [...tempArray]};
        }
        default: return {...state};
    }
}