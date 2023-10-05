import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <Link to="/">home</Link><br />
        <Link to="/nosotros">nosotros</Link><br />
        <Link to="/contacto">contacto</Link><br />
        <Link to="/sorteos">sorteos</Link><br />
        <Link to="/login">login</Link>
    </div>
  )
}

export default Navbar