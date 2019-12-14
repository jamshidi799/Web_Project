import React, { Component } from 'react'
import img from '../img/img1.jpg'
import likeIcon from '../icons/icons8-facebook-like-24.png'

class Post extends Component {
    render() {
        return (
            <div class="card" style={{ width: 18 + 'rem' }}>
                <img class="card-img-top" src={img} alt="post" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div><span>132,231 views</span></div>
                    <img src={likeIcon} /> <span>3.1k   </span>
                    <img src={likeIcon} /> <span>123    </span>

                </div>
            </div>
        )
    }
}

export default Post