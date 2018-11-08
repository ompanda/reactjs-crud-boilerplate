import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './common/PageNotFound';
import Home from './landing/Home';
import LoginPage from './login/LoginPage';
import CourseListContainer from './course/CourseListContainer'; // eslint-disable-line import/no-named-as-default
import AddOrEditCourseContainer from './course/AddOrEditCourseContainer'; // eslint-disable-line import/no-named-as-default
import About from './About';
import createBrowserHistory from 'history/createBrowserHistory';
import HeaderNavContainer from './landing/HeaderNavContainer'; // eslint-disable-line import/no-named-as-default
import { history } from '../helpers';
import PrivateRoute from './common/PrivateRoute'



// const history = createBrowserHistory();
history.listen((location, action) => {
    // clear alert on location change
    //dispatch(alertActions.clear());
});

const App = () => {
    return (
        <div >
            <Router history={history}>
                <div>

                    <HeaderNavContainer />

                    <Switch>                       
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={LoginPage} />
                        <PrivateRoute exact path="/courses" component={CourseListContainer} />
                        <PrivateRoute exact path="/course" component={AddOrEditCourseContainer} />
                        <PrivateRoute path="/course/:id" component={AddOrEditCourseContainer} />
                        <Route path="/about" component={About} />
                        <Route component={PageNotFound} />
                    </Switch>

                </div>

            </Router>
        </div>
    );
};


export default App;