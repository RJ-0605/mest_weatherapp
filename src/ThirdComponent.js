 
 import React , { useState }from 'react';
 import './NewCssApp.css';
 import './Arrangeapp.css';
 


  export default function ThirdComponent() {

 	const [username, setUsername]=useState("");
 	const [email, setEmail]=useState("");
 	const [password, setPassword]=useState("");
 	


 	return (
 		<div className="rightcolumn bg-transparent ">
 
                
                 
   			<div className=" container d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Sign In</h3>
            </div>
            <div className="card-body">
                  <form style={{padding: 21}}>
                    <div className="">
                    <label>Username</label>
                      <input type="text" className="form-control" placeholder="username"/>
                      
                    </div>
                    <div className="">
                      <label >Password</label>
                      <input type="password" className="form-control" placeholder="password"/>
                    </div>
                     <br/>
                    <div className="row align-items-center ">
                      <input type="checkbox"/>Remember Me
                    </div>
                    <div className="form-group">
                      <input type="submit" value="Login" className="btn float-right login_btn"/>
                    </div>
                  </form>
            </div>
            
          </div>
        </div>
   			
 		</div>

 	);

 }

 