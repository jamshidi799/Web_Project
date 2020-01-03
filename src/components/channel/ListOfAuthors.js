import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from "@material-ui/core/ListSubheader";

import smProfile from '../../img/Animals_533.jpg'
import ImageAvatars from "../common/Avatar";


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
        return (
            <div className="container-fluid" key={user.id}>
                <div className="row align-items-center">
                    <div className="col-4">
                        <ImageAvatars avatar_src={smProfile} />
                    </div>
                    <div className="col-4">
                        <p className="text-secondary">{user.username}</p>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-sm btn-info">add</button>
                    </div>
                </div>

            </div>
        )
    }

    render() {
        const classes = this.useStyles
        return (
            <Fragment>
                <div className="container-fluid">
                    <div className="d-flex align-items-center justify-content-row">

                        <button className="btn btn-sm btn-info mr-1">follow</button>
                        <span>  </span>
                        <button className="btn btn-sm btn-info">add post</button>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <GridList cellHeight={"auto"} className={classes.gridList}>
                        <ListSubheader component="div">
                            <hr />
                            <h4>Authors</h4>
                        </ListSubheader>
                        <hr />
                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                            {this.props.users.map(user => this.getUserCard(user))}
                            <div className="container">

                            </div>
                        </GridListTile>
                    </GridList>
                </div>
            </Fragment>

        );
    }

};

const mapStateToProps = state => {
    return {
        users: state.auth.users,
    }
}

export default connect(mapStateToProps, {})(ListOfAuthors)
