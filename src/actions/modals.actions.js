const types = {
    OPEN_EDIT_MODAL: 'OPEN_EDIT_MODAL',
    CLOSE_EDIT_MODAL: 'CLOSE_EDIT_MODAL'
}

export const openEditModalRedux = (id) => {
    return {type: 'OPEN_EDIT_MODAL', payload: {id}}
}

export const closeEditModalRedux = (id) => {
    return {type: 'CLOSE_EDIT_MODAL'}
}

export default types;