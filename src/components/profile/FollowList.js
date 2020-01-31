import React, { Component } from 'react';
import { connect } from 'react-redux'

import ProfileCard from "./ProfileCard";
import { getUsersList } from '../../actions/auth'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from "@material-ui/core/ListSubheader";


class FollowList extends Component {

    useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: 350,
            height: 880,
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    }))



    render() {
        const classes = this.useStyles;
        return (
            <div className='d-flex justify-content-center'>
                <GridList cellHeight={"auto"} className={classes.gridList}>
                    <ListSubheader component="div"><h3>Profiles</h3></ListSubheader>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    </GridListTile>
                    {this.props.users.map(user => <ProfileCard user={user} key={user.id} />)}
                </GridList>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        users: state.auth.users
    }
}

export default connect(mapStateToProps, { getUsersList })(FollowList)
