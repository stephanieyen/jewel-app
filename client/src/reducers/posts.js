export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload; // posts
        case 'CREATE':
            return [ ...posts, action.payload]; // spread posts and add new post
        default:
            return posts;
    }
}