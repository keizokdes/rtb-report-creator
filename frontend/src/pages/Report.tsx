import "../App.css"
import GoAndBackButton from "../components/GoAndBackButton"
import Header from '../components/Header'

function Report() {
  return (
    <>
      <Header currentStep={4}/>
      <section className='container'>
      <GoAndBackButton previousPath="/assessment" nextPath="/"/>
      </section>
    </>
  )
}

export default Report
