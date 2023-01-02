import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../../Page/Home';
import Footer from './Footer/footer';
import Header from './Header/header';

function DefaultLayout({children}) {
    return (
       <>
            <Header/>
            <div className="body">
                {children}
            </div>
            <Footer/>
       </>
    );
}

export default DefaultLayout;