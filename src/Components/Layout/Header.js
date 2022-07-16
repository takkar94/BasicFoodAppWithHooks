import React from "react";
import mealsImg from '../../Assets/meals.jpg'

const Header = (props) => {
    return (
        <React.Fragment>
            <header>
                <h1>Meals Prep</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src= {mealsImg}/>
            </div>
        </React.Fragment>
    )    
}

export default Header;