import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PostCardForChannel from "./PostCardForChannel";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 536,
        height: 880,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));
const ListOfPosts = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                </GridListTile>
                <PostCardForChannel/>
                <PostCardForChannel/>
                <PostCardForChannel/>
                <PostCardForChannel/>
            </GridList>
        </React.Fragment>
    );
};
export default ListOfPosts
