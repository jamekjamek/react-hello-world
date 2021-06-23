import React, { Component, Fragment } from 'react'
import Post from '../../component/Post';
import './index.css';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: []
    }

    componentDidMount() {
        axios.get('http://localhost:3004/posts')
            .then((res) => {
                console.log(res);
                this.setState({
                    post: res.data
                })
            }).catch((err) => {
                console.log('err :', err)
            })
    }
    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} title={post.title} desc={post.body} />
                    })
                }
            </Fragment >
        )
    }
}

export default BlogPost
