import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PostCardForChannel from "./PostCardForChannel";
import ChannelCard from "./ChannelCard";
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
        width: 536,
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
                <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                </GridListTile>
                <ChannelCard username="1"/>
                <ChannelCard username="2"/>
                <ChannelCard username="3"/>
                <ChannelCard username="4"/>
                <ChannelCard username="5"/>
                <ChannelCard username="6"/>
                <ChannelCard username="7"/>
                <ChannelCard username="8"/>

            </GridList>
        </div>
    );
};
export default ListOfChannel
