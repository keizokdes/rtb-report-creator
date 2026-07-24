import { useState } from "react";
import "../styles/DemoAssessment.css";

function DemoAssessment() {
  const [demoPushedFlag, setDemoPushedFlag] = useState(false);

  const renderDemoAssessmentReady = () => {
    return (
      <div className="demoAssessmentReadySection">
        <span>✓</span>
        <h4>Assessment ready</h4>
        <small>
          Based on the evidence provided, the Applicant has potential RTB claims
          against the Respondent regarding the tenancy in British Columbia. The
          evidence suggests 1…
        </small>
      </div>
    );
  };


  return (
    <section className="demoAssessmnetSection">
      <div className="sectionBarSection">
        <hr />
        <span>Or</span>
        <hr />
      </div>
      <div className="demoButtonSection">
        <button onClick={()=>setDemoPushedFlag(true)}>
          <h4>Use Demo Assessment (no API key required)</h4>
        </button>
      </div>
      {demoPushedFlag && renderDemoAssessmentReady()}
    </section>
  );
}

export default DemoAssessment;
