import{ Routes ,Route} from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./pages/Homepage";

function App() {
  return (
    <Routes> 
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
    
  );
}

export default App;
