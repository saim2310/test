const initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: action.payload };

        case 'ADD_USER':
            const newUser = { ...action.payload };
            const updatedUsers = [...state.users, newUser];
            return { ...state, users: updatedUsers };

        case 'UPDATE_USER':
            const updatedUser = { ...action.payload };
            const updatedUsersList = state.users.map(user =>
                user.id === updatedUser.id ? updatedUser : user
            );
            return { ...state, users: updatedUsersList };

        case 'DELETE_USER':
            const deletedUserId = action.payload;
            const filteredUsers = state.users.filter(user => user.id !== deletedUserId);
            return { ...state, users: filteredUsers };

        case 'GET_USERS':
            return { ...state, users: action.payload };


        default:
            return state;
    }
};

export default usersReducer;
