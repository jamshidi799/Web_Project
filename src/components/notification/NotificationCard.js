import React, {Component} from "react";
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
    content(){
        if (this.props.user.kind === 'like'){
            return (this.props.user.username + ' like your post');
        }
        else return(this.props.user.username + ' follow you');
    }
    render() {
        return (
            <div className='d-flex justify-content-around'>
                <ListItem style={{width: '40vh'}}>
                    <ListItemAvatar>
                        <Avatar alt="User" src={img}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={this.content()}
                        secondary={
                            <React.Fragment>
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