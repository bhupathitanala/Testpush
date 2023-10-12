import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
// import Regform from './components/Regform';
// import LoginInfo from './components/LoginInfo';
// import Content from './components/Content';
// import context from 'react-bootstrap/esm/AccordionContext';
import Home from './components/Home';
import Shorts from './components/Shorts';
import { useState } from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Hooks from './components/Hooks';
import { createContext } from 'react';
import Conexpo from './components/Conexpo';
import axios from 'axios';
import Axios from './components/Axios';
import { useDispatch } from 'react-redux';
import { incrementByAmount } from './redux/slices/counterSlice';
import { User } from './components/Users';
import { Add } from './components/Adduser';
export const store = createContext();



function App() {
const dispatch = useDispatch()
  let Students = [{
  name:"bhupathi",
  age:25
},
{
  name:"narasimha",
  age:24
}
]
const [data, setData] = useState(Students)
return(
<>
  {/* <button onClick={()=>dispatch(incrementByAmount(10))}> incre by 10 </button> */}
<BrowserRouter>
{/* <store.Provider value={[data, setData]}> */}
<div className='row'>

{/* <Sidebar/> */}
<User/>
{/* <Add/> */}
{/* <Axios/> */}
{/* <Content/> */}
{/* <Hooks/> */}
 <Routes>
 <Route path="/" element={<Sidebar/>}></Route>
   <Route path="/Shorts" element={<Shorts/>}></Route>
 </Routes>
 {/* <Conexpo/> */}
</div>
{/* </store.Provider> */}
</BrowserRouter>
</>

)

}

export default App;
