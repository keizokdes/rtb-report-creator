import Header from "../Header";
import CaseDetailsAndDisclaimer from "../CaseDetailsAndDisclaimer";
import TenancyAgreement from "../TenancyAgreement";
import AdditionalContextTextBox from "../AdditionalContextTextBox";
import ClaimCategories from "../ClaimCategories";
import GoAndBackButton from "../GoAndBackButton";
import RentalDetails from "../RentalDetails";

function Home() {
  return (
    <>
      <Header />
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
