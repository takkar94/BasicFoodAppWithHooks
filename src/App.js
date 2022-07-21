import { Fragment } from "react/cjs/react.production.min";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
