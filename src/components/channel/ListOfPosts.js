import React, { Component } from 'react';
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import PostCard from "../Post/PostCard";
import { deletePost } from '../../actions/channel'


class ListOfPosts extends Component {
    useStyles = makeStyles(theme => ({
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


    onDeletePostBtnClicked = (id) => this.props.deletePost(id)

    getDeletePostBtn = (id) => {
        if (this.props.channel.owner === this.props.user.id)
            return (
                <button className="btn btn-sm btn-secondary"
                    onClick={() => this.onDeletePostBtnClicked(id)}>delete</button>)
    }

    render() {
        const classes = this.useStyles;
        return (
            <React.Fragment>
                <GridList cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        {this.props.channel.posts.map(post => {
                            return (
                                <div className="container-fluid m-3" key={post.id}>
                                    <div className="card" style={{ width: "100%" }} >
                                        <PostCard post={post} />
                                        {this.getDeletePostBtn(post.id)}
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </GridListTile>

                </GridList>
            </React.Fragment >
        );
    }

};

const mapStateToProps = state => {
    return {
        posts: state.post.posts,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { deletePost })(ListOfPosts)
