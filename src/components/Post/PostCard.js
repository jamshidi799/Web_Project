import React, { Component, Fragment } from 'react'
import img from '../../img/img1.jpg'
import likeIcon from '../../icons/icons8-facebook-like-24.png'
import { Link } from 'react-router-dom'

class PostCard extends Component {
    render() {
        // console.log("PostCard", this.props)
        const { id, title, content } = this.props.post
        return (
            <Fragment>
                <img className="card-img-top" src={img} alt="post" />
                <div className="card-body">
                    <Link to={`/post/${id}`}><h5 className="card-title">{title}</h5></Link>
                    <p className="card-text">{content}</p>
                    <div><span>132,231 views</span></div>
                    <img src={likeIcon} alt="like" /> <span>3.1k   </span>
                    <img src={likeIcon} alt="unlike" /> <span>123    </span>

                </div>
            </Fragment>
        )
    }
}

export default PostCard