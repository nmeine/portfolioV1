import React from 'react';
import Home from 'components/pages/home/Home';
import About from 'components/pages/about/About';
import Experience from 'components/pages/experience/Experience';
import Work from 'components/pages/work/Work';
import { BrowserRouter as Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Pages.scss';

function Pages({ location }) {
    return (
        <TransitionGroup>
            <CSSTransition classNames='fade' timeout={250} key={location.key}>
                <Switch location={location}>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact component={About} />
                    <Route path='/experience' exact component={Experience} />
                    <Route path='/work' exact component={Work} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default withRouter(Pages);