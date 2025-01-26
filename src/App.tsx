import { HashRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Info from './pages/Info'
// import Error404 from './pages/Error404'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='info' element={<Info />} />
          <Route path='user/:id' element={<Shop userPage />} />
          {/* <Route path='*' element={<Error404 />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
