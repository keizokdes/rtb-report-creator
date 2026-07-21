import { useNavigate } from "react-router-dom";
import "./GoAndBackButton.css";

interface GoAndBackProps {
  previousPath?: string;
  nextPath: string;
}

function GoAndBackButton({ previousPath, nextPath }: GoAndBackProps) {
  const navigate = useNavigate();

  const handleClickProceed = () => {
    navigate(nextPath);
  };

  const handleClickBack = () => {
    navigate(-1);
  };
  return (
    <section className="GoAndBackButton">
      <div className="BackSection">
        {previousPath && (
          <button className="back" onClick={handleClickBack}>
            Back
          </button>
        )}
      </div>
      <div className="GoSection">
        <button className="go" onClick={handleClickProceed}>
          Continue
        </button>
      </div>
    </section>
  );
}

export default GoAndBackButton;
