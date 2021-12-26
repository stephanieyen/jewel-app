import { makeStyles } from '@material-ui/core/styles';
import createSpacing from '@material-ui/core/styles/createSpacing';

// Callback function
export default makeStyles(() => ({
    root: {
        '& .MuiTextField-root': {
            margin: createSpacing(1),
        },
    },
    paper: {
        padding: createSpacing(2),
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: 10,
    },
}));