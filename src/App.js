//import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
// npm start
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Content />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
