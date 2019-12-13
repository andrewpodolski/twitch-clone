import React from 'react';
import { Router, Route } from 'react-router-dom';
import CreateStream from './streams/StreamCreate';
import EditStream from './streams/StreamEdit';
import DeleteStream from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={CreateStream} />
                    <Route path="/streams/edit" exact component={EditStream} />
                    <Route path="/streams/delete" exact component={DeleteStream} />
                    <Route path="/streams/show" exact component={StreamShow} />
                </div>
            </Router>
        </div>
    )
}
export default App;