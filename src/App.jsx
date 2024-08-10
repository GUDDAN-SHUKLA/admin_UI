import './App.css'
import Dashboard from './pages/Dashboard'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <div className='w-full h-auto bg-gradient-to-r from-gray-500 to-emerald-700'>
      < Dashboard />
      <ToastContainer autoClose={1000} />
      
    </div>
  )
}

export default App