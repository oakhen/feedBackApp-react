import { FaTimes, FaEdit } from "react-icons/fa"
import Card from "./styledComponets/Card"
import FeedbackContext from "../data/ContextProvider"
import { useContext } from "react"
function FeeedbackItem({ item }) {
  const { feedback, setfeedback, feedbackEdit, setFeedbackEdit } =
    useContext(FeedbackContext)
  const deleteFeed = (id) => {
    setfeedback(feedback.filter((item) => item.id !== id))
  }

  const edit = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeed(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit">
        <FaEdit color="purple" onClick={() => edit(item)} />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}
export default FeeedbackItem

/* hum kya karte hai ki prestyled componet create karte hai 
jo chiz hum styled component se achive kar sakte hai. 
wo hum css se v achieve kar sakte hai. but styled componet humko 
logical styling karne dega  */
