import { BrowserRouter } from 'react-router-dom'
import discography from '@tyleretters/discography'
// import png000558300025 from './assets/000558300025.png'
import northernInformationAppliedSciencesAndPhantasmsWorkingDivision from '/northern-information-applied-sciences-and-phantasms-working-division.svg'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'
import Release from '@/components/release'

console.log(discography)

function App() {
  return (
    <BrowserRouter basename="/rm_ation">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="container mx-auto">
          <div className="my-5 mx-5 md:mx-0 flex justify-between">
            <img
                src={northernInformationAppliedSciencesAndPhantasmsWorkingDivision}
                alt="Northern Information Applied Sciences and Phantasms Working Division"
                className="w-[64px]"
                />
            <h1 className="text-3xl">nor.the-rn.info/rm_ation</h1>
            <ModeToggle />
          </div>
          <ul className="releases">
            {discography.map((release) => {
              return (
                <Release
                  key={release.id}
                  release={release}
                />
              )
            })}
          </ul>
          {/* <img src={png000558300025} className="object-fill" alt="000558300025" /> */}
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
