import Header from "../components/Header";
import CaseDetailsAndDisclaimer from "../components/CaseDetailsAndDisclaimer";
import TenancyAgreement from "../components/TenancyAgreement";
import AdditionalContextTextBox from "../components/AdditionalContextTextBox";
import ClaimCategories from "../components/ClaimCategories";
import GoAndBackButton from "../components/GoAndBackButton";
import RentalDetails from "../components/RentalDetails";
import "../App.css"

function Home() {
  return (
    <>
      <Header currentStep={1} />
      <section className="container">
        <CaseDetailsAndDisclaimer />
        <TenancyAgreement />
        <RentalDetails />
        <ClaimCategories />
        <AdditionalContextTextBox />
        <GoAndBackButton nextPath="/evidence"/>
      </section>
    </>
  );
}

export default Home;
