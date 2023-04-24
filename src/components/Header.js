function Header({ title, bg, fg }) {
  // const mystyle =
  return (
    <header
      style={{
        background: bg,
        color: fg,
      }}
    >
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  )
}
export default Header

/* koi v tag iss tarike se ek style rakh sakta hai */

Header.defaultProps = {
  bg: "#00000040",
  fg: "#ff6a95",
  title: "Feedback UI",
}
