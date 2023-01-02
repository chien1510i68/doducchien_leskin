import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Home from './Page/Home';
import DefaultLayout from './Layout/DefaultLayout';
import { BrowserRouter as Router, Outlet, Route, Routes} from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Contact from './Page/Contact';
import Introduce from './Page/Introduce';
import News from './Page/News';
import LienHe from './Page/Lienhe';
import CartShop from './Page/CartShop';
import Header from './Layout/DefaultLayout/Header/header';
import Footer from './Layout/DefaultLayout/Footer/footer';

function App() {
  return (
//     <Router>
//     <div className="App">
//       <Routes>
//           <Route path="/" element=
//           {
//           <DefaultLayout>
//             <Home/>
//           </DefaultLayout>
          
//           }/>
//           <Route path="/product" element=
//           {
//           <DefaultLayout>
//             <Contact/>
//           </DefaultLayout>
//           }/>
//           <Route path="/introduce" element=
//           {
//           <DefaultLayout>
//             <Introduce/>
//           </DefaultLayout>
//           }/>
//           <Route path="/new" element=
//           {
//           <DefaultLayout>
//             <News/>
//           </DefaultLayout>
//           }/>
//           <Route path="/contact" element=
//           {
//           <DefaultLayout>
//             <LienHe/>
//           </DefaultLayout>
//           }/>
//           <Route path="/cart" element=
//           {
//           <DefaultLayout>
//             <CartShop/>
//           </DefaultLayout>
//           }/>
          
//       </Routes>
     

//     </div>

// </Router>
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>



          
)}
export default App;
// const mapStateToProps = (state) => ({
//   vouchers : state.Vouchers
// });
// export default connect(mapStateToProps)(App);
