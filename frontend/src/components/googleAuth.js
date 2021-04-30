import React,{useState} from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from "axios";
import { login,register } from "../actions/userActions";
import { useDispatch } from "react-redux";
import config from "../config.json"


const clientId=config.GOOGLE_CLIENT_ID

function Login() {
      
  const dispatch = useDispatch()
  
  
    const onSuccess = async (res) => {
    const user= res.profileObj;
    const {name ,email} =user;
     const password= config.AUTH_PASSWORD; 
     const {data} = await axios.get(`/api/users/${email}`)
     console.log("data");
     console.log(data);
    if( data.isPresent){
      dispatch(login(email, password))
    }else{
      dispatch(register(name, email, password))
    }
     };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
   };

  return (
    <div>
       <GoogleLogin
        clientId={clientId}
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
        )}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;