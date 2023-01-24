import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import axios from "axios";
import { login,register } from "../actions/userActions";
import { useDispatch } from "react-redux";
import config from "../config.json"
const clientId=config.GOOGLE_CLIENT_ID

function Login() {
      
  const dispatch = useDispatch()

  async function check(email,name,password) {
    const {data} = await axios.get(`/api/users/googleauth/${email}`)
    // console.log(data)
    if( data.isPresent){
      dispatch(login(email, password))
    }else{
      dispatch(register(name, email, password))
    }
  }

 return (
    <div>
    <GoogleLogin
    onSuccess= {credentialResponse => {
    // console.log(credentialResponse.credential);
    var decoded = jwt_decode(credentialResponse.credential);
    // console.log(decoded)
    const {name ,email} =decoded;
    // console.log(name)
    const password= config.AUTH_PASSWORD; 
    
    check(email,name,password)
    
  
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>

    </div>
  );
}

export default Login;