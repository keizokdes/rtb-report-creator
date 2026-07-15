import "./App.css";
import CaseDetailsAndDisclaimer from "./CaseDetailsAndDisclaimer";
import ClaimCategories from "./ClaimCategories";
import Header from "./Header";
import RentalDetails from "./RentalDetails";
import TenancyAgreement from "./TenancyAgreement";

function App() {
  return (
    <>
      <Header />
      <section className="container">
        <CaseDetailsAndDisclaimer/>
        <TenancyAgreement/>
        <RentalDetails/>
        <ClaimCategories/>
      </section>
    </>
  );
}

export default App;
