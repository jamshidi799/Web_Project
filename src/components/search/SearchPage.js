import React, {Component} from "react";
import CenteredTabs from "./TabsOfSearch";


class SearchPage extends Component{
    state = {
        search : null
    }

    componentDidMount() {
        this.setState(() => this.props.match.params);
    }

    render() {
        return(
            <div className='d-flex justify-content-center'>
                <CenteredTabs search={this.state.search}/>
            </div>
        );
    }
}

export default SearchPage