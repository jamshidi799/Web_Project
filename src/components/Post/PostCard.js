import React, { Component, Fragment } from 'react'
import img from '../../img/img1.jpg'
import likeIcon from '../../icons/icons8-facebook-like-24.png'
import { Link } from 'react-router-dom'

class PostCard extends Component {
    render() {
        const { id, title, like } = this.props.post
        return (
            <Fragment>
                <div className="card">
                    <img className="card-img-top" src={img} alt="post" />
                    <div className="card-body">
                        <Link to={`/post/${id}`}><h5 className="card-title">{title}</h5></Link>
                        <hr />
                        <div><span>132,231 views</span></div>
                        <img src={likeIcon} alt="like" /> <span>{like.length}   </span>

                    </div>
                </div>
            </Fragment>
        )
    }
}

export default PostCard