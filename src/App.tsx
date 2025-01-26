import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Info from './pages/Info'
// import Error404 from './pages/Error404'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/info' element={<Info />} />
        <Route path='/user/:id' element={<Shop />} />
        {/* <Route path='*' element={<Error404 />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
