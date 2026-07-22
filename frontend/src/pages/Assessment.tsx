import "../App.css";
import GoAndBackButton from "../components/GoAndBackButton";
import Header from "../components/Header";
function Assessment() {
  return (
    <>
      <Header currentStep={3}/>
      <section className="container">
        <GoAndBackButton previousPath="/evidence" nextPath="/report" />
      </section>
    </>
  );
}

export default Assessment;
