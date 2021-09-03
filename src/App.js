import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/PartialsComponent/Header";
import Footer from "./components/PartialsComponent/Footer";
import Home from "./pages/main/Home";
import AddTask from "./pages/main/AddTask";
import Sidebar from "./components/PartialsComponent/Sidebar";
import Js from "./components/PartialsComponent/Js";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

function App() {
  return (
    <Router>
      {/* <div>
        <Login />
      </div> */}
      <div class="nav-fixed">
        <Header />
        <div id="layoutSidenav">
          <Sidebar />
          <div id="layoutSidenav_content">
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/addTask" component={AddTask} />
            </Switch>
            <Footer />
          </div>
        </div>
        <Js />
      </div>
    </Router>
  );
}

export default App;
