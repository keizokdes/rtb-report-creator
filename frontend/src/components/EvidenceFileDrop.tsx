import "../App.css";
import "../styles/EvidenceFileDrop.css"
function EvidenceFileDrop() {
  return (
    <section className="evidenceFileDrop">
      <div className="sectiontitle_evidence">
        <h5>Submit Evidence</h5>
        <small>
          Upload files or paste text. All evidence is processed locally and sent
          to the AI for assessment.
        </small>
      </div>
      <div className="filedropcontent_evidence">
        <strong>Drop files here or click to browse</strong>
        <span>.txt, .xml, .csv, .md, .png, .jpg, .pdf</span>
      </div>
    </section>
  );
}

export default EvidenceFileDrop;
