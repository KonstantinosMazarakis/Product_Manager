import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import Form from './components/Form';
import Products from './components/Products';
import OneProduct from './components/OneProduct';
import EditForm from './components/EditForm';

function App() {
  let [formSubmited,setFormSubmided] = useState(false)
  return (
      <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/">
      <Form formSubmited ={formSubmited} setFormSubmided = {setFormSubmided}></Form>
      <hr />
      <Products formSubmited ={formSubmited}></Products>
      </Route>
      <Route exact path="/details/:_id">
      <OneProduct></OneProduct>
      </Route>
      <Route exact path="/product/details/:_id">
        <EditForm formSubmited ={formSubmited} setFormSubmided = {setFormSubmided}></EditForm>
      </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
