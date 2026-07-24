import "../App.css";
import AssessmentSummary from "../components/AssessmentSummary";
import CustomAssessment from "../components/CustomAssessment";
import DemoAssessment from "../components/DemoAssessment";
import GoAndBackButton from "../components/GoAndBackButton";
import Header from "../components/Header";
function Assessment() {
  return (
    <>
      <Header currentStep={3}/>
      <section className="container">
        <AssessmentSummary/>
        <CustomAssessment/>
        <DemoAssessment/>
        <GoAndBackButton previousPath="/evidence" nextPath="/report" />
      </section>
    </>
  );
}

export default Assessment;
