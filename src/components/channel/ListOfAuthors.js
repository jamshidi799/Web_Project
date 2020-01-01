import React, { Component } from 'react';
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from "@material-ui/core/ListSubheader";


class ListOfAuthors extends Component {
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

    onAddClicked = () => {

    }

    onRemoveClicked = () => {

    }

    getUserCard = (user) => {
        return <div>
            hell
        </div>
    }

    render() {
        const classes = this.useStyles
        return (
            <div className='d-flex justify-content-center'>
                <GridList cellHeight={"auto"} className={classes.gridList}>
                    <ListSubheader component="div">Channels</ListSubheader>
                    <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
                        {this.props.users.map(user => this.getUserCard(user))}
                    </GridListTile>
                </GridList>
            </div>
        );
    }

};

const mapStateToProps = state => {
    return {
        users: state.auth.users,
    }
}

export default connect(mapStateToProps, {})(ListOfAuthors)
