import React,{Component} from "react";
import LatestPosts from "../../Post/postAssortment/LatestPosts";

class Latest extends Component{
    render() {
        return(
            <div className="container-fluid">
                <div className="row text-center text-lg-left">
                    <LatestPosts />
                </div>
            </div>
        )
    }

}

export default Latest;