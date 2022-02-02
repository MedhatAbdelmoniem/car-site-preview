import './App.css';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/home/home.component';
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'
import Shop from './pages/shop/shop.component'

const App = ()=>(
  <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/shop'>
          <Shop />
        </Route>
      </Switch>
      <hr/>
      <Footer />
  </div>

)

export default App;
