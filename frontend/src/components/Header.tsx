import "../styles/Header.css";

interface headerProps {
  currentStep: number;
}

function Header({ currentStep }: headerProps) {
  const steps = ["Case Details", "Evidence", "Assessment", "Report"];

  return (
    <header className="header">
      <div className="headerContent">
        <div className="headerTitleSection">
          <img src="logo.png" alt="Company Logo" className="logo" />
          <h5 className="headerTitle">Tenancy Dispute Report Generator</h5>
        </div>
        <div className="progressBarSection">
          {steps.map((title, index) => (
            <div key={title} className="progressBarSubSection">
              <div className="progressBarComp">
                <h6
                  className={`progressBarCompNum ${
                    currentStep === index + 1
                      ? "active"
                      : currentStep > index + 1
                        ? "done"
                        : ""
                  }`}
                >
                  {currentStep > index + 1 ? "✓" : index + 1}
                </h6>
                <h6 className="progressBarCompTitle">{title}</h6>
              </div>

              {index < steps.length - 1 && (
                <div className="progressBarLine">
                  <hr />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
