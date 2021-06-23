import React, { Component } from 'react'
import BlogPost from '../BlogPost'

class Home extends Component {
    render() {
        return (
            <div>
                {/* <p>Youtube Component</p>
                <hr />
                <YoutubeComp
                    time="2.50"
                    title="React Js Tutorial - Bagian 1"
                    desc="4x ditonton. 1 hari yang lalu" />
                <YoutubeComp
                    time="9.01"
                    title="React Js Tutorial - Bagian 2"
                    desc="10x ditonton. 2 hari yang lalu" />
                <YoutubeComp
                    time="16.01"
                    title="React Js Tutorial - Bagian 3"
                    desc="1k ditonton. 3 hari yang lalu" />
                <YoutubeComp
                    time="8.40"
                    title="React Js Tutorial - Bagian 4"
                    desc="4x ditonton. 1 hari yang lalu" />
                <YoutubeComp
                /> */}
                {/* <p>Product Component</p>
                <hr />
                <Product /> */}
                <p>Blog Post</p>
                <hr />
                <BlogPost />
            </div>
        )
    }
}

export default Home
