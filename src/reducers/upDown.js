const initialState = 0;
const changeTheNumber = (state= initialState, action) =>{

    if(action.type == "INCREMENT")
    {
        return state + action.payload;
    }
    if(action.type == "DECREMENT")
    {
        return state- action.payload;
    }
    return state;

}

export default changeTheNumber;