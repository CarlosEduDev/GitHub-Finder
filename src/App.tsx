import {Outlet} from 'react-router-dom'

import classesCss from './App.module.css'

function App() {
  
  return (
    <div className={classesCss.app}> 
     <h1>GitHub Finder</h1>
     <Outlet/>
     
    </div>
  )
}

export default App
