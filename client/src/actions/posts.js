import * as api from '../api';

// Action creators (functions that return/dispatch actions)

export const getPosts = () => async (dispatch) => {
    try {
        // Fetch data object from response from API
        const { data } = await api.fetchPosts(); // GET request

        // Dispatch the action (action object)
        dispatch({ type: 'FETCH_ALL', payload: data }); // payload stores all posts
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        // Fetch data object from response from API
        const { data } = await api.createPost(post); // POST request

        // Dispatch the action (action object)
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error);
    }
}