import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import UserContext from "./utils/UserContex";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

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
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Sarthak Naphade",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
