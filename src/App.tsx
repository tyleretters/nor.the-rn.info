import { BrowserRouter } from 'react-router-dom'
import discography from '@tyleretters/discography'
// import png000558300025 from './assets/000558300025.png'
// import northernInformationAppliedSciencesAndPhantasmsWorkingDivision from '/northern-information-applied-sciences-and-phantasms-working-division.svg'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'

console.log(discography)

function App() {
  return (
    <BrowserRouter basename="/rm_ation">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="m-10 flex justify-between">
          {/* <img
              src={northernInformationAppliedSciencesAndPhantasmsWorkingDivision}
              alt="Northern Information Applied Sciences and Phantasms Working Division"
              className="w-[64px]"
              /> */}
          <h1 className="text-3xl font-bold">nor.the-rn.info/rm_ation</h1>
          <ModeToggle />
          {/* <img src={png000558300025} alt="000558300025" /> */}
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
