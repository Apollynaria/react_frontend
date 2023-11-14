export const initialState = { // определение начального состояния
    name: "",
    submitted: false,
    error: null,
};

export function categoryReducer(state, action) {
    switch (action.type) { // изменения состояния в зависимости от типа действия
        case 'SUBMIT_SUCCESS':
            return {
                ...state,
                submitted: true,
                error: null,
            };
        case 'SUBMIT_ERROR':
            return {
                ...state,
                submitted: false,
                error: action.payload,
            };
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload,
            };
        default:
            return state;
    }
}