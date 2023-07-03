import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/Login.jsx';
import Signup from './component/Signup.jsx';

function App(){
return(
  <BrowserRouter>
  <Routes>
    <Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
    </Route>
  </Routes>
  </BrowserRouter>
)

}
export default App;