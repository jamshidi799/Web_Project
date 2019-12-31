import React from 'react';

import ProfileCard from "./ProfileCard";

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 300,
        height: 880,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));
const ListOfChannel = () => {
    const classes = useStyles();

    return (
        <div className='d-flex justify-content-center'>
            <GridList cellHeight={"auto"} className={classes.gridList}>
                <ListSubheader component="div">Channels</ListSubheader>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                </GridListTile>
                <ProfileCard username="1" />
                <ProfileCard username="2" />
                <ProfileCard username="3" />
                <ProfileCard username="4" />
                <ProfileCard username="5" />
                <ProfileCard username="6" />
                <ProfileCard username="7" />
                <ProfileCard username="8" />

            </GridList>
        </div>
    );
};
export default ListOfChannel
