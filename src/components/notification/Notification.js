import React, { Component } from "react";
import { connect } from 'react-redux'

import { getNotification, deleteNotification } from '../../actions/notification'

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import 'bootstrap/dist/css/bootstrap.min.css';
import Divider from "@material-ui/core/Divider";
import NotificationCard from "./NotificationCard";
import GridList from "@material-ui/core/GridList";


class Notification extends Component {
    componentDidMount() {
        this.props.getNotification()
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Typography component="div" style={{ backgroundColor: 'white', height: '400px', }}
                        className="border rounded">
                        <div className="container mt-2 d-flex flex-column justify-content-center">
                            {this.props.notifications.map(item => (
                                <div>
                                    <NotificationCard notification={item} handleClose={this.props.handleClose} key={item.id} />
                                </div>
                            ))}
                        </div>
                    </Typography>
                </Container>
            </React.Fragment>
        );
    };

}


const mapStateToProps = state => {
    return {
        notifications: state.notification.notifications
    }
}

export default connect(mapStateToProps, { getNotification })(Notification)