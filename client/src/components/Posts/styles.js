import { makeStyles } from '@material-ui/core/styles';
import createSpacing from '@material-ui/core/styles/createSpacing';

// Callback function
export default makeStyles(() => ({
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    smMargin: {
        // margin: theme.spacing(1),
        margin: createSpacing(1),
    },
    actionDiv: {
        textAlign: 'center',
    },
}));