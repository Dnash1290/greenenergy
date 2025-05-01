import { Link } from "react-router-dom"
import "./ForgotPassword.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function ForgotPassword(){
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [Surname, Setsurname] = useState("")
    const navigate = useNavigate()
    const [Error, setError] = useState("")

    function change_password(){
        const ENDPOINT = "https://rolsa-technologies-backend-iycg.onrender.com/auth/forgotpassword"
        let payload ={
            username: Username,
            password: Password,
            surname: Surname,      
        }
         axios.put(ENDPOINT, payload)
        .then(response=>{
            // alert(JSON.stringify(response))
            navigate("/auth/login")  
        })
        .catch(error=>{
            setError(error?.response?.data?.detail)
        })
    }    

    function check_form(e){
        e.preventDefault()
        if (confirmPassword !== Password){
            alert("the password did not match confirm password")
            return
        }
        change_password()
    }

    return(
        <section>
            <div className="login-flex">
            <img src="https://img.freepik.com/free-vector/save-earth-concept-illustration_114360-8593.jpg?t=st=1743094479~exp=1743098079~hmac=2d089b6ad7e375cd557492fb17b61af8f8fdb1a50e633127e2434dd14bfe8eea&w=740" />
            <div className="login-container">
                <h1>Logo</h1>
                <h2 style={{marginRight:"160px"}}>Change Password</h2>
                <p style={{color: "red"}}>{Error}</p>
                <form onSubmit={(e)=>check_form(e)}>
                    <input placeholder="  Username" value={Username}
                    onChange={(e) => setUsername(e.target.value)} 
                    maxLength={10} minLength={3} required/>

                    <input placeholder="  Surname" value={Surname}
                    onChange={(e) => Setsurname(e.target.value)} 
                    maxLength={15} minLength={3}
                    pattern="[A-Za-z]+" /* Only allows letters */
                    title="please enter letters only" required/>

                    <input placeholder="  password" value={Password}
                    onChange={(e) => setPassword(e.target.value)} 
                    maxLength={15} minLength={6} type="password" required/>

                    <input placeholder="  Confirm Password" value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    maxLength={15} minLength={3} type="password" required/>  
                    <button>Change Password</button>
                </form>   
                <Link to="/auth/register">Need a new account?</Link>
                <Link to="/auth/login">Already have an account?</Link>               
            </div>
            </div>
        </section>
    )
}
