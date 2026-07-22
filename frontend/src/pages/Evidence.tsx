import "../App.css";
import EvidenceFileDrop from "../components/EvidenceFileDrop";
import GoAndBackButton from "../components/GoAndBackButton";
import Header from "../components/Header";
import TextEvidenceCard from "../components/TextEvidenceCard";

function Evidence() {
  return (
    <>
      <Header currentStep={2} />
      <section className="container">
        <EvidenceFileDrop/>
        <TextEvidenceCard/>
        <GoAndBackButton previousPath="/" nextPath="/assessment" />
      </section>
    </>
  );
}

export default Evidence;
