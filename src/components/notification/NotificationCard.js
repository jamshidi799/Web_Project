import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

import { deleteNotification } from '../../actions/notification'

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import img from '../../img/Animals_530.jpg'


class NotificationCard extends Component {

    inlineStyle = {
        display: 'inline',
    };

    onLinkClicked = () => {
        this.props.deleteNotification(this.props.notification.id)
        this.props.handleClose()
    }

    getUrl = () => {
        const { kind, creator, target_post } = this.props.notification
        if (kind === "comment") {
            const postid = this.props.posts.find(post => post.title === target_post).id
            return (
                <div>
                    {creator} leave a comment to <Link to={`/post/${postid}`} onClick={this.onLinkClicked}>
                        {target_post}
                    </Link>
                </div>
            )
        }
        return (
            <div>
                <Link to={`/profile/${creator}`} onClick={this.onLinkClicked} >{creator}</Link>follow you
            </div >
        )
    }

    render() {
        return (
            <div className='d-flex justify-content-around'>
                <ListItem style={{ width: '40vh' }}>
                    <ListItemAvatar>
                        <Avatar alt="User" src={img} />
                    </ListItemAvatar>
                    {this.getUrl()}
                </ListItem>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        posts: state.post.posts
    }
}

export default connect(mapStateToProps, { deleteNotification })(NotificationCard)