import "./App.css";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Fragment } from "react";
import ResetPassword from "./pages/Auth/ResetPassword";
import Home from "./pages/Main/User/Home";
import Dashboard from "./pages/Main/Admin/Dashboard";
import AddTask from "./pages/Main/User/AddTask";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Route path="/" exact component={ Login } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/forgotpass" component={ ForgotPassword } />
        <Route path="/resetpass" component={ ResetPassword } />
        <Route path="/home" component={ Home } />
        <Route path="/dashboard" component={ Dashboard } />
        <Route path="/addTask" component={ AddTask } />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
