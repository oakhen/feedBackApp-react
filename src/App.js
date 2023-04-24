import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import Stats from "./components/Stats"
import FeedbackForm from "./components/feedbackform/FeedbackForm"
import AbutIconCompnent from "./components/AbutIconCompnent"
import { FeedProvider } from "./data/ContextProvider"

function App() {
  return (
    <FeedProvider>
      <Header />
      <div className="container">
        <FeedbackForm />
        <Stats />
        <FeedbackList />
      </div>
      <AbutIconCompnent />
    </FeedProvider>
  )
}
export default App
