import { data, Link, useNavigate } from "react-router-dom"
import "./Register.css"
import { use, useState } from "react"
import axios from "axios"

export default function Register(){
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [Fname, setFname] = useState("")
    const [Surname, Setsurname] = useState("")
    const [Error, setError] = useState("")

    const Navigate = useNavigate()

    function register_form(){
        let payload ={
            username: Username,
            password: Password,
            name: Fname,
            surname: Surname,      
        }

       axios.post("https://rolsa-technologies-backend-iycg.onrender.com/auth/register", payload)
       .then(
            response=>{alert(JSON.stringify(response))
            navigator("/auth/login")
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
        register_form()
    }


    return(
        <section>
        <div className="login-flex">
            <img src="https://img.freepik.com/free-vector/save-earth-concept-illustration_114360-8593.jpg?t=st=1743094479~exp=1743098079~hmac=2d089b6ad7e375cd557492fb17b61af8f8fdb1a50e633127e2434dd14bfe8eea&w=740" />
            <div className="login-container">
                <h1>LOGO</h1>
                <h2 style={{marginRight:"140px"}}>Registration details</h2>
                <p style={{color: "red"}}>{Error}</p>
                <form onSubmit={(e)=>check_form(e)}>
                    <input placeholder="  Username" value={Username}
                    onChange={(e) => setUsername(e.target.value)} 
                    maxLength={10} minLength={3} required/>

                    <input placeholder="  Name" value={Fname}
                    onChange={(e)=> setFname(e.target.value)} 
                    maxLength={15} minLength={3} type="name"
                    pattern="[A-Za-z]+" /* Only allows letters */required
                    title="please enter letters only"/>

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

                    <button>Register</button>
                </form>
                <Link to="/auth/login">Already have a account?</Link>
                <Link to="/auth/forgotpassword">Forgot password?</Link>
            </div>

        </div>
        </section>
    )
}
