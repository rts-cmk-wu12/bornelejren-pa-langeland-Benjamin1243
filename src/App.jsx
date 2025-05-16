import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import routes from "~react-pages"

import { useRoutes } from "react-router";
import './styles/style.scss'
import Navbar from './components/NavBar';
function App() {
  const [count, setCount] = useState(0)
 

  return (
    
    <div id="wrapper">
    <Navbar></Navbar>
    {/*OBS!!! Useroutes skal være ned i app eller det der svarende til main*/}
        {useRoutes(routes)}
         </div>
  )
}

export default App
