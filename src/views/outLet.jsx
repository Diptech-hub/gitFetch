import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"

function OutLet() {
  return (
    <div>
      <Outlet />
      <p>  <Link  to="/"><b>Home Page</b></Link></p>
      <p>  <Link to="/error"><b>Error Page</b></Link></p>
      </div>

  )
}
export default OutLet