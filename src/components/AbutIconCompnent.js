import { FaQuestion } from "react-icons/fa"
import { Link } from "react-router-dom"

function AbutIconCompnent() {
  return (
    <div className="about-link">
      <Link to={"/about"}>
        <FaQuestion color="white" size={30} />
      </Link>
    </div>
  )
}
export default AbutIconCompnent
