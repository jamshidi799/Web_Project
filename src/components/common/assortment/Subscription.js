import React,{Component} from "react";
import SubPosts from "../../Post/postAssortment/SubPosts";

class Subscription extends Component{
    render() {
        return(
            <div className="container-fluid">
                <div className="row text-center text-lg-left">
                    <SubPosts />
                </div>
            </div>
        )
    }

}

export default Subscription;