import React, {Component} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import img from '../../img/Animals_530.jpg'
import {Link} from "react-router-dom";

class NotificationCard extends Component {

    inlineStyle = {
        display: 'inline',
    };

    content() {
        if (this.props.user.kind === 'like') {
            return ('  like your post');
        } else return ('  follow you');
    }

    render() {
        return (
            <div className='d-flex justify-content-around'>
                <ListItem style={{width: '40vh'}}>
                    <ListItemAvatar>
                        <Avatar alt="User" src={img}/>
                    </ListItemAvatar>
                    <Link to={`/profile/${this.props.user.username}`}>{this.props.user.username + " "}</Link>
                    <ListItemText
                        primary={''}
                        secondary={
                            <React.Fragment>
                                <div className='ml-1'>
                                    {this.content()}
                                </div>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    style={this.inlineStyle}
                                    color="textPrimary"
                                >
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </div>
        );
    }

}

export default NotificationCard;