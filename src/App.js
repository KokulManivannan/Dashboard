import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./app.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="in-container">
          <Header />
          <div className="child-container">
            <Component1 className="child-container1" />
            <Component2 className="child-container2" />
          </div>
        </div>
      </div>

      {/* Hello World ! */}
    </div>
  );
}

export default App;
