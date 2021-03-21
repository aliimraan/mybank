import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/container/Login';
import Home from './components/container/Home';
import Register from './components/container/Register';
import {Route,Switch} from 'react-router-dom'
import PrivateRoute from './components/HOC/PrivateRoute';
import Deposite from './components/container/Deposite';
import Widthdraw from './components/container/Widthdraw';
import Banker from './components/container/Banker';
import PersonalData from './components/container/PersonalData';

const App=()=> {
  return (
    <div >
      <Switch>
        <PrivateRoute exact path="/" component={Home}/>
        <PrivateRoute path="/deposite" component={Deposite}/>
        <PrivateRoute path="/widthdraw" component={Widthdraw}/>
        <PrivateRoute path="/banker" component={Banker}/>
        <PrivateRoute path="/single/user/:id" component={PersonalData}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </div>
  );
}

export default App;
