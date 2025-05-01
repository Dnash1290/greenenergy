import axios from "axios"
import "./Login.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Login(e){
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const navigate = useNavigate()
    const [Error, setError] = useState("")

    function login_form(e){
        e.preventDefault()
        const ENDPOINT = "https://rolsa-technologies-backend-iycg.onrender.com/auth/login"
        let payload ={
            username: Username,
            password: Password
        }
        axios.post(ENDPOINT, payload)
        .then(response=>{
            // alert(JSON.stringify(response))   
            localStorage.setItem("token", JSON.stringify(response.data))      
            navigate("/userdashboard")
        })
        .catch(error=>{
            setError(error?.response?.data?.detail) 
        })
    }

    return(
    <section>
        <div className="login-flex">
            <img src="https://img.freepik.com/free-vector/save-earth-concept-illustration_114360-8593.jpg?t=st=1743094479~exp=1743098079~hmac=2d089b6ad7e375cd557492fb17b61af8f8fdb1a50e633127e2434dd14bfe8eea&w=740" />
            <div className="login-container">
                <h1>LOGO</h1>  {/* login form*/}
                <h2>Login details</h2>
                <p style={{color: "red"}}>{Error}</p>
                <form onSubmit={(e)=>login_form(e)}>
                    <input placeholder="  Username" value={Username}
                     onChange={(e)=> setUsername(e.target.value)}
                     maxLength={10} minLength={3} type="text" 
                     required/>

                    <input placeholder="  Password" value={Password}
                     onChange={(e) => setPassword(e.target.value)}
                     type="password" 
                     required/>
                     <button> Login</button>
                </form>
                <Link to="/auth/register">Need a new account?</Link>
                <Link to="/auth/forgotpassword">Forgot your password?</Link>
            </div>
        </div>
    </section>
    )
}
