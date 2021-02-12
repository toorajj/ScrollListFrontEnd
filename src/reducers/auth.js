const authReducer = ( state = { authData: null }, action) => {

    switch(action.type) {
        case 'AUTH':
            console.log(action?.data);
            return state;
        default:
            return state;
            break;
    }
};

export default authReducer;