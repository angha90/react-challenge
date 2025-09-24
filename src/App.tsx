import { AppHeader } from './components/organisms'
import { CreateAccommodation } from './features/accommodations/components/pages'

function App() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <AppHeader />
      <div className="flex-1">
        <CreateAccommodation />
      </div>
    </div>
  )
}

export default App
