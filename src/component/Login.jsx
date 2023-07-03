import React, {useState} from "react";
import "./login.css";
import facebook from "./image/facebook.svg";
import Signup from "./Signup";

function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [openModal, setOpenModal] = useState(false)
    
   
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    
    const  toggleModal= () => {
      setOpenModal(!openModal)
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        
    }

    return( 
<section className="section">
 <div className="facebook"> 
 <div className="face"> 
<div>
<img src={facebook} alt="facebook" />
<h2>Facebook helps you connect and share <br></br>with the people in your life.</h2>
</div>
<div className="first"> 
 <div className="second">
<div>
<form onSubmit={onSubmit} />
<input className="email" type= "email"
value={email}
placeholder="Email address or phone number"
onChange={onChangeEmail}
/>
</div>
<div>
<input className="password" type= "password"
value={password}
placeholder="Password"

onChange={onChangePassword}
/>
</div>


<div className="login"> 
 <a href="Login ?" className= "link">Login</a>
   </div>  
<div> 
<a className="forget" href="Forget passsword ?">Forget passsword?</a>
</div>
<hr></hr>
  <div>
<button className="create"><p onClick={toggleModal}>Create new account</p></button>
  <Signup  isOpen= {openModal} toggle={toggleModal} /> 
    </div>           
    
  {<Signup onSave={Signup} /> }
  </div>
  <div className="save">
<p>Create a Page  for a celebrity, brand or business.</p>
</div>
  </div>

</div>
</div>
 </section>

  

);
}
 
 export default Login;