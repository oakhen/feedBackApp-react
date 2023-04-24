import PropTypes from "prop-types"
function Button({ children, version, type, isDisabled }) {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  version: "primary",
  type: "submit",
  isDisabled: false,
}

Button.protoType = {
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Button

/* is button component ko ultimate level tak style kar sakte hai inline style with way too 
much flexibility */
/* hum yaha pe inline styling kar sakte hai jo ki css independent ho but we will take the css  */

/* this file needs a companion css file  */
