import "./App.css";
import Header from "./Header";
import RentalDetails from "./RentalDetails";

function App() {
  return (
    <>
      <Header />
      <section className="container">
        <section className="Title">
          <div className="toptitle">
            <h3>Case Details</h3>
          </div>
          <div className="instruction">
            <p>
              Party names and addresses are not collected here - upload your
              tenancy agreement below and they will remaiin in that file only.
            </p>
          </div>
          <div className="disclaimer">
            <div className="disclaimerimg">img</div>
            <div className="disclaimerpara">
              <strong>Privacy First. </strong>
              This app never asks you to type names or addresses. Upload your
              tenancy agreement instead — party details stay inside your file
              and are referenced only as "Applicant" and "Respondent" in the
              generated report.
            </div>
          </div>
        </section>
        <section className="TenancyAgreement">
          <div className="sectiontitle">
            <h5>Tenancy Agreement</h5>
            <small>(optional but recommended)</small>
          </div>
          <div className="sectiondivider"></div>
          <div className="filedropcontent">
            <strong>Drop your tenancy agreement here</strong>
            <span>PDF, .txt, .xml, image scan - any format accepted</span>
          </div>
        </section>
        <RentalDetails/>
      </section>
    </>
  );
}

export default App;
