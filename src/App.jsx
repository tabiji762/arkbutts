import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Home from './home/home.jsx'

import Kaltsit from './operators/kaltsit.jsx'
import Amiya from './operators/amiya.jsx'
import Mlynar from './operators/mlynar.jsx'

import Kroos from './operators/kroos.jsx'
import Fang from './operators/fang.jsx'
import Beagle from './operators/beagle.jsx'
import Lava from './operators/lava.jsx'
import Hibiscus from './operators/hibiscus.jsx'
import Hibiscus2 from './operators/hibiscus2.jsx'
import Kroos2 from './operators/kroos2.jsx'
import Lava2 from './operators/lava2.jsx'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/kaltsit' element={<Kaltsit />}/>
        <Route path='/amiya' element={<Amiya />}/>
        <Route path='/mlynar' element={<Mlynar />}/>

        <Route path='/kroos' element={<Kroos />}/>
        <Route path='/kroos2'element={<Kroos2 />}/>
        <Route path='/fang' element={<Fang />}/>
        <Route path='/beagle' element={<Beagle />}/>
        <Route path='/lava' element={<Lava />}/>
        <Route path='/lava2' element={<Lava2 />}/>
        <Route path='/hibiscus' element={<Hibiscus />}/>
        <Route path='/hibiscus2' element={<Hibiscus2 />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
