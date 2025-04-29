import "./UserProfile.css";

export default function UserProfile(userData) {
    let user = JSON.parse(localStorage.getItem("token"));
    return(
        <div className="user-profile-container">
            <div className="user-profile">
                <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"></img>
                <h2>{user.username}</h2>
            </div>
            <p>Name: {user.name}</p>
            <p>surname: {user.surname}</p>
            <p>cus No: 4593086</p>
        </div>
    )
}