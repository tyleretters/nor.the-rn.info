import discography from '@tyleretters/discography'
import png000558300025 from './assets/000558300025.png'
import northernInformationAppliedSciencesAndPhantasmsWorkingDivision from '/northern-information-applied-sciences-and-phantasms-working-division.svg'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'

console.log(discography)

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <img
        src={northernInformationAppliedSciencesAndPhantasmsWorkingDivision}
        alt="Northern Information Applied Sciences and Phantasms Working Division"
      />
      <img src={png000558300025} alt="000558300025" />
    </ThemeProvider>
  )
}

export default App
