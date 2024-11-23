import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/Signup";
import Home from "./pages/home";
import Booklist from "./Components/booklist";
import Bookdetails from "./Components/Bookdetails";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/booklist" element={<Booklist/>} />
        <Route path="/book/:id" element={<Bookdetails />} />
      </Routes>
    </Router>
  );
};

export default App;
