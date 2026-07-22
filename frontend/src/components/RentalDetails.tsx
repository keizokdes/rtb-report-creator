import { useState } from "react";
import "../App.css";
import "../styles/RentalDetails.css";
function RentalDetails() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <section className="RentalDetails">
      <div className="sectiontitle">
        <h5>Rental Details</h5>
      </div>
      <div className="sectiondivider"></div>
      <div className="formSection">
        <div className="formComponent" style={{ width: "25rem" }}>
          <label>FIRST NAME</label>
          <input type="text" name="FirstName" placeholder="FirstName" />
        </div>
        <div className="formComponent" style={{ width: "25rem" }}>
          <label>LAST NAME</label>
          <input type="text" name="LastName" placeholder="LastName" />
        </div>
        <div className="calendarComponent" style={{ width: "15rem" }}>
          <label>TENANCY START DATE</label>
          <input
            type="date"
            id="date-picker"
            style={{}}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="calendarComponent" style={{ width: "15rem" }}>
          <label>TENANCY END DATE</label>
          <input
            type="date"
            id="date-picker"
            style={{}}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="calendarComponent" style={{ width: "15rem" }}>
          <label>INCIDENT / DISPUTE DATE</label>
          <input
            type="date"
            id="date-picker"
            style={{}}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}

export default RentalDetails;
