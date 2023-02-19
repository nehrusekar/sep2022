
import Food from './componand/data/food-data';
import Home from './componand/Homepage/navbar';
import SlideImage from './componand/slide/slideimage';
import { BrowserRouter,Switch,Route,Link } from 'react-router-dom';
// import LOG from './componand/Login/Login';
// import Register from './componand/my first pages/Register';

function App() {
  return (

    <div>
      <BrowserRouter>
     <Switch>
      <Route path='/Register'>Register</Route>
      <Route path='/Login'>Login</Route>
      
     </Switch>
    </BrowserRouter>
      {/* <Register/>  */}
      {/* <LOG/> */}
      <Home/> 
      <SlideImage/> 
      <Food/>

    </div>


  );
}

export default App;
