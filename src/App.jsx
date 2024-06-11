import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./screens/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./screens/Auth/Login";




function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Login />
      <Footer />
    </div>
  );

  
}

export default App;
