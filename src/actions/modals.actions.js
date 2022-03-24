export const openEditModalRedux = (id) => {
    return {type: 'OPEN_EDIT_MODAL', payload: {id}}
}

export const closeEditModalRedux = (id) => {
    return {type: 'CLOSE_EDIT_MODAL'}
}