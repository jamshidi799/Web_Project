import React from 'react'

import likeIcon from '../icons/icons8-facebook-like-24.png'
import unlikeIcon from '../icons/icons8-thumbs-down-24.png'

const Comment = () => {
    return (
        <div>
            <p className="lead">img elements must have an alt prop, either with meaningful</p>
            <div>
                <img src={likeIcon} alt="like" /> <span>3.1k   </span>
                <img src={unlikeIcon} alt="unlike" /> <span>123    </span>
            </div>
            <hr class="my-4" />
        </div>
    )
}

export default Comment