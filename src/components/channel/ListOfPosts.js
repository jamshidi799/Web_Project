import React, { Component } from 'react';
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import PostCard from "../Post/PostCard";


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

    render() {
        const classes = this.useStyles;
        return (
            <React.Fragment>
                <GridList cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        {this.props.posts.map(post => {
                            if (post.channelid === this.props.channel.id)
                                return (
                                    <div className="card" style={{ width: 50 + 'rem' }}>
                                        <PostCard key={post.id} post={post} />
                                    </div>)
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
    }
}

export default connect(mapStateToProps, {})(ListOfPosts)
