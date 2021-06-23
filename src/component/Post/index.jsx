import React from 'react'

const Post = (props) => {
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="https://placeimg.com/200/150/people" alt="dummyimg" />
            </div>
            <div className="content">
                <p className="title">
                    {props.title}
                </p>
                <p className="desc">
                    {props.desc}
                </p>
            </div>
        </div>)
}
Post.defaultProps = {
    title: "Dummy Title",
    desc: "Dummy Desc"
}

export default Post
