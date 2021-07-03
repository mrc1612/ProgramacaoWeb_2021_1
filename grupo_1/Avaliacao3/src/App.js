import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cookie from "js-cookie";

import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';
import SignIn from '../src/components/SignIn/SignIn';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductManagement from './screens/ProductManagement';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import EditProfileScreen from "./screens/EditProfileScreen";
import MultimediaScreen from './screens/MultimediaScreen'

export default function App() {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        if(Cookie.get("custom")) {
            setTheme("custom");
        } else {
            setTheme("");
        }
        return () => {
        }
    }, [])
    return (
            <Router>
                <Navbar theme={theme}/>
                <Switch>
                    <Route path="/" exact component={HomeScreen}/>
                    <Route path="/produtos" exact component={ProductScreen}/>
                    <Route path="/criarproduto" exact component={ProductManagement}/>
                    <Route path="/criarproduto/:id" exact component={ProductManagement}/>
                    <Route path="/sobre" exact component={AboutScreen}/>
                    <Route path="/contato" exact component={ContactScreen}/>
                    <Route path="/multimedia" exact component={MultimediaScreen}/>
                    <Route exact path="/profile" component={EditProfileScreen}/>
                    <Route path="/login" exact component={SignIn}/>
                </Switch>
                <Footer theme={theme}/>
            </Router>
    );
}
