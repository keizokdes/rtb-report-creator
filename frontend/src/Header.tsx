import "./App.css";

function Header() {
  return (
    <header className="header">
      <div className="headerContent">
        <div className="headerTitleSection">
          <img src="logo.png" alt="Company Logo" className="logo" />
          <h5 className="headerTitle">Tenancy Dispute Report Generator</h5>
        </div>
        <div className="progressBarSection">
          <div className="progressBarSubSection">
            <div className="progressBarComp">
              <h6 className="progressBarCompNum">1</h6>
              <h6 className="progressBarCompTitle">Case Details</h6>
            </div>
            <div className="progressBarLine">
              <hr></hr>
            </div>
          </div>
          <div className="progressBarSubSection">
            <div className="progressBarComp">
              <h6 className="progressBarCompNum">2</h6>
              <h6 className="progressBarCompTitle">Evidence</h6>
            </div>
            <div className="progressBarLine">
              <hr></hr>
            </div>
          </div>
          <div className="progressBarSubSection">
            <div className="progressBarComp">
              <h6 className="progressBarCompNum">3</h6>
              <h6 className="progressBarCompTitle">Assessment</h6>
            </div>
            <div className="progressBarLine">
              <hr></hr>
            </div>
          </div>
          <div className="progressBarSubSection">
            <div className="progressBarComp">
              <h6 className="progressBarCompNum">4</h6>
              <h6 className="progressBarCompTitle">Report</h6>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
