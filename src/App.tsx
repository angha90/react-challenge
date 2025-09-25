import { AppHeader } from './components/organisms'
import { CreateAccommodation } from './features/accommodations/components/pages'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[linear-gradient(32deg,#f15f41_75%,#ffbbad_100%)]">
      <AppHeader />
      <div className="flex grow">
        <CreateAccommodation />
      </div>
    </div>
  )
}

export default App
