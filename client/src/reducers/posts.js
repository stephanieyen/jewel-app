export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            // Get posts
            return action.payload; 
        case 'CREATE':
            // Spread posts and add new post
            return [ ...posts, action.payload]; 
        default:
            return posts;
    }
}