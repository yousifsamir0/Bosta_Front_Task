import { useEffect } from "react"
import Header from "./components/header/header";
import Progress from "./components/progress/progress";
import TrackingEvents from "./components/Tracking/tracking-events";
import { cn } from "./lib/utils";



const App = () => {

  useEffect(() => {
    document.title = 'Bosta Task';
  }, []);

  return (
    <div className="h-screen flex flex-col justify-start items-center gap-y-4 font-Cairo">
      <Header className="mb-10" />
      <div className={cn(
        "flex flex-col justify-center items-start gap-y-4 md:w-3/5 md:min-w-[640px] md:p-0 ",
        'w-full px-3'
      )}>
        <Progress className="mb-6" />
        <TrackingEvents />
      </div>

    </div>
  )
}

export default App