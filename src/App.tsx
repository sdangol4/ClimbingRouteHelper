import NavBar from './Components/NavBar.js';
import './App.css'
import LogIn from './Components/LogIn.js';


function App() {

  return (
    <div className='App'>
     <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balanc'
     >Climbing Wall Helper</h1>
      <NavBar />
    <LogIn />
    </div>
  )
}

export default App
