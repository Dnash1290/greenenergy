import "./Home.css"
import HomeBanner from "../../Assets/Banners/HomeBanner.jpg"
import GreenProduct from "../../Components/GreenProduct"
import SolarPanel from "../../Assets/Images/SolarPanel.jpg"
import { Link } from "react-router-dom"


export default function Home (){

let productData1 = {
    pname: "Solar Panels",
    img: SolarPanel,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 300,
    link: "https://en.wikipedia.org/wiki/Solar_panel"
}

let productData2 = {
    pname:"Green Gas",
img: "https://images.pexels.com/photos/668374/pexels-photo-668374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 300,
    link: "https://en.wikipedia.org/wiki/Biofuel"
}

let productData3 = {
    pname: "Heat Pump",
    img: "https://images.pexels.com/photos/10290630/pexels-photo-10290630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 300,
    link: "https://en.wikipedia.org/wiki/Heat_pump"
}

let productData4 = {
    pname: "Ev Charging",
    img: "https://images.pexels.com/photos/27355833/pexels-photo-27355833/free-photo-of-stylish-and-functional-home-ev-charger-blending-seamlessly-with-modern-home-exteriors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 300,
    link: "https://en.wikipedia.org/wiki/Charging_station"
}
    return (
    <>
        <section>
        <div className="home-banner-containter">
            <img src={HomeBanner} />
            <h2>Reduce your footprint and go green</h2>
        </div>
        </section>
        <article>
            <h2 className="second-title">Green Energy Products </h2>
            <div style={
                {display:"flex",
                 flexWrap: "wrap",
                 justifyContent:"center",
                 gap: "32px",
                 maxWidth:"1500px",
                 margin: "auto"
                 
                }}
                >
                <GreenProduct productInfo={productData1}/>
                <GreenProduct productInfo={productData2}/>
                <GreenProduct productInfo={productData3}/>
                <GreenProduct productInfo={productData4}/>

            </div>
        </article>
        <section>
        <div className="carbon-section-container">
            <h2>Shrink Your Carbon Print!</h2>
            <div style={{display:"flex"}}>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
                <img src="https://cdn.pixabay.com/photo/2019/12/01/04/59/footprint-4664709_1280.jpg"></img>
            </div>
            <Link className="carbon-link" style={
                {background:"var( --green-dark)",
                 color:"white", padding:"12px",
                 borderRadius:"9px",
                }} 
                to="calculator">Calculate Carbon Footprint</Link>
            <Link className="carbon-link" to="/reducecarbon">Find out more here</Link>
        </div>
        </section>
        
    </>
    )
}