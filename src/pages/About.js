import { Link, Outlet, useParams } from "react-router-dom"
import Card from "../components/styledComponets/Card"

/* toh data ko store and mutate karna hota hai. jo ki hum 
reducers ka istemaal kar ke karte hai. us data ko hum globally provide karte hai or uske liye hum useContext ka use karte hai. */

/* useReducers bada form hai useState ka. also useState useses reducer hook behind the scene hum kya kar sakte hai for simplicity usecontext ka use karenge data provider and data aega usestate se  */

function About() {
  const params = useParams()

  return (
    <Card>
      <div className="container">
        <h1>This is my about Page</h1>
        <p>This is a React App to leave review of a service</p>
        <p>Version: 1.0.0</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ducimus
          recusandae ut veritatis! Exercitationem, pariatur cumque odio autem
          repellat corrupti adipisci culpa ut et harum distinctio saepe dolor
          vero ducimus.
        </p>
        <Link to="/">Home</Link>
        <p>id: {params.id}</p>
        <p>id2: {params.id2}</p>
      </div>
      <Outlet />
    </Card>
  )
}
export default About
