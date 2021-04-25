import React,{useEffect,useState} from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from "axios";
import { login,register } from "../actions/userActions";
import { useDispatch } from "react-redux";

//'641909577010-h792ei2m2sc1ku021ami01smkh8hcs0e.apps.googleusercontent.com';
const {data: clientId} =  axios.get('/api/config/google');

function Login() {
  //  const [clientId, setClientId]=useState("")

   const dispatch = useDispatch()
   console.log(clientId)

  //  useEffect(() => {
  //   const fetchId = async () => {
  //     const {data} = await axios.get('/api/config/google');
  //     setClientId(data)
  //     console.log("clientId  ")
  //     console.log(clientId)
  //     }
  //     fetchId()
     
  // })
 

  const onSuccess = async (res) => {
    const user= res.profileObj;
    const {name ,email} =user;
     const password= "12345"; 
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