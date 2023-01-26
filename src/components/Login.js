import React from "react";

const Login=()=>{
    return(
        <div>
            <h1>Login</h1>
            <h5>or <span className="text-[#FC8019]">create an account</span></h5>
            <img src="	https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" width="100px" height="105px"/>
            <form>
                <div>
                    <input type="tel" name="mobile" id="mobile" value/>
                    <label for="mobile">Phone Number</label>
                </div>
                <div>
                    <input type="submit" className="bg-[#FC8019] text-white">LOGIN</input>
                </div>
            </form>
        </div>
    )
}

export default Login;