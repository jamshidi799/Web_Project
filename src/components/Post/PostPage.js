import React, { Component } from 'react'
import Comment from '../Comment'


import img from '../../img/img1.jpg'
import likeIcon from '../../icons/icons8-facebook-like-24.png'

class PostPage extends Component {
    render() {
        return (
            <div class="container">
                <div class="jumbotron">
                    <img class="card-img-top" src={img} alt="post" />
                    <div class="card-body">
                        <h3 class="card-title text-success">Card title</h3>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <div ><span class="text-success">132,231 views</span></div>
                        <img src={likeIcon} /> <span>3.1k   </span>
                        <img src={likeIcon} /> <span>123    </span>

                    </div>
                    <div class="jumbotron">
                        <h3 class="text-primary">Comments:</h3>
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>

                </div>
            </div>

        )
    }

}

export default PostPage