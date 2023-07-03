import React, {useState} from "react";
import Modal from 'react-modal'
import "./signup.css";


function Signup ({isOpen,toggle}) {
    const [firstName, setFirstName] = useState("");
    const [Surname, setSurname] = useState("");
    const [mobile, setMobile] = useState("");
    const [newPassword, setNewPassword] = useState("");
    
    
    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
    };
    const onChangeSurname = (e) => {
        setSurname(e.target.value);
    };
    const onChangeMobile = (e) => {
        setMobile(e.target.value);
    };
    const onChangeNewPassword = (e) => {
        setNewPassword(e.target.value);
    };
    
    const onSubmit = (e) => {
        e.preventDefault()
    };
    
return(
    <Modal
    style={{
      overlay: {
        position: "fixed",
        top: "0%",
        left: "0%",
        right: "0%",
        bottom: "0%",
        backgroundColor: "#00000078",
        zIndex: 100,
      },
    }}
    className="modal"
    isOpen={isOpen}
    shouldCloseOnOverlayclick={true}
    onRequestClose={toggle}
    ariaHideApp={false}
  >
  <section className="sections" >
<div className="signup">
 <div> 
<h1>Sign Up</h1>
<p>It's quick and easy.</p>
</div>
<div className="toggle">
  <form onSubmit={onSubmit} />
<button onClick={toggle}>+</button>  
</div>
</div>
<hr></hr>
<div className="page">
<div className="faces"> 
<div className="firstclass"> 
<form onSubmit={onSubmit} />
<input className="firstName" type= "firstName"
value={firstName}
placeholder="First Name"
onChange={onChangeFirstName}
/>

<div>
<input className="surname" type= "surname"
value={Surname}
placeholder="Surname"

onChange={onChangeSurname}
/>
</div>
</div>
<div>
<input className="mobile" type= "mobile"
value={mobile}
placeholder="Mobile"

onChange={onChangeMobile}
/>
</div>
<div>
<input className="new" type= "newPassword"
value={newPassword}
placeholder="New Password"

onChange={onChangeNewPassword}
/>
</div>
<div className="dates">
    <div> 
   <p>Date of birth ?</p>
   </div>
   <div className="date">
   <div>
        <select className="form" id="Date of birth" name="Date of birth"> 
            <option>select day</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            
            </select> 
            </div>
            <div> 
            <select className="form" id="Date of birth" name="Date of birth"> 
            <option>select Month</option>
            <option value="JAN">JAN</option>
            <option value="FEB">FEB</option>
            <option value="MAR">MAR</option>
            <option value="APRIL">APRIL</option>
            <option value="MAY">MAY</option>
            <option value="JUN">JUN</option>
            <option value="JULY">JULY</option>
            <option value="AUG">AUG</option>
            <option value="SEP">SEP</option>
            <option value="OCT">OCT</option>
            <option value="NOV">NOV</option>
            <option value="DEC">DEC</option>
            </select> 
            </div>
            <div> 
            
            <select className="form" id="Date of birth" name="Date of birth"> 
            <option>select Year</option>
            <option value="202O">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
            <option value="2031">2031</option>
            <option value="2032">2032</option>
            </select> 
            
            </div>
            </div>
            </div>    
    
    <form action="action_page.hp">
    <div class="Gender">
      <div> 
      <p>Gender?</p>
      </div>
      <div className="gender"> 
      <div> 
      <button className="female">
      <label for="Female">Female</label><br></br>
      <input type="radio" id="detail" name="personal_details" value="Female"></input>
      </button>
      </div>
      <div>  
      <button className="male"> 
 <label for="Male">Male</label><br></br>
 <input type="radio" id="detail" name="personal_details" value="Male"></input>

 </button>
 </div>
 <div> 
        <button className="custom"> 
       <label for="Custom">Custom</label><br></br>
       <input type="radio"id="detail" name="personal_details" value="Custom" ></input>
       </button>
       </div>
       </div>
       </div>
</form>
</div>
   <div>
    <p>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>

<p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.You may receive SMS notifications from us and can opt out at any time.</p>
   </div>
<div className="button"> 
   <buton ><a href="Sign Up ?">Sign Up</a></buton>
   </div>
</div>
</section>
</Modal>
);


 
}
export  default Signup;