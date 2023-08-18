export const setUsers = users => ({
    type: 'SET_USERS',
    payload: users,
});

export const addUser = newUser => ({
    type: 'ADD_USER',
    payload: newUser,
});

export const updateUser = updatedUser => ({
    type: 'UPDATE_USER',
    payload: updatedUser,
});

export const deleteUser = userId => ({
    type: 'DELETE_USER',
    payload: userId,
});