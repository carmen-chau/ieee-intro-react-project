import React from "react";
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import './App.css';
import IntroPage from './IntroPage.js';
import Contact from './Contact.js'
import Message from './Message.js'

function PageUrl({urlLink}) { //function to display the URL of the page
    return <p>The url for this page: {urlLink}</p>
}

function HomepageTitle({name}) { // function to display homepage title
    return <h1>{name}'s personal website</h1>;
}

function Greetings({name}) { //function to display homepage greeting message
    return <h2>Hello! Welcome to {name}'s home, please select your action</h2>
}

export default function App() {
    return (
        <div>
            <PageUrl urlLink="http://ieee.utoronto.ca/intro"/>
            <HomepageTitle name="Carmen"/>
            <Greetings name="Carmen"/>
            <BrowserRouter>
                {/*From lines 28 - 36, using React Router, if the link is actively in use, assign it to class "link-active". Else, it is under class "link" */}
                <NavLink className={({isActive}) => (isActive ? "link-active" : "link")} to="/introduction"><h3>1. my
                    introduction</h3>
                </NavLink>
                <NavLink className={({isActive}) => (isActive ? "link-active" : "link")} to="/contact"><h3>2. my
                    contact</h3>
                </NavLink>
                <NavLink className={({isActive}) => (isActive ? "link-active" : "link")} to="/message"><h3>3. Send a
                    message</h3>
                </NavLink>
                <Routes>
                    <Route path="/introduction" element={
                        <IntroPage/>}/> {/*Rendering the page with filename IntroPage.js on path "introduction"*/}
                </Routes>
                <Routes>
                    <Route path="/contact"
                           element={<Contact/>}/> {/*Rendering the page with filename Contact.js on path "contact"*/}
                </Routes>
                <Routes>
                    <Route path="/message"
                           element={<Message/>}/> {/*Rendering the page with filename Message.js on path "message"*/}
                </Routes>
            </BrowserRouter>
        </div>
    );
}


