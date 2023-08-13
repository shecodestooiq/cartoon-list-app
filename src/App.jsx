import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './styles.css'
import CartoonsList from './components/CartoonsList';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <CartoonsList />
    </>
  );
}

export default App;
