import React from 'react';
import { useSelector } from 'react-redux';

import useStyles from './styles';

const Post = () => {
    const posts = useSelector((state) => state.posts); // Fetch data from global redux store
    const classes = useStyles();

    console.log(posts);

    return (
        <h1>POST</h1>
    );
}

export default Post;