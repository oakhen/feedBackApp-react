import { useContext, useState, useEffect } from "react"
import Card from "../styledComponets/Card"
import Button from "../styledComponets/Button"
import RatingSelect from "../RatingSelect"
import FeedbackContext from "../../data/ContextProvider"
import { v4 as uid } from "uuid"

function FeedbackForm() {
  const { feedback, setfeedback, feedbackEdit, setFeedbackEdit } =
    useContext(FeedbackContext)
  const [text, setText] = useState("")
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState(0)

  useEffect(() => {
    if (feedbackEdit.edit) {
      setText(feedbackEdit.item.text)
      setBtnDisabled(false)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  return (
    <Card>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (text.length === 0 || rating === 0) {
            setMessage("must provide a rating")
          } else if (feedbackEdit.edit) {
            setfeedback(
              feedback.map((item) =>
                item.id === feedbackEdit.item.id
                  ? { ...item, text, rating }
                  : item,
              ),
            )
            setText("")
            setRating(0)
            setBtnDisabled(true)
            setFeedbackEdit({ edit: false })
          } else {
            setfeedback(() => [{ text, rating, id: uid() }, ...feedback])
            setText("")
            setRating(0)
          }
        }}
      >
        <h2>How would you rate your service with us?</h2>
        <RatingSelect
          ratingValue={(rate) => {
            setRating(rate)
          }}
        />
        <div className="input-group">
          <input
            onChange={(e) => {
              let textinput = e.target.value
              if (textinput !== "" && textinput.trim().length >= 10) {
                setBtnDisabled(false)
                setMessage(null)
              } else {
                setBtnDisabled(true)
                setMessage("Text must be at least 10 characters long!")
              }
              setText(e.target.value)
            }}
            type="text"
            placeholder="write a rewiew"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  )
}
export default FeedbackForm
