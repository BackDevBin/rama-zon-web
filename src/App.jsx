import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import Order from './components/Order/Order'


function App() {
  

  return (
    <div className="App">
     <Header></Header>
     <Outlet></Outlet>
    </div>
  )
}

export default App
