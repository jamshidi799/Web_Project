import React, { Component } from 'react';
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ChannelCard from "./ChannelCard";
import ListSubheader from "@material-ui/core/ListSubheader";


class ListOfChannel extends Component {
    useStyles = makeStyles(theme => ({
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

    render() {
        const classes = this.useStyles
        return (
            <div className='container'>
                <GridList cellHeight={"auto"} className={classes.gridList}>
                    <ListSubheader component="div">Channels</ListSubheader>
                    <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
                    </GridListTile>
                    {this.props.channels.map(channel => <ChannelCard key={channel.id} channel={channel} closeModal={this.props.close} />)}
                </GridList>
            </div>
        );
    }

};

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps, {})(ListOfChannel)
