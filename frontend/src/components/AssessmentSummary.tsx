import "../styles/AssessmentSummary.css";

function AssessmentSummary() {
  const summaryCategories = [
    "CLAIM CATEGORIES",
    "EVIDENCE ITEMS",
    "MONTHLY RENT",
  ];
  const fakeData = [
    1,
    2,
    1200
  ]
  return (
    <section className="assessmentSummary">
      <div className="sectiontitle_assessment">
        <h5>AI Assessment</h5>
        <small>
          Provide a Claude API key for a real AI analysis, or use the demo
          assessment to explore the report.
        </small>
      </div>
      <div className="summaryCardSection">
        {summaryCategories.map((summaryCategory, index)=>(
            <div className="summaryCard" key={index}>
                <h5>{summaryCategory}</h5>
                <h2>{fakeData[index]}</h2>
            </div>
        ))}
      </div>
    </section>
  );
}

export default AssessmentSummary;
