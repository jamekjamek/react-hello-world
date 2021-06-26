import React, { Component, Fragment } from 'react'
import Post from '../../../component/Post';
import './index.css';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1
        },
        isUpdated: false
    }


    getApi = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then((res) => {
                this.setState({
                    post: res.data
                })
            }).catch((err) => {
                console.log('err :', err)
            })
    }


    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
            .then((res) => {
                this.getApi();
                this.setState({
                    formBlogPost: {
                        id: 1,
                        title: "",
                        body: "",
                        userId: 1
                    },
                })
            }, (err) => {
                console.log('Error : ', err);
            })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
            .then((res) => {
                console.log(res);
                this.getApi();
                this.setState({
                    isUpdated: false,
                    formBlogPost: {
                        id: 1,
                        title: "",
                        body: "",
                        userId: 1
                    },
                })
            })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`)
            .then((res) => {
                this.getApi()
            })
    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdated: true
        })
    }

    handleFormChange = (event) => {
        let formBlogPostNew = { ...this.state.formBlogPost }
        let timeStamp = new Date().getTime();
        if (!this.state.isUpdated) {
            formBlogPostNew['id'] = timeStamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = () => {
        if (this.state.isUpdated) {
            this.putDataToAPI()
        } else {
            this.postDataToAPI()
        }
    }

    componentDidMount() {
        this.getApi()
    }
    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange} value={this.state.formBlogPost.title} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange} value={this.state.formBlogPost.body}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />
                    })
                }
            </Fragment >
        )
    }
}

export default BlogPost
