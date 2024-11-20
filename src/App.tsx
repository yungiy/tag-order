import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Tos from './pages/tos';
import PersonalInfo from './pages/personalInfo';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tos' element={<Tos/>}/>
      <Route path='/personal-info' element={<PersonalInfo/>}/>
    </Routes>
  );
}