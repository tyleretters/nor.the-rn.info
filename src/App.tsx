import { BrowserRouter } from 'react-router-dom'
import logo from '/northern-information-applied-sciences-and-phantasms-working-division.svg'
import { ThemeProvider } from '@/components/themeProvider'
import { ModeToggle } from '@/components/modeToggle'
import { Button } from '@/components/ui/button'

function App() {
  return (
    <BrowserRouter basename="/rm_ation">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="container mx-auto">
          <div className="mx-5 my-5 flex justify-between">
            <Button variant="outline" asChild>
              <a className="" href="https://nor.the-rn.info">
                &larr; Back
              </a>
            </Button>
            <ModeToggle />
          </div>
        </div>
        <div className="container mx-auto flex place-content-center">
          <img
            src={logo}
            alt="Northern Information Applied Sciences and Phantasms Working Division"
            className="h-auto w-auto p-5 md:w-auto md:max-w-[700px]"
          />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
