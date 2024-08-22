import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './homepages/Manifest.jsx'

import Kaltsit from './operators/kaltsit.jsx'
import Amiya from './operators/amiya.jsx'
import Mlynar from './operators/mlynar.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />}></Route>
        <Route path='/arkbutts/' element={<Main />}></Route>
        <Route path='/arkbutts/kaltsit' element={<Kaltsit />}></Route>
        <Route path='/arkbutts/amiya' element={<Amiya />}></Route>
        <Route path='/arkbutts/mlynar' element={<Mlynar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
