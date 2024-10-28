export const addTodo = (text) => ({
    type: 'ADD_TODO',
    text,
});

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    id,
});

export const changeDone = (id) => ({
    type: 'CHANGE_DONE',
    id,
});
