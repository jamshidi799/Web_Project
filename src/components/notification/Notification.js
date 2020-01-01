import React, {Component} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import 'bootstrap/dist/css/bootstrap.min.css';
import Divider from "@material-ui/core/Divider";
import NotificationCard from "./NotificationCard";
import GridList from "@material-ui/core/GridList";


class Notification extends Component {
    state = {
        notification:[
            {
                kind:'like',
                username: 'Mohammad'
            },{
                kind:'follow',
                username: 'Ali'
            }
        ]
    };

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth="sm">
                    <Typography component="div" style={{backgroundColor: 'white', height: '88vh',}}
                                className="border rounded">
                        <GridList cellHeight={180} style={this.gridList}>
                            <div className='d-flex ml-3'>
                                <div className="d-flex align-content-end m-5">
                                    <div className='d-flex flex-column'>
                                        {this.state.notification.map(item => (
                                            <React.Fragment>
                                                <NotificationCard user={item}/>
                                                <Divider variant="inset" component="li"/>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </GridList>
                    </Typography>
                </Container>
            </React.Fragment>
        );
    };

}


export default Notification;