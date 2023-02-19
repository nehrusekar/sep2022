import React from "react";
import './navbar.css';




function Home() {
    return (
        <div id="navbar">
            <div id="logo">
                <img id="img-0" src="https://st.depositphotos.com/1026166/3160/v/600/depositphotos_31605339-stock-illustration-restaurant-food-quality-badge.jpg" width={"40px"}></img>
            </div>
            <div id="navitem">
                <input type="text" id="input"></input>
                <button>search</button>

            </div>
            <div id="cart">
                <img id="img-1" src="https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg"></img>
                {/* <button id="d-btn">click</button> */}
            </div>
            <div id="profile">
                <img id="img-2" src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"></img>
            </div>
            <div id="setting">
                <img id="img-3" src="https://cdn5.vectorstock.com/i/1000x1000/26/59/gear-setting-logo-icon-vector-24042659.jpg" width="40px"></img>
            </div>

                 
        </div>


    )

}
export default Home