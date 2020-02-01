import React, { Component } from "react";
import { connect } from 'react-redux'

import CenteredTabs from "./TabsOfSearch";
import { search } from '../../actions/search'


class SearchPage extends Component {
    state = {
        search: null
    }

    componentDidMount() {
        this.setState(() => this.props.match.params);
        this.props.search(this.props.match.params.search)
    }

    render() {
        return (
            <div className='d-flex justify-content-center'>
                <CenteredTabs search={this.state.search} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps, { search })(SearchPage)