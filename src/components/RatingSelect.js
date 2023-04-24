import { useContext, useEffect, useState } from "react"
import FeedbackContext from "../data/ContextProvider"

function RatingSelect({ ratingValue }) {
  const { feedbackEdit } = useContext(FeedbackContext)
  const [checked, setChecked] = useState(null)

  const handleChange = (e) => {
    setChecked(+e.target.value)
    ratingValue(+e.target.value)
  }

  useEffect(() => {
    if (feedbackEdit.edit) {
      setChecked(feedbackEdit.item.rating)
    } else {
      setChecked(null)
    }
  }, [feedbackEdit])
  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          name="checked"
          onChange={handleChange}
          value={1}
          checked={checked === 1}
          id="num1"
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          name="checked"
          onChange={handleChange}
          value={2}
          checked={checked === 2}
          id="num2"
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          name="checked"
          onChange={handleChange}
          value={3}
          checked={checked === 3}
          id="num3"
        />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input
          type="radio"
          name="checked"
          onChange={handleChange}
          value={4}
          checked={checked === 4}
          id="num4"
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          type="radio"
          name="checked"
          onChange={handleChange}
          value={5}
          checked={checked === 5}
          id="num5"
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
          type="radio"
          name="checked"
          onChange={handleChange}
          value={6}
          checked={checked === 6}
          id="num6"
        />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input
          type="radio"
          name="checked"
          onChange={handleChange}
          value={7}
          checked={checked === 7}
          id="num7"
        />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input
          type="radio"
          name="checked"
          onChange={handleChange}
          value={8}
          checked={checked === 8}
          id="num8"
        />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input
          type="radio"
          name="checked"
          onChange={handleChange}
          value={9}
          checked={checked === 9}
          id="num9"
        />
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input
          type="radio"
          name="checked"
          onChange={handleChange}
          value={10}
          checked={checked === 10}
          id="num10"
        />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  )
}
export default RatingSelect
