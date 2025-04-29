import "./DisplayBooking.css";

export default function DisplayBooking({ bookingData }) {
    return(
        <div className="display-booking-container">
    
            <div className="booking-details">
                <div >
                    <div>Title {bookingData.reason}</div> <div><label>Time: {bookingData.time}</label><lable> Date: {bookingData.date}</lable></div>
                </div>
                <div>
                    <p>Project Manager: {bookingData.consultant}</p>
                    <p>Cost: £{bookingData.cost}</p>
                </div>
            </div>
        </div>
    )
}