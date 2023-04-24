import PropTypes from "prop-types"
import { useContext } from "react"
import FeedbackContext from "../data/ContextProvider"

function Stats() {
  const { feedback } = useContext(FeedbackContext)
  const sum = feedback.reduce((a, c) => a + c.rating, 0)
  const average = sum / feedback.length
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Rewiews</h4>
      <h4>
        Average Rating:
        {average % 1 !== 0 ? Number(average.toFixed(1)) : average}
      </h4>
    </div>
  )
}

Stats.protoType = {
  feedback: PropTypes.array.isRequired,
}

export default Stats
