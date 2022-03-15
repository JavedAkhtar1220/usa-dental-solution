import { actionType } from "./constant";

const initialState = {
    amount: []
}

export const amountForm = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.AMOUNT_FORM:
            return {
                ...state,
                amount: [...state.amount, payload]
            };
        default:
            return state;
    }
};