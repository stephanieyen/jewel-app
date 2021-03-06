import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux'; // Used to dispatch actions

import useStyles from './styles';
import { createPost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState(
        { creator: '', title: '', message: '', tags: '', selectedFile: '' }); // Object in the state
    const classes = useStyles();
    const dispatch = useDispatch(); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Pass in data from state and make API request once the Submit button is clicked

        dispatch(createPost(postData));
    }

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>

                {/* For each form field, set the state using an object by spreading postData */}
                <TextField name="creator" label="Creator" value={postData.creator} variant="outlined" fullWidth 
                    onChange={(event) => setPostData({ ...postData, creator: event.target.value })} />
                <TextField name="title" label="Title" value={postData.title} variant="outlined" fullWidth 
                    onChange={(event) => setPostData({ ...postData, title: event.target.value })} />
                <TextField name="message" label="Message" value={postData.message} variant="outlined" fullWidth 
                    onChange={(event) => setPostData({ ...postData, message: event.target.value })} />
                <TextField name="tags" label="Tags" value={postData.tags} variant="outlined" fullWidth 
                    onChange={(event) => setPostData({ ...postData, tags: event.target.value })} />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>

                {/* Submit and Clear buttons */}
                <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;