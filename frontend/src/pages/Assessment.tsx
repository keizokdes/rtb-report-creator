import "../App.css";
import GoAndBackButton from "../GoAndBackButton";
import Header from "../Header";
function Assessment() {
  return (
    <>
      <Header />
      <section className="container">
        <GoAndBackButton previousPath="/evidence" nextPath="/report" />
      </section>
    </>
  );
}

export default Assessment;
