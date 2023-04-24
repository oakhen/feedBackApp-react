import { useContext } from "react"
import FeedbackContext from "../data/ContextProvider"
import FeeedbackItem from "./FeeedbackItem"

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext)

  return feedback.length ? (
    <div className="feedback-list">
      {feedback.map((item, i) => (
        <FeeedbackItem key={i} item={item} />
      ))}
    </div>
  ) : (
    <p>No feed back yet</p>
  )
}

export default FeedbackList
