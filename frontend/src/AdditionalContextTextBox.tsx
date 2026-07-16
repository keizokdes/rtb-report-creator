import "./AdditionalContextTextBox.css";
import "./App.css";

function AdditionalContextTextBox() {
  return (
    <section className="AdditionalContextTextBox">
      <div className="sectiontitle">
        <h5>Additional Contexts</h5>
      </div>
      <div className="sectiondivider"></div>
      <div className="textComponent">
        <textarea id="additionalContext" name="additionalContext" style={{width: "80vw", height: "30vh"}}>
          Briefly explain what happened, when, how affected you.
        </textarea>
      </div>
    </section>
  );
}

export default AdditionalContextTextBox;
