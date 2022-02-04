import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Armado from './Armado';
import Buscadas from './Buscadas';
import Footer from './Footer/Footer';
import Navbar from './Navbar';
import Premium from './Premium';
import Slider from './Slider';
import RestoProvider from './Store/appContext';

function App() {
  return (
    <>
    <RestoProvider>
    <Navbar/>
    <Slider/>  
    <Buscadas/>
    <Premium/>
    <Armado/>
    <Footer/>
    </RestoProvider>
    </>
  );
}

export default App;
