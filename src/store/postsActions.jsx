export const addPost = (user) => {
    return {
        type: "ADD_POST",
        payload: user
    }
}


export const deletePost = (user_id) => {
    return {
        type: "DELETE_POST",
        payload: user_id
    }
}
export const editPost = (user_id, updated_info) => {
    return {
        type: "EDIT_POST",
        user_id: user_id,
        updated_info: updated_info
    }
}