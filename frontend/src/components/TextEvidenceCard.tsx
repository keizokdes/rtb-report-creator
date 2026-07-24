import "../styles/TextEvidenceCard.css";
function TextEvidenceCard() {
  return (
    <section className="textEvidenceCard">
      <div className="titleSection_evidence">
        <h4>Add Text Evidence</h4>
        <small>
          Paste emails, text messages, notices, or written descriptions of
          events.
        </small>
      </div>
      <div className="textSection_evidence">
        <div className="formComponent" style={{height: "5rem"}}>
          <label>TITLE / EVIDENCE</label>
          <textarea
            name="title evidence"
            placeholder="e.g. Email from landlord re:rent increase"
          />
        </div>
        <div className="formComponent" style={{height: "10rem"}}>
          <label>Content</label>
          <textarea
            name="content"
            placeholder="Paste the text content here."
          />
        </div>
      </div>
      <div className="submitButton">
        <button>+ Add Evidence</button>
      </div>
    </section>
  );
}

export default TextEvidenceCard;
