import { actionType } from "reducers/constant"

export const amountForm = (payload) => {
    return {
        type: actionType.AMOUNT_FORM,
        payload: payload,
    }
}