import { useEffect, } from 'react'
import { Route, Switch, 
    BrowserRouter as Router, } from 'react-router-dom'
import { AnimatePresence, } from 'framer-motion'
import './App.css';

import { Books, Dashboard, Clubs, Landing, 
    UserAuth, UserAccount, 
    ClubPage, CreateClub, } from './pages'
import { AnchorButton, MessageBoard, Navbar, 
        SecureRoute, } from './components'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
        
        
function App() {

    return (
        <Router>
                <Navbar />
                {/*  */}
                <MessageBoard />
                <AnimatePresence exitBeforeEnter>
                    <Switch>
                        <Route
                            exact
                            path='/'
                            component={Landing} />

                        <Route
                            exact
                            path='/userauth'
                            component={UserAuth} />

                        <SecureRoute 
                            exact
                            path='/dashboard'
                            component={Dashboard} />

                        <SecureRoute
                            exact
                            path='/books'
                            component={Books} />

                        <SecureRoute
                            exact
                            path='/clubs'
                            component={Clubs} />
                        
                        <SecureRoute
                            exact
                            path='/createclub'
                            component={CreateClub} />

                        <SecureRoute
                            exact
                            path='/club/:clubId'
                            component={ClubPage} />

                        <SecureRoute
                            exact
                            path='/useraccount'
                            component={UserAccount} />
                    </Switch>
                </AnimatePresence>
                <AnchorButton />
            </Router>
    );
}

export default App;
