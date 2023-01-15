import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Vendor from "./routes/Vendor/Vendor"
import Client from "./routes/Client/Client"


function App () {

  return (
    <div className="gridContainer">
      <Router>
        <Routes>
          <Route path="/" element={<Vendor></Vendor>}/>
          <Route path="/client" element={<Client></Client>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;