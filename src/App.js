//import logo from './logo.svg';
import './App.scss';
import Layout from './components/Layout';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contact';
//import Resume from './components/resume';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout /> }>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      {/* <Route path='/resume' element={<Resume />} /> */}
      </Route>
    </Routes>
    </>
  );
}

export default App;
