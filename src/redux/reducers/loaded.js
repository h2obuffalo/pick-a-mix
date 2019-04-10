export const initialState = true;



const loaded = (state = initialState, action) => {
        switch (action.type) {
            case "LOADED":
                return true;
            default:
                return initialState;
        }
};

export default loaded;