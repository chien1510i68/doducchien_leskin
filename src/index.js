import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './Reduxmodules';
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Home from './Page/Home';
import Contact from './Page/Contact';
import Introduce from './Page/Introduce';
import News from './Page/News';
import LienHe from './Page/Lienhe';
import CartShop from './Page/CartShop';
import Datlich from './Page/Datlich';
import Admin from './Page/Admin';
import Dichvu from './Page/Dichvu';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer);
const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children :[
      {
        path : "/",
        element : <Home/>,
      },
      
      {

      },
      {
        path : "/service/:id",
        element : <Contact/>
      },
      {
        path : "/service",
        element : <Dichvu/>
      },
      {
        path : "/product",
        element : <Introduce/>
      },
      {
        path : "/new",
        element : <News/>
      },
      {
        path : "/contact",
        element : <LienHe/>
      },
      {
        path : "/cart",
        element : <CartShop/>
      },
      {
        path : "/datlich",
        element : <Datlich/>
      },
      {
        path : "/admin" ,
        element :<Admin/>
      }
      
    ]
  },
 
])
root.render(
  <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
