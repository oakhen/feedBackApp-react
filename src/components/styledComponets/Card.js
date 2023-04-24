import PropTypes from "prop-types"
function Card({ children, dark }) {
  return (
    <div
      style={{
        background: dark ? "#00000040" : "#fff",
        color: dark ? "#fff" : "#000",
        borderRadius: "15px",
        padding: "40px 50px",
        margin: "20px",
        position: "relative",
        textAlign: "center",
      }}
      className={"card" + (!!dark ? " card-day" : " card-night")}

      /* conditional className dalna hai toh paranthese ke andar dalna hai. */
    >
      {children}
    </div>
  )
}

Card.defaultProps = {
  dark: false,
}
Card.protoTypes = {
  dark: PropTypes.bool,
  children: PropTypes.node.isRequired,
}
export default Card
