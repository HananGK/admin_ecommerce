import Navbar from './Components/Navbar/Navbar'
import { RouterProvider } from 'react-router-dom'
import {router} from './Pages/Admin/Admin'




const App = () => {
  return(
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App

