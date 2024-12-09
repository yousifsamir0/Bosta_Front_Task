import { useEffect } from "react"


const App = () => {

  useEffect(() => {
    document.title = 'Bosta Task';
  }, []);

  return (
    <div>Hello Bosta</div>
  )
}

export default App