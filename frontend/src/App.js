import { Routes, Route } from 'react-router-dom';
import './App.css';
import ServiceDetails from './components/serviceDetails';
import ServicesList from './components/services-list';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' exact element={<ServicesList />} />
        <Route path='/:id/details' element={<ServiceDetails />} />
      </Routes>
    </div>
  );
}

export default App;
