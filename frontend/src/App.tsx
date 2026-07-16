import AdditionalContextTextBox from "./AdditionalContextTextBox";
import "./App.css";
import CaseDetailsAndDisclaimer from "./CaseDetailsAndDisclaimer";
import ClaimCategories from "./ClaimCategories";
import GoAndBackButton from "./GoAndBackButton";
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
        <AdditionalContextTextBox/>
        <GoAndBackButton/>
      </section>
    </>
  );
}

export default App;
