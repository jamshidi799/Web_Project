import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const ImageAvatars = props => {
    const classes = useStyles();

    function formatAvatar() {
        if (props.avatar_src === null)
            return <Avatar className={classes.large}/>
        else {
            return <Avatar src={props.avatar_src} className={classes.large}/>
        }
    }

    return (
        <div className={classes.root + ""}>
            {formatAvatar()}
        </div>
    );


};
export default ImageAvatars


