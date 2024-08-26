import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/home.jsx'

import Kaltsit from './operators/kaltsit.jsx'
import Amiya from './operators/amiya.jsx'
import Mlynar from './operators/mlynar.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/arkbutts/' element={<Home />}></Route>
        <Route path='/arkbutts/kaltsit' element={<Kaltsit />}></Route>
        <Route path='/arkbutts/amiya' element={<Amiya />}></Route>
        <Route path='/arkbutts/mlynar' element={<Mlynar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
