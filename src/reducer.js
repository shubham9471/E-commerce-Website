
export const initialState = {  
    basket: [],
    user: null,
    
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

// here state means the state of day lia and then we manipulate the day lia with actions. the actions can be anything like add item to the basket or remove item to basket
const reducer = (state, action) => {
    console.log("action in reducer",action)
    switch(action.type) {

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            //logic item to add
            return {
                ...state,
                basket:[...state.basket, action.item],
            };

        case 'REMOVE_FROM_BASKET':
            //remove items from basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            console.log("index", index)
            
            if (index >= 0){
                console.log("djnddnxnd",newBasket[index])
                newBasket.splice(index, 1);
                

            } else{
                console.warn(
                   `cant remove product (id: $(action.id)) as its not in basket`
                );
            }

            return {...state, basket: newBasket};
  
        
        default:
            return state; // return to the initial state of day lia or leave where state o daylia as it is

    }
};

export default reducer; 