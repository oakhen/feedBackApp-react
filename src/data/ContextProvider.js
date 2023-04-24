import { createContext, useState } from "react"
import { feedbackData } from "./feedbackData"

const FeedbackContext = createContext()

function FeedProvider({ children }) {
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const [feedback, setfeedback] = useState(feedbackData)
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        setfeedback,
        setFeedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}
export { FeedbackContext as default, FeedProvider }
