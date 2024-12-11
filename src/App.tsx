import { useEffect } from "react"
import Header from "./components/header/header";
import { cn } from "./lib/utils";
import { useTranslation } from "react-i18next";
import ContentWrapper from "./components/content-wrapper";
import Footer from "./components/footer";


const App = () => {

  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.title = t('title');
    window.document.dir = i18n.dir()
  }, [i18n.language]);

  return (
    <div className="h-screen flex flex-col justify-start items-center gap-y-4 font-Cairo selection:bg-teal-200">
      <Header className="mb-10" />
      <div className={cn(
        "flex flex-col justify-center items-center gap-y-4 md:w-3/5 md:min-w-[640px] md:p-0 ",
        'w-full px-3'
      )}>
        < ContentWrapper />
      </div>
      <Footer />
    </div >
  )
}

export default App