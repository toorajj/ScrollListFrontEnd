import { fetchPosts, fetchCreatePost }  from '../api';

//Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await fetchPosts();

        dispatch ({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const response = await fetchCreatePost(post);
        console.log(response);
        dispatch({ type: 'CREATE', payload: response.data });

    } catch (error) {
        console.log(error);
    }
}