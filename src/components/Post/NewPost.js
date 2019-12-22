import React, { Component } from 'react'

class NewPost extends Component {
    render() {
        return (
            <div class="container">
                <form class="jumbotron">
                    <h2 class="text-center text-success">create new post</h2>
                    <br />
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="" class="form-control" id="title" required />
                    </div>
                    <div class="form-group">
                        <label for="Text">Text</label>
                        <textarea class="form-control" id="Text" rows="3" required />
                    </div>
                    <div class="form-group">
                        <label class="form-check-label" for="image">image</label>
                        <input type="file" class="form-control-file" id="image" required />
                    </div>
                    <button type="submit" class="btn btn-primary">Create</button>
                </form>
            </div>
        )
    }
}

export default NewPost