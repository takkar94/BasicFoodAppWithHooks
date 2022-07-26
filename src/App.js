import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }


  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <main>
        <Meals onHideCart = {hideCartHandler}/>
      </main>
    </Fragment>
  );
}

export default App;
