import "./App.css";
import Header from "./Header";
import Sidebarr from "./Sidebarr";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
//BrowserRouter is the incharge of determining what url loads what component
// and to determine which router to look out we use Switch -> Routes
function App() {
  return (
    <div className="App">
      {/* <h1>Hello Clever Programmer, let's build youtube clone! 🚀</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/search/:searchTerm" element={<Search />}>
            
          </Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        {/* <h1>Hey! Clever programmer, let's build Google Clone 😊🚀!</h1> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
