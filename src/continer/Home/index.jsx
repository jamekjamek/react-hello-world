
//Libraries
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//PAGE
import BlogPost from '../pages/BlogPost';
import Product from '../pages/Product';
import YoutubeCompPage from '../pages/YoutubeCompPage';
class Home extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/youtube-component">Youtube</Link>
                    </div>

                    <Route path="/" exact component={BlogPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/youtube-component" component={YoutubeCompPage} />
                </Fragment>
            </Router>
        )
    }
}
export default Home
