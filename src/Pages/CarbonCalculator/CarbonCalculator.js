import "./CarbonCalculator.css";
import { useState } from "react";

export default function CarbonCalculator() {
  const [activeForm, setActiveForm] = useState("Electricity"); // Default to Form Electricity

  const [electricityUsage, setElectricityUsage] = useState("");
  const [country, setCountry] = useState("");

  const [numberOfPassenger, setNumberOfPassenger] = useState("");
  const [departureIATA, setDepartureIATA] = useState("");
  const [destinationIATA, setDestinationIATA] = useState("");

  const [vehicleType, setVehicleType] = useState("");
  const [distanceTravelled, setDistanceTravelled] = useState("");

  const [items, setItems] = useState(new Set());

  const addItem = (item, e) => {
    e.preventDefault(); // Prevent form submission
    setItems((prevItems) => new Set([...prevItems, item]));
  };

  if (items.size < 3) {
    console.log(items);
    
  }

  return (
    <div className="form-container">
      {/* Buttons to switch between forms */}
      <div>
        <button onClick={() => setActiveForm("Electricity")}>
          Show Form Electricity
        </button>
        <button onClick={() => setActiveForm("Flight")}>
          Show Form Flight
        </button>
        <button onClick={() => setActiveForm("Vehicle")}>
          Show Form Vehicle
        </button>
      </div>

      {/* Conditionally render forms and pass the lifted state via props */}
      <div>
        {activeForm === "Electricity" && (
          <FormElectricity
            electricityUsage={electricityUsage}
            setElectricityUsage={setElectricityUsage}
            country={country}
            setCountry={setCountry}
            addItem={addItem}
          />
        )}
        {activeForm === "Flight" && (
          <FormFlight
            numberOfPassenger={numberOfPassenger}
            setNumberOfPassenger={setNumberOfPassenger}
            departureIATA={departureIATA}
            setDepartureIATA={setDepartureIATA}
            destinationIATA={destinationIATA}
            setDestinationIATA={setDestinationIATA}
            addItem={addItem}
          />
        )}
        {activeForm === "Vehicle" && (
          <FormVehicle
            vehicleType={vehicleType}
            setVehicleType={setVehicleType}
            distanceTravelled={distanceTravelled}
            setDistanceTravelled={setDistanceTravelled}
            addItem={addItem}
          />
        )}
      </div>
    </div>
  );
}

function FormElectricity({ electricityUsage, setElectricityUsage, country, setCountry,addItem }) {
  return (
    <form>
      <input
        placeholder="Electricity usage"
        value={electricityUsage}
        onChange={(e) => setElectricityUsage(e.target.value)}
      />
      <input
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button className="calculator-from" type="submit" onClick={(e)=>addItem("A")}>
        submit
      </button>
    </form>
  );
}

function FormFlight({
  numberOfPassenger,
  setNumberOfPassenger,
  departureIATA,
  setDepartureIATA,
  destinationIATA,
  setDestinationIATA,
  addItem,
}) {
    
  return (
    <form>
      <input
        placeholder="Number of Passenger"
        value={numberOfPassenger}
        onChange={(e) => setNumberOfPassenger(e.target.value)}
      />
      <label>
        <input type="radio" name="flight" value="Return" />
        <span>Return</span>
      </label>
      <input
        placeholder="Departure IATA"
        value={departureIATA}
        onChange={(e) => setDepartureIATA(e.target.value)}
      />
      <input
        placeholder="Destination IATA"
        value={destinationIATA}
        onChange={(e) => setDestinationIATA(e.target.value)}
      />
      <button className="calculator-from" type="submit" onClick={(e)=>addItem("B")}>
        submit
      </button>
    </form>
  );
}

function FormVehicle({ vehicleType, setVehicleType, distanceTravelled, setDistanceTravelled, addItem }) {
  return (
    <form>
      <input
        placeholder="Vehicle type"
        value={vehicleType}
        onChange={(e) => setVehicleType(e.target.value)}
      />
      <input
        placeholder="Mileage"
        value={distanceTravelled}
        onChange={(e) => setDistanceTravelled(e.target.value)}
      />
      <button className="calculator-from" type="submit" onClick={(e)=>addItem("C")}>
        submit
      </button>
    </form>
  );
}
