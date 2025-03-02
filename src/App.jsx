import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Module from './components/Module';
import Video from './components/Video';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {



  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mod/:id' element={<Module />} />
        <Route path='/vid/:id' element={<Video />} />
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
