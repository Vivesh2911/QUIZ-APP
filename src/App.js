import { Routes, Route } from "react-router-dom"
// import Quiz from "./components/Chemistry"
import Landing from "./components/Landing"
import Chemistry from "./components/Chemistry"
import Physics from "./components/Physics"
import Maths from"./components/Maths"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Landing/> } />
        <Route path="/Chemistry" element={ <Chemistry/> } />
        <Route path="/Physics" element={ <Physics/> } />
        <Route path="/Maths" element={ <Maths/> } />


      </Routes>
    </div>
  )
}
  
export default App