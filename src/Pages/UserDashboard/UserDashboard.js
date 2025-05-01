import "./UserDashboard.css"
import UserProfile from "../../Components/UserProfile"
import { useState } from "react";
import { data } from "react-router-dom";
import DisplayBooking from "../../Components/Booking/DisplayBooking";
import axios from "axios";
import { useEffect } from "react";


export default function UserDashboard(){
    
    const [Reason, SetReason] = useState("");
    const [Date, SetDate] = useState("");
    const [Time, SetTime] = useState("");     
    const [BookingType, SetBookingType] = useState("");
    const tokenData = JSON.parse(localStorage.getItem("token"));
    console.log(tokenData.booking);
    const [BookingDataList, SetBookingDataList] = useState(tokenData.booking || "no booking yet");
    const ENDPOINT = "https://rolsa-technologies-backend-iycg.onrender.com/booking/booking"
    const ENDPOINT_get = "https://rolsa-technologies-backend-iycg.onrender.com/booking/getBooking"
    // console.log(reason, date, time, bookingType);
    let user = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
        axios.get(ENDPOINT_get, { params: { username: user.username } })
        .then(response=>{        
            console.log(response)
            SetBookingDataList(response.data.booking)
        })
        .catch(error=>{console.log(error);})
    },[])

    function handleBooking(e){
        
        e.preventDefault();   
        const bookingData = {
            username: user.username,
            reason: Reason,
            date: Date,
            time: Time,
            bookingType: BookingType
        }

        console.log(bookingData);
        
        axios.post(ENDPOINT, bookingData)
        .then(response=>{        
            console.log(response)
        })
        .catch(error=>{
        console.log(error);})

        axios.get(ENDPOINT_get, { params: { username: user.username } })
        .then(response=>{        
            console.log(response)
            SetBookingDataList(response.data.booking)
        })
    }
    
    let BookingData = {
        reason: "installing solor panels",
        date: "19/11/2050",
        time: "13:45",
        Consultant: "Mr jeff",
        cost: 3000
    }
    
    return(
    <>
        <section className="userdashboard-container-flex">
            <UserProfile/><h1>Welcome back, username
            Hope you are having a green day!!!</h1>
        </section>
            <h1 style={
                {textAlign:"center", background:"var(--green-pastel)"
                , padding:"20px", marginTop:"20px", borderRadius:"10px",
                }
                }>Looking to go green?</h1>

        <div className="activties-flex-container">
            <section className="events-container-flex">
                <div className="make-booking">
                <form onSubmit={(e)=>handleBooking(e)}>
                    <p style={{textAlign:"center"}}>enter booking here</p>
                    <input 
                        className="reason" placeholder="reason" 
                        onChange={(e)=>SetReason(e.target.value)} required
                        value={Reason} 
                        />

                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <input 
                            placeholder="DD/MM/YY" type="date" 
                            onChange={(e)=>SetDate(e.target.value)} required
                            value={Date}  />
                        <input 
                            placeholder="time" type="time" 
                            onChange={(e)=>SetTime(e.target.value)}required 
                            value={Time} />
                    </div>

                    <div style={{display:"flex", justifyContent:"center"}}>
                        <input type="radio" name="booking_type" value="Consultations" required
                        onChange={(e)=>SetBookingType(e.target.value)} /><label>Consultations</label>
                        <input 
                        type="radio" name="booking_type" value="Installation" required
                        onChange={(e)=>SetBookingType(e.target.value)}
                        /><label>Installation</label>
                    </div>
                    <button type="submit" className="btn">Confirm booking</button>
                </form>
                </div>
            </section>
            <section >
            <h2>Upcoming Meetings</h2>
                <div className="DisplayBooking-container">

                {BookingDataList ? 
                    BookingDataList.map((index)=>{
                    return(
                        <DisplayBooking key={index} bookingData={index}/>
                    )
                }
                ) : "loading"}
                {/* <DisplayBooking bookingData={BookingData}/> */}
                </div>
                
            </section>
        </div>
    </>
    )
}
