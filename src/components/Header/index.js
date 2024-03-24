// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      alt="wave"
    />
    <h1 className="heading">Wave</h1>
    <div className="c2">
      <ul>
        <li>
          <Link to path="/">
            Home
          </Link>
        </li>
        <li>
          <Link to path="/about">
            About
          </Link>
        </li>
        <li>
          <Link to path="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
)
export default Header
