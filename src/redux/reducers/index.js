export const initialState = [];




const reducer = (state = initialState, action) => {
        switch (action.type) {
        case "ADD_PLAYER": return [...state, action.player];
        default: return initialState;
    }
};

 export default reducer;