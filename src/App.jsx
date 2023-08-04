import Navbar from "./components/Navbar"
import Text_home from "./components/Text_home"
import Btn_more from "./components/btn-more"
import Carrusel from "./components/Carrusel"
function App() {
  return (
    <>
    <Navbar />
    <div className="cont-carrusel">
      <div className="cont-index">
        <Text_home/>
        <Btn_more/>
      </div>
      <Carrusel/>
    </div>
    </>
    
  )
}

export default App
