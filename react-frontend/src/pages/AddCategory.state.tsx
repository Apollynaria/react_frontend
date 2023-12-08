export const initialState = { // определение начального состояния
    name: "",
    submitted: false,
    error: null,
};

interface CategoryState {
    name: string;
    submitted: boolean;
    error: any;
}

type ActionType = { type: 'CHANGE_NAME'; payload: string } | { type: 'SUBMIT_SUCCESS' } | { type: 'SUBMIT_ERROR'; payload: any };

export function categoryReducer(state: CategoryState, action: ActionType) {
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