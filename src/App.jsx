import { useState } from 'react';
import RegForm from './components/Reg/RegForm';
import EverythingIsDisplayedHere from './components/NotReg/EverythingIsDisplayedHere';
import "./App.css"

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const [data, setData] = useState(false)

  return (
    <div className='App'>
       {user?<EverythingIsDisplayedHere/>:<RegForm user={user} setUser={setUser} data = {data} setData = {setData}/>}
    </div>

  );
}

export default App;