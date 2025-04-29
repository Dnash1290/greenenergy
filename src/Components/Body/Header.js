import { Link } from "react-router-dom"
import "./Header.css"
import Acc from "../../Assets/Images/accessibility.png"
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

export default function Header(){
    const [accessibility, setAccessibility] = useState(
        JSON.parse(localStorage.getItem("accessibility")) || false
    );
    const handleAccessibility = () => { 
        setAccessibility(prev => {
            const newValue = !prev;
            localStorage.setItem("accessibility", JSON.stringify(newValue)); 
            if (newValue) {
                document.documentElement.classList.add("high-contrast");
            } else {
                document.documentElement.classList.remove("high-contrast");
            }
            return newValue;
        });
    }

    return(
        <header>
            <Link to="/"><h1>Rolso Technologies</h1></Link>
            <div className="header-links">
               <ScrollLink to="contacts" smooth={true} duration={500}><p className="header-link">Contacts</p></ScrollLink>
               <Link to="/ourMission"><p className="header-link">Our Misson</p></Link>
               <Link to="/auth/register"><p className="header-link">Register</p></Link>
               <Link to="/auth/login"><p className="login-link">Login</p></Link>
               <button onClick={()=>handleAccessibility()}><img src={Acc} style={{height:"35px"}} /></button>
            </div>
        </header>
    )
}