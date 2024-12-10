import { useEffect } from "react"
import Header from "./components/header/header";
import Progress from "./components/progress/progress";



const App = () => {

  useEffect(() => {
    document.title = 'Bosta Task';
  }, []);

  return (
    <div className="h-screen flex flex-col justify-start items-center gap-y-4 font-Cairo">
      <Header className="mb-10" />
      <Progress />

    </div>
  )
}

export default App