import React from 'react'

const Post = (props) => {
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="https://placeimg.com/200/150/people" alt="dummyimg" />
            </div>
            <div className="content">
                <p className="title">{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
                <button className="update" onClick={() => props.update(props.data)}>Update</button>
                <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
            </div>
        </div>)
}
Post.defaultProps = {
    title: "Dummy Title",
    desc: "Dummy Desc"
}

export default Post
