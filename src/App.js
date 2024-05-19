import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';


/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

function App() {


  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}



export default App;
