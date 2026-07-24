import "../styles/CustomAssessment.css";

function CustomAssessment() {
  return (
    <section className="customAssessmentSection">
      <div className="sectiontitle_customAssessment">
        <img src="logo.png" className="logo" />
        <h4>Claude AI Analysis (Recommended)</h4>
        <small>
          For accurate analysis using your actual evidence, provide an Anthropic
          API key. The key is used only for this request and is never stored.
        </small>
      </div>
      <div className="apiKey">
        <div className="formComponent">
          <input type="text" name="api" placeholder="sk-ant-api35..." />
        </div>
      </div>
      <div className="assessmentButtonSection">
        <button className="assessmentButton">
          <img src="logo.png" className="logo" />
          <h4>Run AI Assessment</h4>
        </button>
      </div>
    </section>
  );
}

export default CustomAssessment;
