import "../App.css"
import GoAndBackButton from "../GoAndBackButton"
import Header from '../Header'

function Report() {
  return (
    <>
      <Header/>
      <section className='container'>
      <GoAndBackButton previousPath="/assessment" nextPath="/"/>
      </section>
    </>
  )
}

export default Report
