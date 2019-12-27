import React, { Component } from 'react'
import img from '../../img/img1.jpg'
import likeIcon from '../../icons/icons8-facebook-like-24.png'
import { Link } from 'react-router-dom'

class PostCardForChannel extends Component {
    render() {
        return (
            <div class="card" style={{ width: 33 + 'rem' }}>
                <img class="card-img-top" src={img} alt="post" />
                <div class="card-body">
                    <Link to="/post/3"><h5 class="card-title">Card title</h5></Link>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div><span>132,231 views</span></div>
                    <img src={likeIcon} alt="like" /> <span>3.1k   </span>
                    <img src={likeIcon} alt="unlike" /> <span>123    </span>

                </div>
            </div>
        )
    }
}

export default PostCardForChannel