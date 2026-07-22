import "../styles/ClaimCategories.css";
import "../App.css";
function ClaimCategories() {
  const violations = [
    "Wrongful Eviction / End of Tenancy",
    "Security Deposit Dispute",
    "Unlawful Rent Increase",
    "Breach of Quiet Enjoyment",
    "Failure to Repair / Maintain",
    "Illegal Lockout",
    "Interruption of Services / Utilities",
    "Unauthorized Entry",
    "Discriminatory Action",
    "Other RTA Violation",
  ];
  return (
    <section className="ClaimCategories">
      <div className="sectiontitle">
        <h5>Claim Categories</h5>
      </div>
      <div className="sectiondivider"></div>
      <div className="selectSection">
        {violations.map((violation, index) => (
          <div className="selectComponent" key={index}>
            <input
              type="checkbox"
              id={`violation-${index}`}
              name="violation"
              value={violation}
            />
            <label htmlFor={`violation-${index}`}>{violation}</label>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClaimCategories;
