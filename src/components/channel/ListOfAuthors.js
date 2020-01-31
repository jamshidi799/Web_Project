import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from "@material-ui/core/ListSubheader";

import smProfile from '../../img/Animals_533.jpg'
import ImageAvatars from "../common/Avatar";
import { getUsersList } from '../../actions/auth'


class ListOfAuthors extends Component {
    componentDidMount() {
        this.props.getUsersList()
    }

    useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: 500,
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
        const isAuthor = this.props.channel.authors.find(author => user.id === author.id)
        return (
            <div className="container-fluid" key={user.id}>
                <div className="row align-items-center">
                    <div className="col-4">
                        <ImageAvatars avatar_src={smProfile} />
                    </div>
                    <div className="col-4">
                        <p className="text-secondary">{user.username}</p>
                    </div>
                    <div className="col-4 text-right">
                        {isAuthor === undefined ? <button className="btn btn-sm btn-info">add</button> :
                            <button className="btn btn-sm btn-info">remove</button>}
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
                        <Link to={`/newPost/${this.props.channel.id}`}>
                            <button className="btn btn-sm btn-info">add post</button>
                        </Link>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <GridList cellHeight={"auto"} className={classes.gridList}>
                        <hr />
                        <h4>Authors</h4>
                        <hr />
                        <GridListTile cols={2}>
                            {this.props.users.map(user => this.getUserCard(user))}
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

export default connect(mapStateToProps, { getUsersList })(ListOfAuthors)
