import "../App.css"
import GoAndBackButton from "../GoAndBackButton"
import Header from '../Header'

function Evidence() {
  return (
    <>
      <Header/>
      <section className='container'>
      <GoAndBackButton previousPath="/" nextPath="/assessment"/>
      </section>
    </>
  )
}

export default Evidence
