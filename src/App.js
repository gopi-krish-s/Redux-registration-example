
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
