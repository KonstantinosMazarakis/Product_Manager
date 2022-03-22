import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Form from './components/Form';
import Products from './components/Products';
import OneProduct from './components/OneProduct';


function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/">
      <Form></Form>
      <hr />
      <Products></Products>
      </Route>
      <Route exact path="/details/:_id">
      <OneProduct></OneProduct>
      </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
