import { useEffect, } from 'react';
import { Route, Routes,
    BrowserRouter as Router, } from 'react-router-dom';
import { AnimatePresence, } from 'framer-motion';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store/store';

import { Books, Dashboard, Clubs, Landing, 
    UserAuth, UserAccount, 
    ClubPage, CreateClub, } from './pages';
import { AnchorButton, MessageBoard, Navbar, 
        SecureRoute, } from './components';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
        
        
function App() {
    useEffect(() => { M.AutoInit(); }, [  ]);


    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                {/*  */}
                <MessageBoard />
                <AnimatePresence mode='wait'>
                    <Routes>
                        <Route
                            exact
                            path='/'
                            element={<Landing />} />

                        <Route
                            exact
                            path='/userauth'
                            element={<UserAuth />} />
                            

                            {/* <Route 
                        path='/profile'
                        element={<PrivateRTE />}>
                            <Route 
                                path='/profile'
                                element={<Profile />} />
                    </Route>     */}

                        <Route 
                            exact
                            path='/dashboard'
                            element={<SecureRoute />}>
                            <Route
                                exact
                                path='/dashboard'
                                element={<Dashboard />} />
                        </Route>

                        <Route 
                            exact
                            path='/books'
                            element={<SecureRoute />}>
                            <Route
                                exact
                                path='/books'
                                element={<Books />} />
                        </Route>
                    
                        <Route 
                            exact
                            path='/clubs'
                            element={<SecureRoute />}>
                            <Route
                                exact
                                path='/clubs'
                                element={<Clubs />} />
                        </Route>

                        <Route 
                            exact
                            path='/createclub'
                            element={<SecureRoute />}>
                            <Route
                                exact
                                path='/createclub'
                                element={<CreateClub />} />
                        </Route>
                        
                        <Route 
                            exact
                            path='/club/:clubId'
                            element={<SecureRoute />}>
                            <Route
                                exact
                                path='/club/:clubId'
                                element={<ClubPage />} />
                        </Route>

                        <Route 
                            exact
                            path='/useraccount'
                            element={<SecureRoute />}>
                            <Route
                                exact
                                path='/useraccount'
                                element={<UserAccount />} />
                        </Route>
                    </Routes>
                </AnimatePresence>
                <AnchorButton />
            </Router>
        </Provider>
       
    );
}

export default App;
