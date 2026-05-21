import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Main from './MainPage/Main';
import Footer from './Footer/Footer';
import ScrollToTop from './component/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      
      <ScrollToTop/>
      <nav><Navbar /></nav>
      <main><Main /></main>
      <footer><Footer /></footer>
    </BrowserRouter>
  );
}

export default App;