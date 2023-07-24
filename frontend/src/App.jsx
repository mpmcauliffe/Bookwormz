import { useEffect, } from 'react'
import { Route, Routes,
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
                    <Routes>
                        <Route
                            exact
                            path='/'
                            element={<Landing />} />

                        <Route
                            exact
                            path='/userauth'
                            element={<UserAuth />} />

                        <SecureRoute 
                            exact
                            path='/dashboard'
                            element={<Dashboard />} />

                        <SecureRoute
                            exact
                            path='/books'
                            element={<Books />} />

                        <SecureRoute
                            exact
                            path='/clubs'
                            element={<Clubs />} />
                        
                        <SecureRoute
                            exact
                            path='/createclub'
                            element={<CreateClub />} />

                        <SecureRoute
                            exact
                            path='/club/:clubId'
                            element={<ClubPage />} />

                        <SecureRoute
                            exact
                            path='/useraccount'
                            element={<UserAccount />} />
                    </Routes>
                </AnimatePresence>
                <AnchorButton />
            </Router>
    );
}

export default App;
